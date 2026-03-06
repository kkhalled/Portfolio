import type { Variants } from "motion/react";

/**
 * Sidebar slides in from the left on page load.
 * Applied to the <aside> in SidebarNav.
 */
export const sidebarReveal: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

/**
 * Main content area fades in after the sidebar.
 * Intentionally uses opacity ONLY — no y-axis movement — to prevent
 * the visual layout-jump that occurs when large block elements
 * animate their transform on page load.
 */
export const mainReveal: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.85 },
  },
};

/**
 * Hero text stagger container — animates on mount (not whileInView)
 * so it plays immediately as the page loads, after the main fade-in begins.
 */
export const heroContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 5,
      staggerChildren: 0.09,
    },
  },
};

/**
 * Individual hero text lines / CTA row.
 */
export const heroItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/**
 * Generic scroll-triggered section reveal.
 * Use on a section wrapper with whileInView.
 */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

/**
 * Stagger container — pairs with staggerItem.
 * Use whileInView on this element; children animate automatically.
 */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

/**
 * Stagger child — use inside a staggerContainer parent.
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  },
};
