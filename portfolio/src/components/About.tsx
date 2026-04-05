// "use client";

// import { MoveRight } from "lucide-react";

// export default function About() {
//   return (
//     <section id="about" className="py-24 px-4 bg-primary bg-pattern border-b-2 border-black">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
//         {/* Left Side text */}
//         <div>
//           <h2 className="text-6xl md:text-8xl font-black text-black mb-8 leading-none">
//             I Solve <br className="hidden md:block" /> Complex <br className="hidden md:block" />
//             <span className="tracking-wider">Problems.</span>
//           </h2>
//           <div className="space-y-6 text-xl text-black/80 font-bold mb-10 max-w-xl">
//             <p className="brutal-border border-black bg-white p-4 shadow-brutal-sm">
//               I am a web developer obsessed with speed, usability, and architecture. I build applications that do not just check functional boxes, but deliver premium user experiences.
//             </p>
//             <p className="border-l-4 border-black pl-4">
//               With deep expertise in <strong>React, Next.js, Django, and Node</strong>, I take ideas from fuzzy wireframes to fully scaled production systems.
//             </p>
//           </div>
//         </div>

//         {/* Right Side CTA Box */}
//         <div id="contact" className="brutal-card bg-black text-white p-8 lg:p-12 border-white/20 transform md:rotate-2 shadow-[8px_8px_0px_#ffe17c] brutal-border border-black">
//           <h3 className="text-4xl md:text-5xl font-black mb-4">Let&apos;s Build Something Powerful</h3>
//           <p className="text-gray-400 font-medium text-xl mb-8">
//             Looking for a technical partner or engineer to bring your startup to life? Drop me a message.
//           </p>

//           <form className="space-y-4 mb-8" onSubmit={(e) => e.preventDefault()}>
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full text-black bg-white brutal-border border-black p-4 font-bold rounded-lg focus:outline-none focus:ring-4 focus:ring-primary placeholder-black/50 hover:-translate-y-1 transition-transform"
//             />
//             <textarea
//               placeholder="Tell me about your project..."
//               rows={4}
//               className="w-full text-black bg-white brutal-border border-black p-4 font-bold rounded-lg focus:outline-none focus:ring-4 focus:ring-primary placeholder-black/50 resize-none hover:-translate-y-1 transition-transform"
//             />
//             <button className="w-full brutal-btn bg-primary text-black py-4 text-xl flex items-center justify-center gap-2 group">
//               Start a Project
//               <MoveRight className="group-hover:translate-x-2 transition-transform" />
//             </button>
//           </form>

//           <div className="flex gap-4">
//             <a href="https://github.com/SR-SHAIKH" className="font-bold underline text-primary hover:text-white transition-colors">GitHub</a>
//             <a href="https://in.linkedin.com/in/sr-shaikh-9a2240247" className="font-bold underline text-primary hover:text-white transition-colors">LinkedIn</a>
//             {/* <a href="#" className="font-bold underline text-primary hover:text-white transition-colors">Twitter (X)</a> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { MoveRight } from "lucide-react";
import emailjs from "@emailjs/browser"; // ✅ correct package
import { useState } from "react";

export default function About() {

  // ✅ Form State
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  // ✅ Handle Submit (FIXED)
  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        "service_kz2q18l", // 🔥 your service id
        "template_xb9rww9", // 🔥 your template id
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "4yKcXfHu6nic9PYyH" // 🔥 your public key
      )
      .then(() => {
        alert("Message sent 🚀");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log("ERROR:", error);
        alert("Failed ❌");
      });
  };

  return (
    <section id="about" className="py-24 px-4 bg-primary bg-pattern border-b-2 border-black">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side text */}
        <div>
          <h2 className="text-6xl md:text-8xl font-black text-black mb-8 leading-none">
            I Solve <br className="hidden md:block" /> Complex <br className="hidden md:block" />
            <span className="tracking-wider">Problems.</span>
          </h2>
          <div className="space-y-6 text-xl text-black/80 font-bold mb-10 max-w-xl">
            <p className="brutal-border border-black bg-white p-4 shadow-brutal-sm">
              I am a web developer obsessed with speed, usability, and architecture. I build applications that do not just check functional boxes, but deliver premium user experiences.
            </p>
            <p className="border-l-4 border-black pl-4">
              With deep expertise in <strong>React, Next.js, Django, and Node</strong>, I take ideas from fuzzy wireframes to fully scaled production systems.
            </p>
          </div>
        </div>

        {/* Right Side CTA Box */}
        <div id="contact" className="brutal-card bg-black text-white p-8 lg:p-12 border-white/20 transform md:rotate-2 shadow-[8px_8px_0px_#ffe17c] brutal-border border-black">
          <h3 className="text-4xl md:text-5xl font-black mb-4">Let&apos;s Build Something Powerful</h3>
          <p className="text-gray-400 font-medium text-xl mb-8">
            Looking for a technical partner or engineer to bring your startup to life? Drop me a message.
          </p>

          {/* ✅ WORKING FORM */}
          <form className="space-y-4 mb-8" onSubmit={handleSubmit}>

            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full text-black bg-white brutal-border border-black p-4 font-bold rounded-lg focus:outline-none focus:ring-4 focus:ring-primary placeholder-black/50 hover:-translate-y-1 transition-transform"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full text-black bg-white brutal-border border-black p-4 font-bold rounded-lg focus:outline-none focus:ring-4 focus:ring-primary placeholder-black/50 hover:-translate-y-1 transition-transform"
            />

            {/* Message */}
            <textarea
              placeholder="Tell me about your project..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full text-black bg-white brutal-border border-black p-4 font-bold rounded-lg focus:outline-none focus:ring-4 focus:ring-primary placeholder-black/50 resize-none hover:-translate-y-1 transition-transform"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full brutal-btn bg-primary text-black py-4 text-xl flex items-center justify-center gap-2 group"
            >
              Start a Project
              <MoveRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://github.com/SR-SHAIKH" className="font-bold underline text-primary hover:text-white transition-colors">GitHub</a>
            <a href="https://in.linkedin.com/in/sr-shaikh-9a2240247" className="font-bold underline text-primary hover:text-white transition-colors">LinkedIn</a>
          </div>

        </div>
      </div>
    </section>
  );
}