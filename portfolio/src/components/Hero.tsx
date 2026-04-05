"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

// R3F Canvas requires browser APIs — must skip SSR
const SphereImageGrid = dynamic(() => import("./ui/image-sphere"), { ssr: false });

export default function Hero() {
  return (
    <section className="pt-6 pb-16 px-4 min-h-[90vh] flex items-center bg-primary bg-pattern brutal-border border-b-2 border-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block brutal-border bg-white text-black px-4 py-1 rounded-full font-bold mb-6 shadow-brutal-sm">
            Available for freelance work 🚀
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-black leading-tight mb-2">
            Build <span className="tracking-wider">Fast.</span>
          </h1>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight mb-6">
            Scale Smart.
          </h2>

          <p className="text-xl text-black/80 font-medium mb-8 max-w-xl">
            I&apos;m <strong>Sohel Rashid Shaikh</strong>, a Full-Stack Product Engineer.
            I build high-conversion SaaS platforms, APIs, and scalable web apps
            that don&apos;t just look good &mdash; they work flawlessly.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Primary Button */}
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 text-lg rounded-xl border-2 border-black shadow-[8px_8px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_#000000] active:scale-95 transition-all duration-200 group"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            {/* Secondary Button */}
            <Link
              href="#contact"
              className="inline-flex items-center bg-white text-black font-bold px-8 py-4 text-lg rounded-xl border-2 border-black shadow-[8px_8px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_#000000] active:scale-95 transition-all duration-200 group"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Right — Interactive 3D Tech Logo Sphere */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex items-center justify-center lg:justify-end w-full"
        >
          <SphereImageGrid className="pointer-events-auto" />
        </motion.div>
      </div>
    </section>
  );
}
