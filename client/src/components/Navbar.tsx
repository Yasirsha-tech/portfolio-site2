import { useState, useEffect } from "react";
import { getTheme, toggleTheme as toggleThemeUtil } from "../lib/theme-toggle";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(getTheme());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleTheme = () => {
    const newTheme = toggleThemeUtil();
    setTheme(newTheme);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector("header")?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    closeMobileMenu();
  };

  return (
    <header className={`bg-white dark:bg-gray-900 fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md" : "shadow-sm"}`}>
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
        >
          Yasirsha
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }} className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white transition-colors">About</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection("skills"); }} className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white transition-colors">Skills</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }} className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white transition-colors">Projects</a>
          <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection("education"); }} className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white transition-colors">Education</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }} className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white transition-colors">Contact</a>
          {/* Instagram icon */}
          <a href="https://instagram.com/yaasirsha" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center space-x-1">
            <i className="ri-instagram-line text-xl"></i>
            <span>Instagram</span>
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={handleToggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <i className="ri-sun-line text-yellow-400 text-xl"></i>
            ) : (
              <i className="ri-moon-line text-gray-600 text-xl"></i>
            )}
          </button>

          <button
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={toggleMobileMenu}
          >
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white dark:bg-gray-900 shadow-md py-2 px-4 absolute w-full transition-all duration-300 ${mobileMenuOpen ? "block animate-fade-in" : "hidden"}`}>
        <div className="flex flex-col space-y-3">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }} className="py-2 text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white transition-colors">About</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection("skills"); }} className="py-2 text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white transition-colors">Skills</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }} className="py-2 text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white transition-colors">Projects</a>
          <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection("education"); }} className="py-2 text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white transition-colors">Education</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }} className="py-2 text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white transition-colors">Contact</a>
          {/* Instagram mobile */}
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 py-2 text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-white transition-colors">
            <i className="ri-instagram-line text-xl"></i>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
