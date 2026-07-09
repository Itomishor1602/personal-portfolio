import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeContext";
import CV from "../assets/CV.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="bg-white text-black dark:bg-black dark:text-white flex items-center justify-between py-4 px-6 md:px-10">

      {/* Logo */}
      <h1 className="font-inter text-3xl font-bold cursor-pointer">
        Victor<span className="text-blue-500">.</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-lg">
        <a href="#home"><li className="cursor-pointer dark:hover:text-mist-300 hover:scale-110 transition">
          Home
        </li></a>
        <a href="#about"><li className="cursor-pointer dark:hover:text-mist-300 hover:scale-110 transition">
          About
        </li></a> 
        <a href="#projects"><li className="cursor-pointer dark:hover:text-mist-300 hover:scale-110 transition">
          Projects
        </li></a>
        <a href="#contact"><li className="cursor-pointer dark:hover:text-mist-300 hover:scale-110 transition">
          Contact
        </li></a>
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-3">

        {/* Theme Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 hover:text-blue-400 transition"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Resume Button */}
        <a
          href={CV} download="Victor_CV.pdf"
          className="hidden md:inline-block border border-gray-700 px-4 py-2 rounded-md hover:bg-blue-500 hover:border-blue-500 transition"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full text-black dark:text-white bg-white dark:bg-black flex flex-col items-center gap-6 py-8 md:hidden border-t border-gray-800">

          <a href="#home"><li className="list-none cursor-pointer hover:text-blue-400">Home</li></a>
          <a href="#about"><li className="list-none cursor-pointer hover:text-blue-400">About</li></a>
          <a href="#projects"><li className="list-none cursor-pointer hover:text-blue-400">Projects</li></a>
          <a href="#contact"><li className="list-none cursor-pointer hover:text-blue-400">Contact</li></a>

        </div>
      )}

      

    </nav>  
  );
  
};

export default Navbar;