import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { navigation, siteConfig } from "@/config/site";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3 font-display text-base font-semibold text-foreground" onClick={() => setOpen(false)}>
          <span className="grid size-8 place-items-center rounded-sm bg-primary text-xs font-bold text-primary-foreground">{siteConfig.initials}</span>
          <span>Ayoub&nbsp;</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="rounded-sm px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
          <span className="ml-2"><ThemeToggle /></span>
        </div>
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-border bg-background px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="border-b border-border py-3 text-sm font-medium last:border-0" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
