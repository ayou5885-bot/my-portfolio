import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme");
    const dark = stored ? stored === "dark" : true;
    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("portfolio-theme", next ? "dark" : "light");
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}>
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
