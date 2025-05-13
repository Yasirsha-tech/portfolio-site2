import { useScrollReveal } from "../hooks/useScrollReveal";

const About = () => {
  const { ref: sectionRef } = useScrollReveal();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
          <h2 className="text-3xl font-bold text-center mb-12">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              A passionate BCA student at East Point College, Bangalore, with a strong foundation in full-stack development, cloud computing (AWS), and AI tools. Eager to use technology to solve real-world problems, boost productivity, and continuously learn emerging tech.
            </p>

            <div className="flex flex-col space-y-3 mb-6">
              <div className="flex items-center">
                <i className="ri-map-pin-line text-primary-500 mr-3 text-xl"></i>
                <span className="text-gray-700 dark:text-gray-200">Bangalore, India</span>
              </div>
              <div className="flex items-center">
                <i className="ri-mail-line text-primary-500 mr-3 text-xl"></i>
                <a
                  href="mailto:yasirshaonline@gmail.com"
                  className="text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400 transition-colors"
                >
                  yasirshaonline@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <i className="ri-phone-line text-primary-500 mr-3 text-xl"></i>
                <a
                  href="tel:7034928226"
                  className="text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400 transition-colors"
                >
                  +91 7034928226
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-3 text-gray-800 dark:text-white">Languages Known</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">English</span>
                    <span className="text-gray-700 dark:text-gray-300">Fluent</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Malayalam</span>
                    <span className="text-gray-700 dark:text-gray-300">Fluent</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Tamil</span>
                    <span className="text-gray-700 dark:text-gray-300">Understanding</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full w-6/12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <svg
                className="w-full h-48 text-gray-400 dark:text-gray-600 mb-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z"></path>
                <path d="M9.293 6.707 5.586 10.414 9.293 14.121 10.707 12.707 8.414 10.414 10.707 8.121z"></path>
                <path d="M14.707 6.707 13.293 8.121 15.586 10.414 13.293 12.707 14.707 14.121 18.414 10.414z"></path>
              </svg>
            </div>

            <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-medium mb-4 text-gray-800 dark:text-white">Hobbies & Interests</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                  <i className="ri-code-s-slash-line mr-1"></i> Exploring Technologies
                </span>
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                  <i className="ri-lightbulb-line mr-1"></i> Business Ideas
                </span>
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                  <i className="ri-settings-line mr-1"></i> Practical Solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
