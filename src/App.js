import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // add body bg color (Chiang-inspired dark slate)
  useEffect(() => {
    document.body.classList.add("bg-[#0a192f]");
    return () => document.body.classList.remove("bg-[#0a192f]");
  }, []);

  return (
    <div className="text-slate-300 min-h-screen antialiased">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        {/* Grid: sticky sidebar (left) + main column (right) */}
        <div className="md:grid md:grid-cols-[280px,minmax(0,1fr)] md:gap-12">
          <aside className="md:sticky md:top-0 md:h-screen md:flex md:flex-col py-10">
            <Sidebar />
          </aside>

          <main className="py-10 md:py-16 space-y-28">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}