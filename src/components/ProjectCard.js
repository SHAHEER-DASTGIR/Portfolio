import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-gray-900 rounded-xl shadow hover:shadow-blue-500/50 transition"
    >
      <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-3">{project.description}</p>
      <a href={project.github} className="text-blue-400 underline">View Code</a>
    </motion.div>
  );
}