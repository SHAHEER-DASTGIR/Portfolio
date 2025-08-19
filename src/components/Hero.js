import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" aria-label="Intro" className="scroll-mt-24">
      <motion.img
        src="/profile.jpg"
        alt="Shaheer Dastgir"
        className="w-28 h-28 rounded-full ring-2 ring-[#64ffda]/40 shadow mb-6 md:hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      />
      <motion.h2
        className="text-4xl md:text-5xl font-bold leading-tight text-slate-100"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        I build reliable embedded & IoT systems.
      </motion.h2>
      <p className="mt-4 max-w-2xl text-slate-400">
        Focused on firmware, device drivers, connectivity (Wi-Fi, BLE, MQTT), and end-to-end prototypes
        using ESP32, STM32, and Linux.
      </p>
    </section>
  );
}