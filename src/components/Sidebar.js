import { Github, Linkedin, Mail } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="flex flex-col justify-between h-full py-10 px-6 md:px-10 bg-slate-900">
      {/* Top: Name & role */}
      <div>
        <h1 className="text-4xl font-extrabold text-slate-100 leading-tight">
          Shaheer <span className="text-[#64ffda]">Dastgir</span>
        </h1>
        <p className="mt-3 text-lg text-slate-400">
          IoT, Embedded Systems & Firmware Engineer
        </p>
        <p className="mt-4 text-slate-400 text-sm max-w-xs leading-relaxed">
          Designing and developing intelligent systems with{" "}
          <span className="text-[#64ffda]">ESP32</span>,{" "}
          <span className="text-[#64ffda]">STM32</span>,{" "}
          <span className="text-[#64ffda]">FreeRTOS</span>,{" "}
          <span className="text-[#64ffda]">Linux drivers</span>, and{" "}
          <span className="text-[#64ffda]">RISC-V research</span>. Passionate
          about bridging hardware, software, and cloud to build smart,
          connected solutions.
        </p>
      </div>

      {/* Middle: Nav */}
      <nav className="mt-10">
        <ul className="flex flex-col gap-3 text-slate-400 text-lg">
          <li>
            <a href="#about" className="hover:text-[#64ffda] transition">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-[#64ffda] transition">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#64ffda] transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#64ffda] transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Bottom: Socials + CV */}
      <div className="mt-10">
        <div className="flex gap-6 mb-6">
          <a
            href="mailto:shaheer3313@gmail.com"
            aria-label="Email"
            className="hover:text-[#64ffda] text-slate-400 transition"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/SHAHEER-DASTGIR"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-[#64ffda] text-slate-400 transition"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/shaheer-dastgir-224b72281"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#64ffda] text-slate-400 transition"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>

        <a
          href="/Shaheer_CV.pdf"
          download
          className="inline-block px-6 py-2 border border-[#64ffda] rounded text-[#64ffda] hover:bg-[#64ffda]/10 transition"
        >
          Download CV
        </a>
      </div>
    </aside>
  );
}
