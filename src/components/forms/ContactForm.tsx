import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitWeb3Form } from "@/config/web3forms";
import { FormField } from "./FormField";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email.").max(255),
  subject: z.string().trim().min(3, "Please add a subject.").max(150),
  message: z.string().trim().min(10, "Please share a little more detail.").max(2000),
  botcheck: z.string().max(0).optional(),
});
type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactValues>({ resolver: zodResolver(contactSchema), defaultValues: { name: "", email: "", subject: "", message: "", botcheck: "" } });

  async function onSubmit(values: ContactValues) {
    try {
      await submitWeb3Form({ ...values, botcheck: values.botcheck ?? "", subject: "New Contact Message from Portfolio", inquiry_subject: values.subject, from_name: "Portfolio Contact Form" });
      toast.success("Message sent", { description: "Thanks — I'll get back to you soon." });
      reset();
    } catch (error) {
      toast.error("Message not sent", { description: error instanceof Error ? error.message : "Please try again." });
    }
  }

  return <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" noValidate>
    <input type="checkbox" className="hidden" tabIndex={-1} autoComplete="off" {...register("botcheck")} />
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField id="contact-name" label="Name" error={errors.name?.message}><Input id="contact-name" placeholder="Your name" autoComplete="name" {...register("name")} /></FormField>
      <FormField id="contact-email" label="Email" error={errors.email?.message}><Input id="contact-email" type="email" placeholder="you@example.com" autoComplete="email" {...register("email")} /></FormField>
    </div>
    <FormField id="contact-subject" label="Subject" error={errors.subject?.message}><Input id="contact-subject" placeholder="How can I help?" {...register("subject")} /></FormField>
    <FormField id="contact-message" label="Message" error={errors.message?.message}><Textarea id="contact-message" className="min-h-36" placeholder="Tell me about your project..." {...register("message")} /></FormField>
    <Button type="submit" size="lg" disabled={isSubmitting} className="justify-self-start">{isSubmitting ? <Loader2 className="animate-spin" /> : <Send />} {isSubmitting ? "Sending..." : "Send Message"}</Button>
  </form>;
}
