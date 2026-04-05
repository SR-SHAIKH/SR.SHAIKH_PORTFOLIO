export default function Footer() {
  return (
    <footer className="bg-base py-12 px-4 border-t-2 border-black text-white text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-heading text-2xl font-black tracking-tight">
          SR Shaikh <span className="text-3xl text-primary">⚡</span>
        </div>

        <div className="font-bold text-white/50 space-x-6">
          <a href="#" className="hover:text-primary transition-colors">Resume</a>
          <a href="https://github.com/SR-SHAIKH" className="hover:text-primary transition-colors">GitHub</a>
          <a href="https://in.linkedin.com/in/sr-shaikh-9a2240247" className="hover:text-primary transition-colors">LinkedIn</a>
        </div>

        <div className="font-bold text-white/50 text-sm">
          &copy; {new Date().getFullYear()} Shaikh Sohel. Designed with Brutalism.
        </div>
      </div>
    </footer>
  );
}
