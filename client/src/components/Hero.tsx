import { useEffect, useRef } from "react";

const Hero = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector("header")?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="pt-28 pb-20 px-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-size-200 animate-gradient"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in mb-4">
            <img
              src="https://i.postimg.cc/WbBLzLmH/Whats-App-Image-2025-05-11-at-16-28-42-540deeca.jpg"
              alt="Avatar"
              className="w-32 h-32 rounded-full mx-auto bg-white/20 object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">Yasirsha</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
            BCA Student & Aspiring Developer
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in delay-200">
            <button
              onClick={() => handleScrollToSection("contact")}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Get in Touch
            </button>
            <button
              onClick={() => handleScrollToSection("projects")}
              className="px-6 py-3 bg-transparent text-white border-2 border-white/30 font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              View Projects
            </button>
          </div>

          <div className="flex justify-center space-x-4 animate-fade-in delay-300">
            <a
              href="mailto:yasirshaonline@gmail.com"
              className="text-white hover:text-primary-200 transition-colors"
            >
              <i className="ri-mail-line text-2xl"></i>
            </a>
            <a
              href="tel:7034928226"
              className="text-white hover:text-primary-200 transition-colors"
            >
              <i className="ri-phone-line text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/yasir-sha-76219835b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-200 transition-colors"
            >
              <i className="ri-linkedin-box-line text-2xl"></i>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-200 transition-colors"
            >
              <i className="ri-github-line text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
