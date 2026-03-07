"use client";

import { motion } from "motion/react";
import { aboutParagraphs, coreTech } from "../../lib/data";
import SectionHeading from "../../ui/SectionHeading";
import { staggerContainer, staggerItem } from "../../lib/animations";

export default function About() {
  return (
    <motion.div
      id="about"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="flex pt-16 pb-14 flex-col justify-center "
    >
      <SectionHeading>
        <h1 className="text-3xl text-white">About Me</h1>
      </SectionHeading>
      <div className="py-8">
        <div className="max-w-3xl space-y-5 text-[15px] leading-relaxed text-text-secondary">
          {aboutParagraphs.map((p, i) => (
            <motion.p key={i} variants={staggerItem}>
              {p}
            </motion.p>
          ))}
        </div>
        <motion.div variants={staggerItem} className="mt-10">
          <p className="mb-8 text-xl text-gray-100">
            Technologies I work with:
          </p>
          <ul className="grid grid-cols-2  gap-x-8 gap-y-2 font-mono text-[13px] text-text-secondary sm:grid-cols-3">
            {coreTech.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="text-accent-green" aria-hidden="true">
                  ●
                </span>
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
