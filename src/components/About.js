export default function About() {
  const skills = ["C/C++", "Python", "ESP32", "STM32", "Raspberry Pi", "FreeRTOS", "Linux", "MQTT", "BLE", "I²C/SPI/UART", "Git", "Docker"];

  return (
    <section id="about" className="scroll-mt-24">
      <h3 className="section-title">About</h3>
      <div className="prose-invert">
        <p className="text-slate-300">
          I'm an IoT & Embedded Engineer who enjoys designing robust firmware and integrating
          sensors, connectivity, and cloud services into cohesive products. I value clean code,
          thorough testing, and measurable reliability.
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