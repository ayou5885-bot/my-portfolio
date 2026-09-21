import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarCheck, Loader2 } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { submitWeb3Form } from "@/config/web3forms";
import { services } from "@/data/services";
import { FormField } from "./FormField";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email.").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").max(30),
  service_type: z.string().min(1, "Please choose a service."),
  preferred_date: z.string().min(1, "Please choose a date."),
  preferred_time: z.string().min(1, "Please choose a time."),
  notes: z.string().trim().max(1500).optional(),
  botcheck: z.string().max(0).optional(),
});
type BookingValues = z.infer<typeof bookingSchema>;

function todayLocal() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  return new Date(now.getTime() - offset * 60_000).toISOString().split("T")[0];
}

export function BookingForm() {
  const { register, control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<BookingValues>({ resolver: zodResolver(bookingSchema), defaultValues: { name: "", email: "", phone: "", service_type: "", preferred_date: "", preferred_time: "", notes: "", botcheck: "" } });

  async function onSubmit(values: BookingValues) {
    try {
      await submitWeb3Form({ ...values, notes: values.notes ?? "", botcheck: values.botcheck ?? "", subject: "New Booking Request from Portfolio", from_name: "Portfolio Booking Form" });
      toast.success("Request received", { description: "I'll review your preferred time and reply shortly." });
      reset();
    } catch (error) {
      toast.error("Request not sent", { description: error instanceof Error ? error.message : "Please try again." });
    }
  }

  return <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" noValidate>
    <input type="checkbox" className="hidden" tabIndex={-1} autoComplete="off" {...register("botcheck")} />
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField id="booking-name" label="Name" error={errors.name?.message}><Input id="booking-name" placeholder="Your name" autoComplete="name" {...register("name")} /></FormField>
      <FormField id="booking-email" label="Email" error={errors.email?.message}><Input id="booking-email" type="email" placeholder="you@example.com" autoComplete="email" {...register("email")} /></FormField>
    </div>
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField id="booking-phone" label="Phone" error={errors.phone?.message}><Input id="booking-phone" type="tel" placeholder="+213 ..." autoComplete="tel" {...register("phone")} /></FormField>
      <FormField id="booking-service" label="Service type" error={errors.service_type?.message}>
        <Controller control={control} name="service_type" render={({ field }) => <Select value={field.value} onValueChange={field.onChange}><SelectTrigger id="booking-service"><SelectValue placeholder="Choose a service" /></SelectTrigger><SelectContent>{services.map((service) => <SelectItem key={service.id} value={service.title}>{service.title}</SelectItem>)}</SelectContent></Select>} />
      </FormField>
    </div>
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField id="booking-date" label="Preferred date" error={errors.preferred_date?.message}><Input id="booking-date" type="date" min={todayLocal()} {...register("preferred_date")} /></FormField>
      <FormField id="booking-time" label="Preferred time" error={errors.preferred_time?.message}><Input id="booking-time" type="time" {...register("preferred_time")} /></FormField>
    </div>
    <FormField id="booking-notes" label="Notes (optional)" error={errors.notes?.message}><Textarea id="booking-notes" className="min-h-28" placeholder="A little context about your project..." {...register("notes")} /></FormField>
    <Button type="submit" size="lg" disabled={isSubmitting} className="justify-self-start">{isSubmitting ? <Loader2 className="animate-spin" /> : <CalendarCheck />} {isSubmitting ? "Sending..." : "Request a Call"}</Button>
  </form>;
}
