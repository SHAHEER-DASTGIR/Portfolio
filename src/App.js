import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.body.classList.add("bg-[#0a192f]");
    return () => document.body.classList.remove("bg-[#0a192f]");
  }, []);

  return (
    <div className="min-h-screen antialiased bg-[#0a192f] text-[#8892b0]">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="md:grid md:grid-cols-[280px,minmax(0,1fr)] md:gap-12">
          {/* Sidebar */}
          <aside className="md:sticky md:top-0 md:h-screen md:flex md:flex-col py-10">
            <Sidebar />
          </aside>

          {/* Main Content */}
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
