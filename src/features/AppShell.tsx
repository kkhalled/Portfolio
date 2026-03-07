"use client";

import SidebarNav from "./nav/SidebarNav";
import Hero from "./hero/Hero";
import About from "./about/About";
import ExperienceList from "./experience/ExperienceList";
import ProjectsGrid from "./projects/ProjectsGrid";
import Contact from "./contact/Contact";
import BackToTop from "../ui/BackToTop";
import CustomCursor from "../ui/CustomCursor";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useMousePosition } from "../hooks/useMousePosition";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { mainReveal } from "../lib/animations";
import { useSplash } from "../lib/SplashContext";

export default function AppShell() {
  const active = useScrollSpy();
  useMousePosition();
  const { splashDone } = useSplash();

  // Mobile detection — mirrors the `lg` breakpoint (1024 px) in Tailwind
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 1023px)").matches
      : false,
  );
  const [sectionsReady, setSectionsReady] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 1023px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // On mobile, trigger section reveals after the hero finishes animating.
  // splashDone fires at ~3.6 s from mount; hero items complete around 5.8 s
  // (delayChildren: 5 + stagger + item duration). A 2 s buffer after
  // splashDone lands at ~5.6 s — right as the hero wraps up.
  useEffect(() => {
    if (!splashDone || !isMobile) return;
    const t = setTimeout(() => setSectionsReady(true), 2000);
    return () => clearTimeout(t);
  }, [splashDone, isMobile]);

  // Helper: motion props for each mobile section wrapper, staggered by `delay`
  const mobileSection = (delay: number) => ({
    initial: { opacity: 0, y: 30 } as const,
    animate: sectionsReady
      ? ({ opacity: 1, y: 0 } as const)
      : ({ opacity: 0, y: 30 } as const),
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
  });

  return (
    <div className="min-h-screen bg-bg-primary font-sans text-text-primary">
      <CustomCursor />
      <div className="spotlight" aria-hidden="true" />

      <SidebarNav active={active} />

      {/*
       * mainReveal uses opacity-only (no y) intentionally.
       * Animating `y` on the full-height main block causes a
       * visible vertical jump on page reload — opacity avoids this.
       * Individual sections handle their own y-based reveals.
       */}
      <motion.main
        id="main-content"
        variants={mainReveal}
        initial="hidden"
        animate={splashDone ? "show" : "hidden"}
        className="relative z-10 ml-0 min-h-screen px-6  pb-32 md:px-10 lg:ml-95 lg:px-16 "
      >
        <Hero />

        {/*
         * Mobile: sections cascade in one-by-one after the hero finishes.
         * Desktop: each section keeps its own whileInView reveal (unchanged).
         */}
        {isMobile ? (
          <>
            <motion.div {...mobileSection(0.2)}>
              <About />
            </motion.div>
            <motion.div {...mobileSection(0.5)}>
              <ExperienceList />
            </motion.div>
            <motion.div {...mobileSection(0.8)}>
              <ProjectsGrid />
            </motion.div>
            <motion.div {...mobileSection(1.1)}>
              <Contact />
            </motion.div>
          </>
        ) : (
          <>
            <About />
            <ExperienceList />
            <ProjectsGrid />
            <Contact />
          </>
        )}

        {/* Footer */}
        <footer className="mt-8 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-text-secondary">
              Designed &amp; built by{" "}
              <span className="text-text-primary">Khaled Mahomud</span>
              {" · "}Built with{" "}
              <span className="text-accent-green">Next.js</span> &amp;{" "}
              <span className="text-accent-green">Tailwind CSS</span>
            </p>
            <div className="flex items-center gap-5 lg:hidden">
              <a
                href="https://github.com/kkhalled"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:text-accent-green"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/khaledmahomud"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:text-accent-green"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </motion.main>

      <BackToTop />
    </div>
  );
}
