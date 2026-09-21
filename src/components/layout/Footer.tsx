import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Ayoub. All rights reserved.</p>
      </div>
    </footer>
  );
}
