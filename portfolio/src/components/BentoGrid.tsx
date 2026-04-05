
"use client";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function BentoGrid() {
  return (
    <section
      id="projects"
      className="py-24 px-4 bg-primary bg-pattern bg-opacity-90 border-b-2 border-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-black text-black">
            Selected <span className="text-work">Work</span>
          </h2>

          <p className="text-black font-bold text-xl mt-4 max-w-2xl border-l-4 border-black pl-4">
            A collection of production-grade scalable systems and SaaS products I&apos;ve built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {projects
            .filter((p) => p && p.title) // ✅ safety
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={i === 0 ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}