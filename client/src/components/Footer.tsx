const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8 px-4 bg-gray-900 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
            >
              Yasirsha
            </a>
          </div>

          <div>
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Yasirsha. All rights reserved.</p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Back to top"
            >
              <i className="ri-arrow-up-line text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
