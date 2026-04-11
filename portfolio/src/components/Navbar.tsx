"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary brutal-border border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-heading text-xl font-black text-black tracking-tight" onClick={() => setIsOpen(false)}>
            SR Shaikh <span className="text-2xl">⚡</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#projects" className="text-black font-bold hover:-translate-y-1 transition-transform">Projects</Link>
            <Link href="#skills" className="text-black font-bold hover:-translate-y-1 transition-transform">Skills</Link>
            <Link href="#about" className="text-black font-bold hover:-translate-y-1 transition-transform">About</Link>
            <Link href="#contact" className="brutal-btn bg-white text-black px-6 py-2">
              Hire Me
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center relative z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-black p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-primary pt-20 px-4 md:hidden flex flex-col space-y-6 items-center"
          >
            <Link href="#projects" onClick={() => setIsOpen(false)} className="text-2xl text-black font-bold mt-8">Projects</Link>
            <Link href="#skills" onClick={() => setIsOpen(false)} className="text-2xl text-black font-bold">Skills</Link>
            <Link href="#about" onClick={() => setIsOpen(false)} className="text-2xl text-black font-bold">About</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="brutal-btn bg-white text-black px-8 py-3 text-xl mt-4">
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
