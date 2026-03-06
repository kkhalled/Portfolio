"use client";

import { motion } from "motion/react";
import SectionHeading from "../../ui/SectionHeading";
import { staggerContainer, staggerItem } from "../../lib/animations";

const EMAIL = "khaled.devcontact@gmail.com";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/kkhalled",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/khaledmahomud",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-24 pt-10 md:mb-32"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={staggerItem}>
        <SectionHeading>Contact</SectionHeading>
      </motion.div>

      <motion.div variants={staggerItem} className="max-w-xl">
        {/* Availability badge */}
        <div className="mb-6 flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-green" />
          </span>
          <span className="font-mono text-xs text-accent-green">
            Open to new opportunities
          </span>
        </div>

        {/* Headline */}
        <h3 className="text-3xl font-bold leading-tight text-text-primary sm:text-4xl">
          Get In Touch
        </h3>

        {/* Body */}
        <p className="mt-5 text-[15px] leading-relaxed text-text-secondary">
          I&apos;m currently looking for frontend Developering roles and
          freelance projects. Whether you have a position, a project, or
          just want to connect — my inbox is always open. I&apos;ll do my
          best to get back to you.
        </p>

        {/* Email CTA */}
        <a
          href={`mailto:${EMAIL}`}
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-accent-cyan px-6 py-3 text-sm font-medium text-accent-cyan transition-all duration-200 hover:bg-accent-cyan/10 focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Say Hello
        </a>

        <p className="mt-3 font-mono text-xs text-text-secondary">{EMAIL}</p>
      </motion.div>

      {/* Social links */}
      <motion.div
        variants={staggerItem}
        className="mt-10 flex items-center gap-6"
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:text-accent-green"
            aria-label={s.label}
          >
            {s.icon}
            <span className="text-sm">{s.label}</span>
          </a>
        ))}
      </motion.div>
    </motion.section>
  );
}
