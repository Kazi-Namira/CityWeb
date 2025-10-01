import React from "react";
import { FaArrowRight, FaLeaf, FaCity, FaUsers } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 via-blue-600 to-emerald-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border-2 border-white rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              CityWeb
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            A smarter, greener, healthier city platform — empowering citizens
            and policymakers with real-time environmental insights and
            sustainable solutions.
          </p>
        </div>

        {/* Feature Icons */}
        <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
          <div className="flex flex-col items-center">
            <FaLeaf className="text-4xl text-green-300 mb-2" />
            <span className="text-sm">Eco-Friendly</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCity className="text-4xl text-blue-300 mb-2" />
            <span className="text-sm">Smart Cities</span>
          </div>
          <div className="flex flex-col items-center">
            <FaUsers className="text-4xl text-yellow-300 mb-2" />
            <span className="text-sm">Community Driven</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-8 py-4 bg-white text-green-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
            Explore Features
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">50+</div>
            <div className="text-sm text-gray-300">Cities Monitored</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">1M+</div>
            <div className="text-sm text-gray-300">Citizens Engaged</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">25%</div>
            <div className="text-sm text-gray-300">Carbon Reduction</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
