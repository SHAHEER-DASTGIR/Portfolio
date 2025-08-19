import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold"
      >
        Hi, I’m <span className="text-blue-400">Shaheer</span> 👋
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5 }}
        className="mt-4 text-xl text-gray-400"
      >
        Embedded Engineer | C/C++ | Linux | STM32
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 1 }}
        className="flex space-x-4 mt-6"
      >
        <a 
          href="#projects" 
          className="px-6 py-3 bg-blue-600 rounded-xl shadow-lg hover:bg-blue-500 transition"
        >
          View My Work
        </a>
        <a 
          href="/Shaheer_CV.pdf" 
          download 
          className="px-6 py-3 flex items-center space-x-2 bg-gray-700 rounded-xl shadow-lg hover:bg-gray-600 transition"
        >
          <FileDown className="w-5 h-5"/> <span>Download CV</span>
        </a>
      </motion.div>
    </section>
  );
}