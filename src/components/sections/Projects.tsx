import { ArrowUpRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { RevealSection } from "./RevealSection";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <RevealSection id="projects" className="border-y border-border bg-surface">
      <SectionHeading eyebrow="02 / Selected work" title="Projects made to work beautifully." description="A selection of live products spanning commerce, travel, fashion, and service experiences." />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.id} className={`group overflow-hidden rounded-lg border border-border bg-card transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl ${index === projects.length - 1 ? "md:col-span-2 md:grid md:grid-cols-2" : ""}`}>
            <div className="aspect-[16/10] overflow-hidden bg-muted">
              <img src={project.imageUrl ?? project.image} alt={`${project.title} project cover`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = project.image; }} />
            </div>
            <div className="flex flex-col p-6 sm:p-7">
              <div className="mb-4 flex items-start justify-between gap-4"><h3 className="font-display text-2xl font-semibold">{project.title}</h3><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div>
              <p className="leading-7 text-muted-foreground">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag} variant="outline" className="rounded-sm font-normal">{tag}</Badge>)}</div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild><a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo <ArrowUpRight /></a></Button>
                {project.detailsUrl && <Button variant="outline" asChild><a href={project.detailsUrl}><FileText /> Details</a></Button>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}
