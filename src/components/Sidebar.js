import { Github, Linkedin, Mail } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-6">
      {/* Name & role */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-100">Shaheer Dastgir</h1>
        <p className="mt-2 text-slate-400">IoT & Embedded Engineer</p>
        <p className="mt-3 text-slate-400">
          Building smart, connected systems with ESP32, STM32, Linux & cloud.
        </p>
      </div>

      {/* Nav */}
      <nav className="mt-2">
        <ul className="flex md:flex-col gap-4 text-slate-300">
          <li><a href="#about" className="hover:text-slate-100">About</a></li>
          <li><a href="#experience" className="hover:text-slate-100">Experience</a></li>
          <li><a href="#projects" className="hover:text-slate-100">Projects</a></li>
          <li><a href="#contact" className="hover:text-slate-100">Contact</a></li>
        </ul>
      </nav>

      {/* Socials */}
      <div className="mt-4 flex gap-4">
        <a href="mailto:shaheer3313@gmail.com" aria-label="Email">
          <Mail className="h-5 w-5 text-slate-400 hover:text-[#64ffda]" />
        </a>
        <a href="https://github.com/SHAHEER-DASTGIR" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github className="h-5 w-5 text-slate-400 hover:text-[#64ffda]" />
        </a>
        <a href="https://www.linkedin.com/in/shaheer-dastgir-224b72281" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5 text-slate-400 hover:text-[#64ffda]" />
        </a>
      </div>

      {/* CV */}
      <div className="mt-2">
        <a href="/Shaheer_CV.pdf" download className="pill">Download CV</a>
      </div>
    </div>
  );
}