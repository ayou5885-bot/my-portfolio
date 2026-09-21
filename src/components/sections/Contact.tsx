import { ArrowUpRight, Mail } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";
import { RevealSection } from "./RevealSection";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return <RevealSection id="contact">
    <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
      <div><SectionHeading eyebrow="05 / Contact" title="Have a project in mind? Say hello." description="Send the essentials and I'll reply with thoughtful questions, practical guidance, and a clear way forward." />
        <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"><Mail className="size-4" />{siteConfig.email}<ArrowUpRight className="size-4" /></a>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 sm:p-8"><ContactForm /></div>
    </div>
  </RevealSection>;
}
