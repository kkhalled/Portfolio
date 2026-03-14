
import { motion, type Variants } from "motion/react";
import TechBadge from "../../ui/TechBadge";
import type { Experience } from "../../types";

interface ExperienceItemProps {
  experience: Experience;
  variants?: Variants;
}

export default function ExperienceItem({ experience, variants }: ExperienceItemProps) {
  return (
    <motion.article
      variants={variants}
      className="group relative flex gap-4 my-10 "
    >
      {/* Timeline Line and Dot */}
      <div className="relative flex flex-col items-center">
        {/* Dot */}
        <div className="relative z-10 mt-1.5 h-3 w-3 shrink-0 rounded-full  bg-accent-green ring-4 ring-bg-primary transition-all duration-300 group-hover:ring-accent-green/20" />
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-6 h-80/100 w-px -translate-x-1/2 bg-text-secondary/20" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-4">
        <div className="rounded-lg border border-transparent px-5  transition-colors duration-300  md:px-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="shrink-0 font-mono text-xs text-text-secondary">
              {experience.period}
            </span>
            <h3 className="text-base font-semibold text-text-primary transition-colors duration-200 group-hover:text-accent-green md:text-lg">
              {experience.title}
              <span className="text-text-secondary"> · </span>
              {experience.company}
            </h3>
          </div>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
            {experience.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {experience.tech.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
