
import { motion } from "motion/react";
import { experiences } from "../../lib/data";
import SectionHeading from "../../ui/SectionHeading";
import ExperienceItem from "./ExperienceItem";
import { staggerContainer, staggerItem } from "../../lib/animations";

export default function ExperienceList() {
  return (
    <motion.section
      id="experience"
      className="mb-16  pt-16 "
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div variants={staggerItem}>
        <SectionHeading><h1 className="text-3xl text-white">Experience</h1></SectionHeading>
      </motion.div>

      <div className="mt-8">
        {experiences.map((e) => (
          <ExperienceItem
            key={e.title}
            experience={e}
            variants={staggerItem}
          />
        ))}
      </div>
    </motion.section>
  );
}

