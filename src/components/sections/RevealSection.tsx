import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

interface RevealSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function RevealSection({ id, children, className }: RevealSectionProps) {
  const { ref, isVisible } = useReveal<HTMLElement>();
  return (
    <section id={id} ref={ref} className={cn("scroll-mt-20 py-20 transition-all duration-700 md:py-28", isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0", className)}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">{children}</div>
    </section>
  );
}
