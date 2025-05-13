import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Contact = () => {
  const { ref: sectionRef } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For a static site, we would normally just show a success message
    // In a real application, this would be connected to a backend service
    alert("Thank you for your message! This is a static portfolio, so the form doesn't actually submit data.");
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
          <h2 className="text-3xl font-bold text-center mb-4">
            Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Feel free to reach out if you're looking for a collaborator, have a question, or just want to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-500/20 text-white font-medium rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="opacity-0 translate-y-5 transition-all duration-500 ease-out" data-scroll-reveal>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md h-full">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Contact Information</h3>

              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mr-4 mt-1">
                    <i className="ri-map-pin-line text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Bangalore, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mr-4 mt-1">
                    <i className="ri-mail-line text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">Email</h4>
                    <a
                      href="mailto:yasirshaonline@gmail.com"
                      className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                    >
                      yasirshaonline@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mr-4 mt-1">
                    <i className="ri-phone-line text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">Phone</h4>
                    <a
                      href="tel:7034928226"
                      className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                    >
                      +91 7034928226
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-medium text-gray-800 dark:text-white mb-4">Connect on Social Media</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-primary-100 dark:bg-gray-700 dark:hover:bg-primary-900/30 text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 rounded-full transition-colors"
                  >
                    <i className="ri-linkedin-box-line text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-primary-100 dark:bg-gray-700 dark:hover:bg-primary-900/30 text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 rounded-full transition-colors"
                  >
                    <i className="ri-github-line text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-primary-100 dark:bg-gray-700 dark:hover:bg-primary-900/30 text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 rounded-full transition-colors"
                  >
                    <i className="ri-twitter-x-line text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-primary-100 dark:bg-gray-700 dark:hover:bg-primary-900/30 text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 rounded-full transition-colors"
                  >
                    <i className="ri-instagram-line text-xl"></i>
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

export default Contact;
