import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-lg mx-auto text-center">
          {/* Broken Film Reel Icon */}
          <div className="mb-6 sm:mb-8 md:mb-10 animate-bounce-slow">
            <svg
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto text-blue-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="32" cy="32" r="28" strokeWidth="2" />
              <circle cx="32" cy="32" r="8" strokeWidth="2" />
              <rect x="28" y="4" width="8" height="8" rx="2" strokeWidth="2" />
              <rect x="28" y="52" width="8" height="8" rx="2" strokeWidth="2" />
              <rect x="4" y="28" width="8" height="8" rx="2" strokeWidth="2" />
              <rect x="52" y="28" width="8" height="8" rx="2" strokeWidth="2" />
              <path
                d="M10 10 L20 20 M20 10 L10 20 M44 44 L54 54 M54 44 L44 54"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-gray-200 to-blue-900 animate-gradient-shift tracking-tight animate-fade-in">
            Oops! Page Not Found
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 md:mb-10 text-gray-400 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            It looks like this reel broke. Don’t worry, let’s get you back to
            the action!
          </p>

          {/* Back to Home Button */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Link to={"/browse"}>
              <button className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-900 text-gray-50 text-base sm:text-lg font-semibold rounded-full hover:bg-blue-800 hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-blue-800/60 w-full sm:w-auto max-w-xs">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
