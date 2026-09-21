export const siteConfig = {
  // TODO: edit — replace the portfolio owner details below.
  name: "Ayoub",
  initials: "AB",
  role: "Web Developer",
  tagline: "I build fast, thoughtful digital products that turn ambitious ideas into clear, memorable experiences.",
  bio: "I'm a web developer focused on creating polished, accessible interfaces and dependable products. I enjoy turning complex requirements into simple experiences that feel effortless to use.",
  email: "ayoub123123321321@gmail.com",
  location: "Algiers, Algeria",
  availability: "Available for select projects",
  socials: [
    // TODO: edit — replace these placeholder social profile links.
    { label: "", url: "https://github.com/", username: "github.com/yourname" },
    { label: "", url: "https://www.linkedin.com/", username: "linkedin.com/in/yourname" },
  ],
  seo: {
    // TODO: edit — customize these search and sharing texts.
    title: "Ayoub — Web Developer",
    description: "Portfolio of Ayoub, a web developer building modern, responsive, and high-performing digital experiences.",
  },
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Book a call", href: "#booking" },
  { label: "Contact", href: "#contact" },
] as const;
