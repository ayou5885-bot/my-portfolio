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
    description: "A refined travel experience for discovering places, planning stays, and moving with confidence.",
    tags: ["React", "TypeScript", "Travel UX"],
    liveUrl: "https://nomad-p9we.vercel.app/",
    image: nomadImage,
  },
  {
    id: "laptop-store",
    title: "Laptop E-Commerce Store",
    description: "A conversion-focused storefront that makes comparing and buying the right laptop effortless.",
    tags: ["E-commerce", "React", "Responsive"],
    liveUrl: "https://laptop-e-commerce-store.vercel.app/",
    image: laptopStoreImage,
  },
  {
    id: "volt",
    title: "Volt",
    description: "A bold product experience combining crisp interaction design with a high-energy visual system.",
    tags: ["Frontend", "UI Design", "Performance"],
    liveUrl: "https://volt-last-one.vercel.app/",
    image: voltImage,
  },
  {
    id: "ayo-fashion",
    title: "Ayo Fashion",
    description: "An editorial fashion storefront with expressive layouts and a smooth path from discovery to purchase.",
    tags: ["Fashion", "Commerce", "UX"],
    liveUrl: "https://ayo-fashion.vercel.app/",
    image: ayoFashionImage,
  },
  {
    id: "car-service",
    title: "Car Service",
    description: "A trustworthy service website that helps drivers explore maintenance options and take the next step.",
    tags: ["Service Design", "React", "Mobile-first"],
    liveUrl: "https://car-service-web-six.vercel.app/",
    image: carServiceImage,
  },
];
