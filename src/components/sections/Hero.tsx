import { ArrowDownRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-border pt-20">
      <div className="hero-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="size-2 rounded-full bg-signal" /> {siteConfig.availability}
          </div>
          <p className="mb-5 font-mono text-sm font-medium uppercase tracking-widest text-primary">{siteConfig.role} · {siteConfig.location}</p>
          <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[1.02] text-foreground sm:text-7xl lg:text-8xl">Digital products, built with purpose.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">{siteConfig.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" asChild><a href="#projects">View Projects <ArrowDownRight /></a></Button>
            <Button size="lg" variant="outline" asChild><a href="#booking"><CalendarDays /> Book a Call</a></Button>
          </div>
        </div>
        <div className="mt-20 grid max-w-xl grid-cols-2 border-t border-border pt-5 text-sm sm:grid-cols-3">
          <div><span className="block font-mono text-xs text-muted-foreground">FOCUS</span><span className="mt-1 block font-medium">Web experiences</span></div>
          <div><span className="block font-mono text-xs text-muted-foreground">BASED IN</span><span className="mt-1 block">{siteConfig.location}</span></div>
          <div className="hidden sm:block"><span className="block font-mono text-xs text-muted-foreground">STATUS</span><span className="mt-1 block">Open to work</span></div>
        </div>
      </div>
    </section>
  );
}
