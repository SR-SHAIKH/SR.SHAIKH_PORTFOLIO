"use client";
import { useState } from "react";
import { Project } from "../data/projects";
import { ArrowUpRight, X } from "lucide-react";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isLarge = index === 0;
  const hasValidLink = project.link && project.link !== "#";
  const [showToast, setShowToast] = useState(false);

  function handleClick(e: React.MouseEvent) {
    if (hasValidLink) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    } else {
      e.preventDefault();
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    }
  }

  return (
    <>
      <div
        onClick={handleClick}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter") handleClick(e as unknown as React.MouseEvent); }}
        className={`brutal-card overflow-hidden group flex flex-col h-full bg-white cursor-pointer
          transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000]
          ${isLarge ? "md:col-span-2 md:row-span-2 bg-gradient-to-br from-white to-accent/20" : ""}`}
      >
        <div className="p-6 md:p-8 flex-1 flex flex-col bg-pattern-light">
          {/* Header: title + arrow */}
          <div className="flex justify-between items-start mb-6">
            <h3 className={`font-black tracking-tight ${isLarge ? "text-4xl md:text-5xl" : "text-2xl"}`}>
              {project.title}
            </h3>
            <span
              className="w-12 h-12 brutal-border bg-primary rounded-full flex justify-center items-center
                group-hover:bg-black group-hover:text-white transition-colors group-hover:rotate-12 shrink-0"
            >
              <ArrowUpRight strokeWidth={3} className="w-6 h-6" />
            </span>
          </div>

          {/* Description */}
          <p className={`text-black/80 font-medium ${isLarge ? "text-xl md:text-2xl max-w-xl" : "text-base"}`}>
            {project.description}
          </p>

          {/* Status — inline italic text in brackets with star */}
          {project.status && (
            <p className="mt-1.5 mb-6 text-sm text-black/50 italic font-light">
              ({project.status}*)
            </p>
          )}

          {/* Spacer if no status */}
          {!project.status && <div className="mb-8" />}

          {/* Tech tags */}
          <div className="mt-auto flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider brutal-border border-black rounded-lg"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Centered Modal Overlay */}
      {showToast && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={(e) => { e.stopPropagation(); setShowToast(false); }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col gap-4 bg-white px-8 py-8 md:p-10 rounded-2xl border-[3px] border-black shadow-[8px_8px_0px_#000] max-w-md w-full relative"
            style={{ animation: "modalPop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards" }}
          >
            {/* Close button */}
            <button
              onClick={(e) => { e.stopPropagation(); setShowToast(false); }}
              className="absolute top-4 right-4 sm:-top-4 sm:-right-4 shrink-0 w-10 h-10 border-2 border-black rounded-full bg-primary flex items-center justify-center hover:bg-black hover:text-primary transition-colors hover:scale-110 active:scale-95 shadow-[4px_4px_0px_#000]"
            >
              <X className="w-5 h-5" strokeWidth={3} />
            </button>

            {/* Modal Content */}
            <h4 className="text-2xl font-black text-black pr-4 tracking-tight">Access Restricted</h4>
            <p className="text-base font-medium text-black/80 leading-relaxed mb-4">
              This project is currently under development or production and is not accessible yet.
            </p>

            {/* Action button */}
            <button
              onClick={(e) => { e.stopPropagation(); setShowToast(false); }}
              className="mt-auto w-full py-3 border-2 border-black bg-white text-black font-bold uppercase tracking-wider rounded-xl hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_#000000] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
