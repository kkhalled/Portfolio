import type { NavSection } from "../../types";
import { motion, AnimatePresence } from "motion/react";
import { sidebarReveal } from "../../lib/animations";
import { useSplash } from "../../lib/SplashContext";
import { useState } from "react";

const LINKS: NavSection[] = ["about", "experience", "projects", "contact"];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/kkhalled",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/khaledmahomud",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

/* Single unified wave — one sequence across identity → nav → socials */
const waveContainer = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.45,
      staggerChildren: 0.09,
    },
  },
};

const waveItem = {
  hidden: { opacity: 0, x: -28, filter: "blur(4px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 280,
      damping: 22,
    },
  },
};

/* Mobile drawer */
const drawerVariants = {
  hidden: { opacity: 0, y: -16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};

const drawerItem = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

const drawerContainer = {
  hidden: {},
  show: { transition: { delayChildren: 0.1, staggerChildren: 0.07 } },
};

export default function SidebarNav({ active }: { active: string }) {
  const { splashDone } = useSplash();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── Mobile top bar ── */}
      <header className="fixed left-0 right-0 top-0 z-30 flex h-14 items-center justify-between border-b border-white/10 bg-bg-primary/95 px-6 backdrop-blur-sm lg:hidden">
        <span className="text-sm font-bold tracking-tight text-text-primary">
          K<span className="text-accent-green">.</span>
        </span>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="relative flex h-8 w-8 flex-col items-center justify-center gap-1.5"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="block h-px w-6 bg-text-primary origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block h-px w-6 bg-text-primary"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="block h-px w-6 bg-text-primary origin-center"
          />
        </button>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-x-0 top-14 z-20 border-b border-white/10 bg-bg-primary/98 px-6 py-8 backdrop-blur-md lg:hidden"
          >
            {/* Identity */}
            <motion.div variants={drawerContainer} initial="hidden" animate="show" className="mb-6">
              <motion.p variants={drawerItem} className="font-bold text-text-primary">
                Khaled Mahomud
              </motion.p>
              <motion.p variants={drawerItem} className="mt-0.5 text-sm text-accent-green">
                Frontend Developer
              </motion.p>
            </motion.div>

            {/* Nav links */}
            <motion.nav
              variants={drawerContainer}
              initial="hidden"
              animate="show"
              className="mb-8 flex flex-col gap-5"
            >
              {LINKS.map((id) => (
                <motion.a
                  key={id}
                  variants={drawerItem}
                  href={`#${id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium uppercase tracking-[0.18em] transition-colors ${
                    active === id ? "text-accent-green" : "text-text-secondary"
                  }`}
                >
                  {id}
                </motion.a>
              ))}
            </motion.nav>

            {/* Social icons */}
            <motion.div
              variants={drawerContainer}
              initial="hidden"
              animate="show"
              className="flex items-center gap-5 border-t border-white/10 pt-6"
            >
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  variants={drawerItem}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  whileHover={{ y: -2 }}
                  className="text-text-secondary transition-colors hover:text-accent-green"
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Desktop sidebar ── */}
      <motion.aside
        variants={sidebarReveal}
        initial="hidden"
        animate={splashDone ? "show" : "hidden"}
        className="fixed inset-y-0 left-0 z-20 hidden w-90 flex-col border-r border-white/10 bg-bg-primary lg:flex"
      >
        {/* One unified wave container wrapping ALL content */}
        <motion.div
          variants={waveContainer}
          className="flex flex-1 flex-col justify-center px-12 py-20"
        >
          {/* Identity */}
          <div className="mb-16">
            <motion.p variants={waveItem} className="text-lg font-bold text-text-primary">
              Khaled Mahomud
            </motion.p>
            <motion.p variants={waveItem} className="mt-1 text-sm text-accent-green">
              Frontend Developer
            </motion.p>
            <motion.p variants={waveItem} className="mt-3 max-w-60 text-[13px] leading-relaxed text-text-secondary">
              Building accessible, performant web experiences.
            </motion.p>
          </div>

          {/* Navigation */}
          <nav className="space-y-6">
            {LINKS.map((id) => (
              <motion.a
                key={id}
                variants={waveItem}
                href={`#${id}`}
                className={`group flex items-center gap-4 text-xs uppercase tracking-[0.2em] transition-colors ${
                  active === id
                    ? "text-accent-green"
                    : "text-text-secondary hover:text-accent-green"
                }`}
              >
                <span
                  className={`h-px shrink-0 transition-all duration-300 ${
                    active === id
                      ? "w-16 bg-accent-green"
                      : "w-8 bg-text-secondary/40 group-hover:w-12 group-hover:bg-accent-green/60"
                  }`}
                />
                {id}
              </motion.a>
            ))}
          </nav>
        </motion.div>

        {/* Social icons — part of the same wave via waveItem */}
        <motion.div
          variants={waveContainer}
          className="flex items-center gap-5 border-t border-white/10 px-12 py-8"
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              variants={waveItem}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={s.label}
              whileHover={{ y: -2, scale: 1.1 }}
              className="text-text-secondary transition-colors hover:text-accent-green"
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.aside>
    </>
  );
}
