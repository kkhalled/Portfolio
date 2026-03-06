"use client";

import { useEffect, useState } from "react";
import type { NavSection } from "@/src/types";

const SECTIONS: NavSection[] = ["about", "experience", "projects", "contact"];

export function useScrollSpy(): NavSection | "" {
  // Start with nothing active — a section only activates when the user
  // scrolls to it or clicks its nav link.
  const [active, setActive] = useState<NavSection | "">("");

  useEffect(() => {
    const onScroll = () => {
      // Use 50% of the viewport height as the threshold so a section only
      // becomes active when it has actually reached the middle of the screen.
      // This prevents "about" from activating while the hero is still visible.
      const threshold = window.innerHeight * 0.5;
      let current: NavSection | "" = "";
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i]);
        if (el && window.scrollY >= el.offsetTop - threshold) {
          current = SECTIONS[i];
          break;
        }
      }
      setActive(current);
    };

    // Do NOT call onScroll() on mount — let the nav start with nothing active.
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return active;
}
