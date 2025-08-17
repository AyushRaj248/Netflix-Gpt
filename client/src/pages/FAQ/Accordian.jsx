import React, { useState } from "react";

const Accordian = ({ question, answer,isOpen,handleToggle,idx}) => {
    console.log({ question, answer,isOpen,handleToggle,idx});
    
  return (
    <div>
      <div className="max-w-3xl mx-auto">
        <div className="mb-4 sm:mb-6 bg-gray-975/50 rounded-xl shadow-2xl hover:shadow-blue-800/60 transition-shadow duration-300">
          <button
            onClick={() => handleToggle(idx)}
            className="w-full cursor-pointer flex justify-between items-center p-4 sm:p-5 md:p-6 text-left text-base sm:text-lg md:text-xl font-semibold text-gray-50 hover:text-blue-600 transition-colors duration-300 focus:outline-none"
            aria-controls={`faq-answer`}
          >
            <span>{question}</span>

            <svg
              className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-700 transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="p-4 sm:p-5 md:p-6 pt-0 text-sm sm:text-base md:text-base text-gray-200 leading-relaxed">
                {answer}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
