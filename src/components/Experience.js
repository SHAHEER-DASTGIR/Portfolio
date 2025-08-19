export default function Experience() {
  const roles = [
    {
      company: "Namal University's Big Data & AI Center",
      title: "Research Assistant",
      period: "2023 — Present",
      points: [
        "Contributed to RISC-V CPU design and MIPI core verification using Quest Asim and Gtkwave.",
        "Developed hardware verification testbenches using UVM-SV methodology.",
        "Integrated hardware and AI systems, focusing on innovation and efficiency.",
      ],
    },
    {
      company: "Freelance / Personal Projects",
      title: "Embedded Systems Developer",
      period: "2022 — 2023",
      points: [
        "Designed ESP32 firmware with FreeRTOS for sensor data acquisition and wireless communication.",
        "Implemented STM32 communication drivers for SPI/I2C external sensors.",
        "Built Linux device drivers for data logging and system integration.",
      ],
    },
  ];

  return (
    <section id="experience" className="scroll-mt-24">
      <h3 className="section-title">Experience</h3>
      <div className="space-y-4">
        {roles.map((r, idx) => (
          <article key={idx} className="card p-5">
            <div className="flex items-baseline justify-between">
              <h4 className="text-slate-100 font-semibold">{r.title} · <span className="text-[#64ffda]">{r.company}</span></h4>
              <span className="text-sm text-slate-400">{r.period}</span>
            </div>
            <ul className="mt-3 list-disc pl-5 text-slate-300 space-y-1">
              {r.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}