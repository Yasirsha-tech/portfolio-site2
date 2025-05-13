import { useScrollReveal } from "../hooks/useScrollReveal";

const Skills = () => {
  const { ref: sectionRef } = useScrollReveal();

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
          <h2 className="text-3xl font-bold text-center mb-14">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md h-full">
              <div className="flex items-center mb-4">
                <i className="ri-code-s-slash-line text-2xl text-primary-500 mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Programming Languages</h3>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">C</span>
                    <span className="text-gray-500 dark:text-gray-400">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full w-10/12"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Java</span>
                    <span className="text-gray-500 dark:text-gray-400">Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full w-8/12"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Python</span>
                    <span className="text-gray-500 dark:text-gray-400">Basics</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full w-5/12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Web Development */}
          <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md h-full">
              <div className="flex items-center mb-4">
                <i className="ri-html5-line text-2xl text-primary-500 mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Web Development</h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">Full Stack Fundamentals</p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">HTML</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">CSS</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">Express</span>
              </div>
            </div>
          </div>

          {/* Cloud Computing */}
          <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md h-full">
              <div className="flex items-center mb-4">
                <i className="ri-cloud-line text-2xl text-primary-500 mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Cloud Computing</h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">AWS (in progress)</p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm">EC2</span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm">S3</span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm">Lambda</span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm">Cloud Basics</span>
              </div>
            </div>
          </div>

          {/* AI Tools */}
          <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md h-full">
              <div className="flex items-center mb-4">
                <i className="ri-robot-line text-2xl text-primary-500 mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">AI Tools & Automation</h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">Beginner Level</p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">AI Fundamentals</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">Automation</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">Tools Integration</span>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md h-full">
              <div className="flex items-center mb-4">
                <i className="ri-user-heart-line text-2xl text-primary-500 mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Soft Skills</h3>
              </div>

              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-green-500 mr-2"></i>
                  Fast learner
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-green-500 mr-2"></i>
                  Creative thinking
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-green-500 mr-2"></i>
                  Problem-solving
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-green-500 mr-2"></i>
                  Communication
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-green-500 mr-2"></i>
                  Team collaboration
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md h-full">
              <div className="flex items-center mb-4">
                <i className="ri-graduation-cap-line text-2xl text-primary-500 mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Education</h3>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-800 dark:text-white">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-gray-600 dark:text-gray-300">East Point College, Bangalore</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Currently in 2nd Year (Expected Graduation: 2025)</p>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                <div className="bg-primary-500 h-2 rounded-full w-6/12"></div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-right">50% completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
