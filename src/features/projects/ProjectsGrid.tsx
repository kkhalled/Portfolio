"use client";

import { motion } from "motion/react";
import { featuredProjects, otherProjects } from "../../lib/data";
import SectionHeading from "../../ui/SectionHeading";
import TechBadge from "../../ui/TechBadge";
import Image from "next/image";

export default function ProjectsGrid() {
  return (
    <motion.section
      id="projects"
      className="mb-32 pt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <SectionHeading>Projects</SectionHeading>
      </motion.div>

      <div className="mt-16 flex flex-col gap-32">

        {featuredProjects.map((p, index) => {

          const reverse = index % 2 === 1;

          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className={`grid items-center gap-12 lg:grid-cols-2`}
            >

              {/* Image */}

              <motion.div
                initial={{ opacity: 0, x: reverse ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.2 }}
                className={`${reverse ? "lg:order-2" : ""}`}
              >
                <div className="group relative overflow-hidden rounded-xl border border-white/10">

                  <Image
                    src={p.image}
                    alt={p.title}
                    width={600}
                    height={500}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />

                  <div className="absolute inset-0 bg-bg-primary/40 transition-opacity group-hover:opacity-0" />

                </div>
              </motion.div>

              {/* Content */}

              <motion.div
                initial={{ opacity: 0, x: reverse ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.2 }}
                className={`${reverse ? "lg:order-1" : ""}`}
              >

                <h3 className="text-2xl font-semibold text-text-primary">
                  {p.title}
                </h3>

                <p className="mt-4 leading-relaxed text-text-secondary">
                  {p.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <TechBadge key={t} label={t} />
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-6 text-text-secondary">

                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      className="transition hover:text-accent-cyan"
                    >
                      GitHub
                    </a>
                  )}

                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      className="transition hover:text-accent-cyan"
                    >
                      Live Demo
                    </a>
                  )}

                </div>

              </motion.div>

            </motion.article>
          );
        })}

      </div>

      {/* Other Noteworthy Projects */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-24"
      >
        <h3 className="mb-10 text-center font-mono text-sm text-text-secondary">
          Other Noteworthy Projects
        </h3>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="group flex flex-col rounded-xl border border-white/10 bg-bg-secondary/40 p-6 transition-colors duration-300 hover:border-accent-cyan/20 hover:shadow-[0_4px_24px_rgba(100,255,218,0.06)]"
          >
            <div className="mb-5 flex items-center justify-between">
              <svg
                className="h-8 w-8 text-accent-cyan"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7a2 2 0 012-2h3.586a1 1 0 01.707.293l1.414 1.414A1 1 0 0011.414 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
                />
              </svg>
              <div className="flex items-center gap-4">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${p.title} GitHub repository`}
                    className="text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:text-accent-cyan"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                )}
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${p.title} live demo`}
                    className="text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:text-accent-cyan"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <h4 className="mb-2 font-semibold text-text-primary transition-colors duration-200 group-hover:text-accent-cyan">
              {p.title}
            </h4>
            <p className="flex-1 text-[13px] leading-relaxed text-text-secondary">{p.description}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <TechBadge key={t} label={t} />
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}