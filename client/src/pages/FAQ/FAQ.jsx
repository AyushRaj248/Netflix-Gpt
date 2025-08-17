import React, { useState } from "react";
import { Faqs } from "../../utils/constants";
import Accordian from "./Accordian";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (id) => {
    console.log("click");
    openIndex === id ? setOpenIndex(null) : setOpenIndex(id);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans overflow-hidden py-16 sm:py-24 md:py-32">
      <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 sm:mb-12 md:mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-gray-200 to-blue-900 animate-gradient-shift tracking-tight">
          Frequently Asked Questions
        </h2>

        {Faqs.map((el, idx) => (
          <Accordian
            idx={idx}
            handleToggle={handleToggle}
            isOpen={idx === openIndex ? true : false}
            {...el}
          />
        ))}

        <div className="mt-8 sm:mt-12 text-center">
          <Link to={'/browse'}>
          <button className="px-6 py-3 cursor-pointer sm:px-8 sm:py-4 bg-blue-900 text-gray-50 text-base sm:text-lg font-semibold rounded-full hover:bg-blue-800 hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-blue-800/60 w-full sm:w-auto max-w-xs">
            Browse
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
