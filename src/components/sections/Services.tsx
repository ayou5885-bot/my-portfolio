import { services } from "@/data/services";
import { RevealSection } from "./RevealSection";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <RevealSection id="services">
      <SectionHeading eyebrow="03 / Services" title="Focused support, from first idea to final polish." />
      <div className="grid border-l border-t border-border md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return <article key={service.id} className="border-b border-r border-border p-7 transition-colors hover:bg-surface sm:p-9">
            <div className="mb-10 flex items-center justify-between"><Icon className="size-6 text-primary" /><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div>
            <h3 className="font-display text-xl font-semibold">{service.title}</h3>
            <p className="mt-3 leading-7 text-muted-foreground">{service.description}</p>
          </article>;
        })}
      </div>
    </RevealSection>
  );
}
