"use client";

import { motion } from "motion/react";
import { experiences } from "../../lib/data";
import SectionHeading from "../../ui/SectionHeading";
import TechBadge from "../../ui/TechBadge";
import { staggerContainer, staggerItem } from "../../lib/animations";

export default function ExperienceList() {
  return (
    <motion.section
      id="experience"
      className="mb-24 pt-6 md:mb-32"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div variants={staggerItem}>
        <SectionHeading>Experience</SectionHeading>
      </motion.div>

      <div className="space-y-12">
        {experiences.map((e) => (
          <motion.article
            key={e.title}
            variants={staggerItem}
            className="group relative rounded-lg border border-transparent p-5 transition-colors duration-300 hover:border-white/10 hover:bg-bg-secondary/40 md:p-6"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
              <span className="shrink-0 font-mono text-xs text-text-secondary">
                {e.period}
              </span>
              <h3 className="text-base font-semibold text-text-primary transition-colors duration-200 group-hover:text-accent-green md:text-lg">
                {e.title}
                <span className="text-text-secondary"> · </span>
                {e.company}
              </h3>
            </div>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
              {e.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {e.tech.map((t) => (
                <TechBadge key={t} label={t} />
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

