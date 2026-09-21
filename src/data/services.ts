import { Code2, Gauge, Layers3, type LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

// TODO: edit — tailor these services to the work you offer.
export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Responsive, production-ready websites built around your goals, audience, and content.",
    icon: Code2,
  },
  {
    id: "product-interfaces",
    title: "Product Interfaces",
    description: "Clear, scalable dashboards and web app experiences designed for real-world workflows.",
    icon: Layers3,
  },
  {
    id: "performance-care",
    title: "Performance & Care",
    description: "Audits, refinements, and ongoing improvements that keep your digital product feeling fast.",
    icon: Gauge,
  },
];
