import { useScrollReveal } from "../hooks/useScrollReveal";

const Education = () => {
  const { ref: sectionRef } = useScrollReveal();

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
          <h2 className="text-3xl font-bold text-center mb-14">
            Education & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">Certifications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education Timeline */}
          <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
            <div className="flex items-center mb-6">
              <i className="ri-graduation-cap-line text-2xl text-primary-500 mr-3"></i>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Education</h3>
            </div>

            <div className="relative pl-8 pb-8 border-l-2 border-primary-200 dark:border-primary-900">
              <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
              <div className="mb-4">
                <div className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm mb-2">2023 - Present</div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-gray-600 dark:text-gray-300">East Point College, Bangalore</p>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Currently in 2nd Year, Expected Graduation: 2026</p>
              </div>
            </div>

            <div className="mt-8 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <h4 className="text-lg font-medium mb-4 text-gray-800 dark:text-white">Key Academic Achievements</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mt-1 mr-2"></i>
                  <span>Active participant in college tech events and hackathons</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mt-1 mr-2"></i>
                  <span>Maintaining strong academic performance</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mt-1 mr-2"></i>
                  <span>Self-learning additional technologies beyond curriculum</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
            <div className="flex items-center mb-6">
              <i className="ri-award-line text-2xl text-primary-500 mr-3"></i>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Certifications</h3>
            </div>

            <div className="space-y-5">
              <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg mr-3">
                    <i className="ri-ai-generate text-xl"></i>
                  </div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Artificial Intelligence Fundamentals</h4>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mb-2">IBM</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    <i className="ri-calendar-line mr-1"></i> 2023
                  </span>
                  <a href="https://www.credly.com/badges/434a7565-bcf5-46c8-90f2-5fbfec39b7a1/public_url" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors text-sm">
                    Verify
                    <i className="ri-external-link-line ml-1"></i>
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg mr-3">
                    <i className="ri-code-s-slash-line text-xl"></i>
                  </div>
                  <h4 className="font-medium text-gray-800 dark:text-white">C Programming for Beginners</h4>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mb-2">SoloLearn</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    <i className="ri-calendar-line mr-1"></i> 2022
                  </span>
                  <a href="#" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors text-sm">
                    Verify
                    <i className="ri-external-link-line ml-1"></i>
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg mr-3">
                    <i className="ri-chat-smile-line text-xl"></i>
                  </div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Communication and Personal Dynamics</h4>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mb-2">IBM</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    <i className="ri-calendar-line mr-1"></i> 2023
                  </span>
                  <a href="https://api2.sololearn.com/v2/certificates/CC-VVKESHW2/image/png?t=638371803512815010" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors text-sm">
                    Verify
                    <i className="ri-external-link-line ml-1"></i>
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-lg mr-3">
                    <i className="ri-customer-service-line text-xl"></i>
                  </div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Customer Engagement and Problem Solving</h4>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mb-2">IBM</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    <i className="ri-calendar-line mr-1"></i> 2023
                  </span>
                  <a href="https://www.credly.com/badges/d430b8ea-b2f7-4d04-9746-282d5984765c/public_url" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors text-sm">
                    Verify
                    <i className="ri-external-link-line ml-1"></i>
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

export default Education;
