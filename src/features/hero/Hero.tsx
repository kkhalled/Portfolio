"use client";

import { motion } from "motion/react";
import { heroContainer, heroItem } from "../../lib/animations";
import ButtonLink from "../../ui/Button";

export default function Hero() {
  return (
    <motion.header
      variants={heroContainer}
      initial="hidden"
      animate="show"
      className="flex pt-12 pb-22 flex-col "
    >
      <motion.p
        variants={heroItem}
        className="mb-4 font-mono text-sm text-accent-green"
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        variants={heroItem}
        className="text-[clamp(2.25rem,7vw,4rem)] font-bold leading-[1.1] tracking-tight text-text-primary"
      >
        Khaled Mahomud.
      </motion.h1>

      <motion.h2
        variants={heroItem}
        className="mt-2 text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.2] text-text-secondary"
      >
        I build things for the web.
      </motion.h2>

      <motion.p
        variants={heroItem}
        className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
      >
        I&apos;m a frontend developer focused on building fast, reliable web
        interfaces with modern React architecture and thoughtful user
        experience.
      </motion.p>

      <motion.div variants={heroItem} className="mt-10 flex flex-wrap gap-4">
        <ButtonLink href="/Resume.pdf" variant="primary">
          View Resume
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
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
            />
          </svg>
        </ButtonLink>
        <ButtonLink
          href="mailto:khaled.devcontact@gmail.com?subject=Project%20Inquiry"
          variant="ghost"
        >
          Get in Touch &rarr;
        </ButtonLink>
      </motion.div>
    </motion.header>
  );
}
