"use client";
import { useRef, useEffect, useState } from "react";

/* ─── Tech Stack with Devicon CDN logos ─── */
const TECH_STACK = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
];

/* ─── Fibonacci sphere: even distribution on unit sphere ─── */
function fibonacciSphere(n: number): [number, number, number][] {
  const pts: [number, number, number][] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const t = golden * i;
    pts.push([Math.cos(t) * r, y, Math.sin(t) * r]);
  }
  return pts;
}

/* ─── Responsive breakpoint config ─── */
function getConfig(w: number) {
  if (w >= 1024) {
    // Desktop: large sphere, all 30 logos
    return { radius: 220, nodeSize: 56, count: 30, containerH: 650 };
  } else if (w >= 640) {
    // Tablet: medium sphere
    return { radius: 160, nodeSize: 48, count: 26, containerH: 480 };
  } else {
    // Mobile: smaller sphere, fewer logos
    return { radius: 120, nodeSize: 42, count: 20, containerH: 340 };
  }
}

/* ─── Main Component ─── */
export default function TechOrb() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);
  const configRef = useRef(getConfig(typeof window !== "undefined" ? window.innerWidth : 1200));
  const pointsRef = useRef(fibonacciSphere(configRef.current.count));

  const stateRef = useRef({
    baseRotX: -0.2, // Continuous base rotation X
    baseRotY: 0,    // Continuous base rotation Y
    mouseX: 0,      // Normalized mouse offset X
    mouseY: 0,      // Normalized mouse offset Y
    targetMouseX: 0,
    targetMouseY: 0,
    isHovered: false,
  });

  const [containerH, setContainerH] = useState(650);
  const [visibleCount, setVisibleCount] = useState(30);
  const [entryScale, setEntryScale] = useState(0.8);
  const [entryOpacity, setEntryOpacity] = useState(0);

  // Responsive logic
  useEffect(() => {
    function onResize() {
      const w = window.innerWidth;
      const cfg = getConfig(w);
      configRef.current = cfg;
      pointsRef.current = fibonacciSphere(cfg.count);
      setContainerH(cfg.containerH);
      setVisibleCount(cfg.count);
    }
    onResize();

    setTimeout(() => {
      setEntryScale(1);
      setEntryOpacity(0.85);
    }, 100);

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Animation Loop (Lerp + Tracking)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function animate() {
      const s = stateRef.current;
      const cfg = configRef.current;
      const pts = pointsRef.current;

      if (!s.isHovered) {
        // Idle state: Normal auto rotate speed
        s.baseRotX += 0.001;
        s.baseRotY += 0.002;

        // Smoothly return mouse offsets to 0 when not hovered
        s.targetMouseX = 0;
        s.targetMouseY = 0;
      } else {
        // Hover state: Orb has 'a mind of its own' but slows down
        s.baseRotX += 0.0005;
        s.baseRotY += 0.001;
      }

      // Smooth interpolation for mouse offset
      s.mouseX += (s.targetMouseX - s.mouseX) * 0.08;
      s.mouseY += (s.targetMouseY - s.mouseY) * 0.08;

      // Final rotation combines continuing base + subtle tilt from mouse
      const rotX = s.baseRotX + s.mouseY;
      const rotY = s.baseRotY + s.mouseX;

      const cY = Math.cos(rotY), sY = Math.sin(rotY);
      const cX = Math.cos(rotX), sX = Math.sin(rotX);

      for (let i = 0; i < pts.length; i++) {
        const [ux, uy, uz] = pts[i];
        const x1 = ux * cY + uz * sY;
        const z1 = -ux * sY + uz * cY;
        const y1 = uy * cX - z1 * sX;
        const z2 = uy * sX + z1 * cX;

        const el = nodesRef.current[i];
        if (!el) continue;

        const depth = (z2 + 1) / 2;
        const scale = 0.35 + depth * 0.65;
        const blur = depth < 0.5 ? 2 - depth * 4 : 0; 
        
        el.style.transform = `translate(-50%,-50%) translate(${x1 * cfg.radius}px,${y1 * cfg.radius}px) scale(${scale})`;
        el.style.opacity = String(0.1 + depth * 0.9);
        el.style.filter = `blur(${blur}px)`;
        el.style.zIndex = String(Math.round(depth * 100));
        
        // Prevent background elements from intercepting hovers
        el.style.pointerEvents = depth > 0.6 ? 'auto' : 'none';
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    /* Localized Mouse Tracking System (Influence Only) */
    const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));

    function onMouseMove(e: MouseEvent) {
      if (!container) return;
      const state = stateRef.current;
      if (!state.isHovered) return;

      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      // Normalize to -1 to 1 range
      const nx = (x - 0.5) * 2;
      const ny = -(y - 0.5) * 2;

      // Subtle influence: the orb will offset mildly based on mouse
      const influenceX = nx * 0.25; 
      const influenceY = ny * 0.25;

      const maxOffset = 0.25;
      state.targetMouseX = clamp(influenceX, -maxOffset, maxOffset);
      state.targetMouseY = clamp(influenceY, -maxOffset, maxOffset);
    }

    function onMouseEnter() { stateRef.current.isHovered = true; }
    function onMouseLeave() { stateRef.current.isHovered = false; }

    // Use container for events instead of window
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const visibleTech = TECH_STACK.slice(0, visibleCount);

  return (
    <div
      ref={containerRef}
      className="absolute right-0 lg:-right-10 top-1/2 -translate-y-1/2 w-full max-w-lg lg:max-w-2xl select-none z-10 pointer-events-none"
      style={{ 
        height: `${containerH}px`,
        opacity: entryOpacity,
        transform: `translateY(-50%) scale(${entryScale})`,
        transition: 'opacity 1.5s ease-out, transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
    >
      <div className="absolute inset-0 z-0 rounded-full pointer-events-auto" /> {/* Interaction surface */}
      {visibleTech.map((tech, i) => (
        <div
          key={tech.name}
          ref={(el) => { nodesRef.current[i] = el; }}
          className="absolute top-1/2 left-1/2 will-change-transform"
        >
          <div className="flex items-center justify-center
            w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[56px] lg:h-[56px]
            rounded-full bg-white border border-black/80
            shadow-[2px_2px_0px_#000] opacity-90"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain pointer-events-none"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                const fb = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                if (fb) { fb.style.display = "flex"; }
              }}
            />
            {/* Fallback text if image fails */}
            <span className="hidden items-center justify-center w-full h-full font-black text-[10px] text-black leading-none">
              {tech.name.slice(0, 2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
