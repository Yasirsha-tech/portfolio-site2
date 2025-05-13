import { useScrollReveal } from "../hooks/useScrollReveal";

const Projects = () => {
  const { ref: sectionRef } = useScrollReveal();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
          <h2 className="text-3xl font-bold text-center mb-14">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Personal Portfolio */}
          <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
            <div className="hover:translate-y-[-5px] hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-gray-400 dark:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Self Portfolio Website</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Created a personal portfolio to showcase projects, skills, and experience.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">React</span>
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">Vite</span>
                </div>

                <div className="flex justify-between">
                  <a href="#" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors inline-flex items-center">
                    <span>View Live</span>
                    <i className="ri-external-link-line ml-1"></i>
                  </a>
                  <a href="#" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors inline-flex items-center">
                    <span>Source Code</span>
                    <i className="ri-github-line ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Vending Machine App */}
          <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
            <div className="hover:translate-y-[-5px] hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-gray-400 dark:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Vending Machine App with UPI</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A digital solution idea for integrating UPI payments with a tea vending machine on campus.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">React Native</span>
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">UPI Integration</span>
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">IoT</span>
                </div>

                <div className="flex justify-between">
                  <a href="#" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors inline-flex items-center">
                    <span>View Concept</span>
                    <i className="ri-external-link-line ml-1"></i>
                  </a>
                  <a href="#" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors inline-flex items-center">
                    <span>Prototype</span>
                    <i className="ri-file-line ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* BNU PYQ Paper Website */}
          <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
            <div className="hover:translate-y-[-5px] hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-gray-400 dark:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">BNU PYQ Paper Website</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Built a responsive site to help students access previous year question papers easily. Features: Subject filters, upload requests, dark mode.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">HTML/CSS</span>
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">JavaScript</span>
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">Responsive</span>
                </div>

                <div className="flex justify-between">
                  <a href="#" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors inline-flex items-center">
                    <span>View Live</span>
                    <i className="ri-external-link-line ml-1"></i>
                  </a>
                  <a href="#" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors inline-flex items-center">
                    <span>Source Code</span>
                    <i className="ri-github-line ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
