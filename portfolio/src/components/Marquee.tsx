"use client";
import { motion } from "framer-motion";

export default function Marquee() {
  const items = [
    "Django", "React", "Next.js", "APIs", "SaaS", "UI/UX", "Scalable Systems",
    "PostgreSQL", "Tailwind CSS", "Framer Motion", "Python", "Supabase", "Node.js"
  ];

  return (
    <section className="bg-base overflow-hidden py-8 border-b-2 border-black flex items-center">
      <div className="relative w-full flex whitespace-nowrap">
        {/* We render the list twice to create a seamless infinite loop */}
        <motion.div
          className="flex whitespace-nowrap items-center select-none"
          animate={{ x: [0, "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {/* First block */}
          {items.map((item, index) => (
            <div key={`first-${index}`} className="flex items-center">
              <span className="text-3xl md:text-5xl font-black px-6 text-white uppercase tracking-wider hover:text-primary transition-colors cursor-default">
                {item}
              </span>
              <span className="text-primary text-3xl">✦</span>
            </div>
          ))}
          {/* Duplicate block right next to it */}
          {items.map((item, index) => (
            <div key={`second-${index}`} className="flex items-center">
              <span className="text-3xl md:text-5xl font-black px-6 text-white uppercase tracking-wider hover:text-primary transition-colors cursor-default">
                {item}
              </span>
              <span className="text-primary text-3xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
