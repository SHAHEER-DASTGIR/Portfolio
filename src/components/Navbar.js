import { Sun, Moon } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`fixed w-full top-0 left-0 ${darkMode ? "bg-gray-800" : "bg-gray-200"} shadow-lg z-50`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Shaheer Dastgir</h1>
        <div className="flex items-center space-x-6">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-full hover:bg-gray-700 transition"
          >
            {darkMode ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5"/>}
          </button>
        </div>
      </div>
    </nav>
  );
}