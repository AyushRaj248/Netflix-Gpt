import React from 'react';
import 'animate.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-gray-100 shadow-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate__animated animate__fadeInUp animate__delay-1s">
          {/* About Section */}
          <div className="animate__animated animate__fadeInUp animate__delay-2s">
            <h3 className="text-3xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
              About Us
            </h3>
            <p className="text-base leading-relaxed drop-shadow-sm">
              Dive into a world of entertainment with our premium streaming service, offering the best movies, TV shows, and exclusive originals.
            </p>
          </div>

          {/* Links Section */}
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <h3 className="text-3xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
              Links
            </h3>
            <ul className="space-y-4">
              {['Home', 'Movies', 'TV Shows', 'My List'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base hover:text-blue-300 hover:translate-y-[-2px] transition-all duration-300 ease-in-out drop-shadow-sm"
                    aria-label={`Navigate to ${item} page`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className="animate__animated animate__fadeInUp animate__delay-4s">
            <h3 className="text-3xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
              Support
            </h3>
            <ul className="space-y-4">
              {['FAQ', 'Contact Us', 'Terms of Use', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base hover:text-blue-300 hover:translate-y-[-2px] transition-all duration-300 ease-in-out drop-shadow-sm"
                    aria-label={`View ${item}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700/50 my-10 animate__animated animate__fadeIn animate__delay-5s"></div>

        {/* Copyright Section */}
        <div className="text-center text-base animate__animated animate__fadeIn animate__delay-6s">
          <p className="drop-shadow-sm">© 2025 Streaming Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



