import { Check } from "lucide-react";
import { BookingForm } from "@/components/forms/BookingForm";
import { RevealSection } from "./RevealSection";
import { SectionHeading } from "./SectionHeading";

export function Booking() {
  return <RevealSection id="booking" className="border-y border-border bg-surface">
    <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
      <div><SectionHeading eyebrow="04 / Booking" title="Let's put a good idea on the calendar." description="Choose what you need and suggest a time. I'll follow up by email to confirm the conversation." />
        <ul className="space-y-3 text-sm text-muted-foreground">{["A focused, no-pressure conversation", "Clear next steps after the call", "Remote-friendly collaboration"].map((item) => <li key={item} className="flex items-center gap-3"><span className="grid size-5 place-items-center rounded-full bg-primary/10 text-primary"><Check className="size-3" /></span>{item}</li>)}</ul>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 sm:p-8"><BookingForm /></div>
    </div>
  </RevealSection>;
}
