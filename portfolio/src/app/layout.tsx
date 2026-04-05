import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaikh Rashid Sohel | Full-Stack Product Engineer",
  description: "Senior frontend & full-stack product engineer specializing in Django, React, Web Apps, APIs, UI/UX, and scalable systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-base text-white font-body overflow-x-hidden selection:bg-primary selection:text-black">
        {children}
      </body>
    </html>
  );
}
