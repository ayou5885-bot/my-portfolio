import { skills } from "@/data/skills";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { RevealSection } from "./RevealSection";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <RevealSection id="about">
      <SectionHeading eyebrow="01 / About" title="Building at the intersection of clarity and craft." />
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        <p className="text-xl leading-9 text-foreground sm:text-2xl">{siteConfig.bio}</p>
        <div>
          <p className="mb-5 text-sm font-medium text-muted-foreground">Tools I use to bring ideas to life</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => <Badge key={skill.id} variant="secondary" className="rounded-sm px-3 py-2 font-normal">{skill.name}</Badge>)}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
