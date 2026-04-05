"use client";
import { skills } from "../data/skills";
import { motion } from "framer-motion";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 bg-white text-black border-b-2 border-black border-collapse">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black mb-16 tracking-tight">
          Tech Arsenal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="brutal-card p-6 border-black"
            >
              <h3 className="text-2xl font-black mb-6 border-b-2 border-black pb-4 uppercase tracking-wider">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1 bg-black text-white text-sm font-bold tracking-tight rounded-md brutal-border border-black hover:-translate-y-1 transition-transform cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
