import nomadImage from "@/assets/projects/nomad.png";
import laptopStoreImage from "@/assets/projects/laptop-store.png";
import voltImage from "@/assets/projects/volt.png";
import ayoFashionImage from "@/assets/projects/ayo-fashion.png";
import carServiceImage from "@/assets/projects/car-service.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  image: string;
  imageUrl?: string;
  detailsUrl?: string;
}

// TODO: edit — replace descriptions/tags and swap matching images in assets/projects.
export const projects: Project[] = [
  {
    id: "nomad",
    title: "Nomad",
    description: "A brand website for an urban electric bike, presenting its features, technology and lifestyle in a clean, editorial layout.",
    tags: ["React", "TypeScript", "Travel UX"],
    liveUrl: "https://nomad-p9we.vercel.app/",
    image: nomadImage,
  },
  {
    id: "laptop-store",
    title: "Laptop E-Commerce Store",
    description: "An online laptop store with 40+ models from Dell, HP, Lenovo, ASUS, Acer and Apple, organized for business, gaming, creative work and everyday use.",
    tags: ["E-commerce", "React", "Responsive"],
    liveUrl: "https://laptop-e-commerce-store.vercel.app/",
    image: laptopStoreImage,
  },
  {
    id: "volt",
    title: "Volt",
    description: "An online store for PC components, peripherals and gaming systems, with a bold dark interface, shop and category browsing, search and a cart.",
    tags: ["Frontend", "UI Design", "Performance"],
    liveUrl: "https://volt-last-one.vercel.app/",
    image: voltImage,
  },
  {
    id: "ayo-fashion",
    title: "Ayo Fashion",
    description: "A modern luxury fashion storefront with a refined, editorial presentation of the collection.",
    tags: ["Fashion", "Commerce", "UX"],
    liveUrl: "https://ayo-fashion.vercel.app/",
    image: ayoFashionImage,
  },
  {
    id: "car-service",
    title: "Car Service",
    description: "A car repair website built around open diagnostics, certified technicians and written estimates, with a clear Book a Bay call to action.",
    tags: ["Service Design", "React", "Mobile-first"],
    liveUrl: "https://car-service-web-six.vercel.app/",
    image: carServiceImage,
  },
];
