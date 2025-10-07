import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import illustration from "../assets/city_transparent (1).png";

export default function Home() {
  const navigate = useNavigate();

  const handleExploreFeatures = () => {
    navigate("/features");
  };

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#f8f6e8] text-[#1c322b] overflow-hidden p-6">
      {/* Background Leaves/Shapes */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 -left-16 w-48 h-48 bg-[#a8d387] rounded-full filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-[#c3e3a4] rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 -right-16 w-52 h-52 bg-[#e8f6d6] rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left-hand Content Block */}
        <div className="text-center lg:text-left py-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight drop-shadow-sm">
            Building a Better World, <br /> One Choice at a Time
          </h1>
          <p className="text-xl md:text-2xl text-[#39564d] mb-8 max-w-lg mx-auto lg:mx-0">
            Every small step towards sustainability contributes to a greener and
            healthier future. Together, we can make a difference with every
            choice we make today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <button
              onClick={handleExploreFeatures}
              className="group px-8 py-4 bg-[#33691E] text-white rounded-full font-semibold shadow-md hover:bg-[#020202] transition-colors duration-300 flex items-center gap-2 w-max"
            >
              Explore Features
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleLearnMore}
              className="px-8 py-4 bg-transparent border-2 border-[#1c322b] text-[#1c322b] rounded-full font-semibold hover:bg-[#1c322b] hover:text-white transition-colors duration-300 w-max"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right-hand Illustration */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={illustration}
            alt="Eco city illustration"
            className="w-3/4 lg:w-75 max-w-lg lg:max-w-xl object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
