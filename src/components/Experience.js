export default function Experience() {
  const roles = [
    {
      title: "Research Assistant",
      company: "Big Data & AI Center, Namal University Mianwali",
      period: "Jun 2023 – Jul 2025 · 2 yrs 2 mos",
      points: [
        "Worked on RISC-V CPU design and MIPI core verification.",
        "Hands-on with Verilog, Quest Asim, and Gtkwave for hardware verification.",
        "Collaborated in a research-driven environment integrating hardware and AI.",
        "Skills: Verilog · Linux · Team Collaboration",
      ],
    },
    {
      title: "Digital Marketing Specialist",
      company: "FES Consultants",
      period: "Jul 2024 – Sep 2024 · 3 mos",
      points: [
        "Developed and executed SEO strategies improving organic rankings (+30% traffic).",
        "Managed Google Ads campaigns achieving 25% cost-per-click reduction.",
        "Engaged with clients for lead generation and relationship building.",
        "Skills: SEO · Google Ads · Communication · Client Engagement · Digital Marketing",
      ],
    },
    {
      title: "Senior Manager",
      company: "Namal Sports and Adventure Society",
      period: "Oct 2023 – Jul 2024 · 10 mos",
      points: [
        "Led event planning and execution for university adventure and sports programs.",
        "Fostered teamwork and collaboration among diverse student groups.",
        "Skills: Team Collaboration · Event Coordination",
      ],
    },
    {
      title: "Head of Emergency Wing",
      company: "Namal Society for Social Impact",
      period: "Sep 2023 – Jul 2024 · 11 mos",
      points: [
        "Managed emergency preparedness and response initiatives.",
        "Trained student volunteers for emergency management.",
        "Skills: Emergency Preparedness · Leadership",
      ],
    },
    {
      title: "Embedded Systems Developer",
      company: "Freelance / Personal Projects",
      period: "2022 – 2023",
      points: [
        "Designed ESP32 firmware with FreeRTOS for sensor data acquisition and wireless communication.",
        "Implemented ESP32 communication drivers for SPI/I2C external sensors.",
        "Built Linux device drivers for data logging and system integration.",
      ],
    },
    {
      title: "Event Manager",
      company: "Namal Society for Social Impact",
      period: "Sep 2021 – Jun 2022 · 10 mos",
      points: [
        "Organized social impact events, managing logistics and operations.",
        "Collaborated with faculty and peers to deliver impactful initiatives.",
        "Skills: Event Management · Public Dealing",
      ],
    },
    {
      title: "Student (BSc Electrical Engineering)",
      company: "Namal University",
      period: "Nov 2021 – Jul 2025 · 3 yrs 9 mos (Ongoing)",
      points: [
        "Studied Electrical & Computer Engineering with strong focus on Embedded Systems and IoT.",
        "Developed projects in Python, C++, and hardware programming.",
        "Engaged in teamwork, presentations, and cross-disciplinary collaborations.",
        "Skills: Python · C++ · Team Collaboration · Oral Communication · Computer Literacy",
      ],
    },
  ];

  return (
    <section id="experience" className="scroll-mt-24">
      <h3 className="section-title">Experience</h3>
      <div className="space-y-6">
        {roles.map((r, idx) => (
          <article key={idx} className="card p-6">
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <h4 className="text-slate-100 font-semibold">
                {r.title} ·{" "}
                <span className="text-[#64ffda]">{r.company}</span>
              </h4>
              <span className="text-sm text-slate-400">{r.period}</span>
            </div>
            <ul className="list-disc list-inside mt-3 space-y-1 text-slate-300">
              {r.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
