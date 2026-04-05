"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary brutal-border border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading text-xl font-black text-black tracking-tight">
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

        {/* Mobile menu - simplified for now */}
        <div className="md:hidden">
          <button className="text-black p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
