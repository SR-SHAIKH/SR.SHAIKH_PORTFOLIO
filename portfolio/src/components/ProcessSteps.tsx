"use client";
import { motion } from "framer-motion";
import { BrainCircuit, Hammer, Rocket, ArrowRight } from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      title: "1. Understand",
      desc: "Deep dive into your product goals, user needs, and architecture constraints.",
      icon: <BrainCircuit className="w-7 h-7" />,
      color: "bg-primary",
    },
    {
      title: "2. Build",
      desc: "Develop robust APIs, clean UI/UX, and stable data models using modern stacks.",
      icon: <Hammer className="w-7 h-7" />,
      color: "bg-white",
    },
    {
      title: "3. Scale",
      desc: "Deploy, monitor, and optimize for speed and fault tolerance as users grow.",
      icon: <Rocket className="w-7 h-7" />,
      color: "bg-accent",
    },
  ];

  return (
    <section className="py-24 px-4 bg-base border-b-2 border-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white text-stroke">
            Execution Method
          </h2>
          <p className="text-xl font-medium text-white/80">
            From chaotic ideas to streamlined SaaS architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-stretch">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-black brutal-border rounded-full -translate-y-1/2 z-0" />

          {steps.map((step, i) => {
            const isFeatured = i === 1;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative ${isFeatured ? "z-20" : "z-10"}`}
              >
                <div
                  className={`
                    ${step.color} p-8 text-black border-2 border-black rounded-xl
                    flex flex-col justify-between h-full
                    group hover:-translate-y-2 transition-transform
                    ${isFeatured
                      ? "shadow-[8px_8px_0px_#000000]"
                      : "shadow-[8px_8px_0px_#000000]"
                    }
                  `}
                >
                  {/* Top content */}
                  <div>
                    <div className="w-14 h-14 bg-white border-2 border-black shadow-[4px_4px_0px_#000000] rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                      <div className="text-black">{step.icon}</div>
                    </div>
                    <h3 className="text-3xl font-black mb-4 text-black">
                      {step.title}
                    </h3>
                    <p className="font-medium text-black/80 text-lg">
                      {step.desc}
                    </p>
                  </div>

                  {/* CTA on featured card */}
                  {isFeatured && (
                    <a
                      href="#projects"
                      className="mt-6 inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl border-2 border-black shadow-[8px_8px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:scale-[1.03] hover:shadow-[4px_4px_0px_#000000] transition-all duration-200 self-start"
                    >
                      See My Work
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
