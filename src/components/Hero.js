export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-start"
    >
      <p className="text-[#64ffda] text-lg mb-2">Hi, my name is</p>
      
      <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-2">
        Shaheer Dastgir
      </h1>
      
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-400 mb-6">
        IoT, Embedded Systems & Firmware Engineer
      </h2>

      <p className="text-slate-300 max-w-xl mb-8">
        Building smart, connected systems with{" "}
        <span className="text-[#64ffda]">ESP32</span>,{" "}
        <span className="text-[#64ffda]">STM32</span>,{" "}
        <span className="text-[#64ffda]">Linux</span> &{" "}
        <span className="text-[#64ffda]">cloud</span>.
      </p>

      <a
        href="#projects"
        className="inline-block px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition"
      >
        Check out my work
      </a>
    </section>
  );
}
