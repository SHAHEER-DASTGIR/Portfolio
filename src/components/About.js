export default function About() {
  const skills = [
    "C/C++", "Python", "ESP32", "Raspberry Pi", "FreeRTOS", "Linux", 
    "MQTT", "BLE", "I²C/SPI/UART", "Git", "UVM-SV", "Quest Asim", "Gtkwave"
  ];

  return (
    <section id="about" className="scroll-mt-24">
      <h3 className="section-title">About</h3>
      <div className="prose-invert">
        <p className="text-slate-300 text-justify">
          Electrical Engineer with a strong foundation in software development, 
          embedded systems, and machine learning. I have hands-on experience in 
          Python, Verilog, and UVM-SV with a passion for bridging low-level 
          hardware design and high-level AI systems.
          <br /><br />
          As a Research Assistant at Namal University’s Big Data & AI Center, I 
          contributed to RISC-V CPU design and MIPI core verification using 
          industry-standard tools like Quest Asim and Gtkwave. My work integrates 
          hardware and AI, focusing on innovation and efficiency.
          <br /><br />
          I thrive in collaborative, research-driven environments and am 
          continuously exploring new challenges in embedded systems, AI, 
          and hardware verification.
        </p>
      </div>
      <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
        {skills.map((s) => (
          <li key={s} className="pill">{s}</li>
        ))}
      </ul>
    </section>
  );
}
