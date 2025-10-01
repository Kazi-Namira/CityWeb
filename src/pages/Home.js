// export default function Home() {
//   return (
//     <section className="flex flex-col items-center justify-center h-[80vh] text-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-6">
//       <h1 className="text-5xl font-bold mb-4">Welcome to CityWeb</h1>
//       <p className="max-w-2xl text-lg mb-6">
//         A smarter, greener, healthier city platform — empowering citizens and
//         policymakers with real-time insights.
//       </p>
//       <button className="px-6 py-3 bg-white text-green-600 rounded-lg shadow-lg hover:bg-gray-200 transition">
//         Explore Features
//       </button>
//     </section>
//   );
// }

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaArrowRight, FaLeaf, FaCity, FaUsers } from "react-icons/fa";

// export default function Home() {
//   const navigate = useNavigate();

//   const handleExploreFeatures = () => {
//     navigate("/features");
//   };

//   const handleLearnMore = () => {
//     navigate("/about");
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 via-blue-600 to-emerald-700 text-white overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
//         <div className="absolute bottom-40 right-32 w-24 h-24 border-2 border-white rounded-full animate-bounce"></div>
//         <div className="absolute top-1/2 left-10 w-16 h-16 border border-white rounded-full"></div>
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//         {/* Main Heading */}
//         <div className="mb-8">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//             Welcome to{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
//               CityWeb
//             </span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
//             A smarter, greener, healthier city platform — empowering citizens
//             and policymakers with real-time environmental insights and
//             sustainable solutions.
//           </p>
//         </div>

//         {/* Feature Icons */}
//         <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
//           <div className="flex flex-col items-center">
//             <FaLeaf className="text-4xl text-green-300 mb-2" />
//             <span className="text-sm">Eco-Friendly</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaCity className="text-4xl text-blue-300 mb-2" />
//             <span className="text-sm">Smart Cities</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaUsers className="text-4xl text-yellow-300 mb-2" />
//             <span className="text-sm">Community Driven</span>
//           </div>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <button
//             onClick={handleExploreFeatures}
//             className="group px-8 py-4 bg-white text-green-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
//           >
//             Explore Features
//             <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//           </button>
//           <button
//             onClick={handleLearnMore}
//             className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
//           >
//             Learn More
//           </button>
//         </div>

//         {/* Stats Section */}
//         <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
//           <div className="text-center">
//             <div className="text-3xl font-bold text-yellow-400">50+</div>
//             <div className="text-sm text-gray-300">Cities Monitored</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-green-400">1M+</div>
//             <div className="text-sm text-gray-300">Citizens Engaged</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-blue-400">25%</div>
//             <div className="text-sm text-gray-300">Carbon Reduction</div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//         <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";

// import illustration from "../assets/city_transparent (1).png";

// export default function Home() {
//   const navigate = useNavigate();

//   const handleExploreFeatures = () => {
//     navigate("/features");
//   };

//   const handleLearnMore = () => {
//     navigate("/about");
//   };

//   return (
//     <section className="relative min-h-screen flex items-center bg-[#f8f6e8] text-[#1c322b] overflow-hidden p-6">
//       {/* Background Leaves/Shapes - created with CSS */}
//       <div className="absolute inset-0 z-0 opacity-40">
//         <div className="absolute top-1/4 -left-16 w-48 h-48 bg-[#a8d387] rounded-full filter blur-3xl opacity-60 animate-blob"></div>
//         <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-[#c3e3a4] rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
//         <div className="absolute bottom-1/4 -right-16 w-52 h-52 bg-[#e8f6d6] rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left-hand Content Block */}
//         <div className="text-center lg:text-left py-10">
//           <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight drop-shadow-sm">
//             Building a Better World, <br /> One Choice at a Time
//           </h1>
//           <p className="text-xl md:text-2xl text-[#39564d] mb-8 max-w-lg mx-auto lg:mx-0">
//             Every small step towards sustainability contributes to a greener and
//             healthier future. Together, we can make a difference with every
//             choice we make today.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
//             <button
//               onClick={handleExploreFeatures}
//               className="group px-8 py-4 bg-[#33691E] text-white rounded-full font-semibold shadow-md hover:bg-[#020202] transition-colors duration-300 flex items-center gap-2 w-max"
//             >
//               Explore Features
//               <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button
//               onClick={handleLearnMore}
//               className="px-8 py-4 bg-transparent border-2 border-[#1c322b] text-[#1c322b] rounded-full font-semibold hover:bg-[#1c322b] hover:text-white transition-colors duration-300 w-max"
//             >
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Right-hand Visuals - A placeholder for illustration or more content */}
//         {/* want to add an image */}
//         <div className="flex justify-center lg:justify-end">
//           <img
//             src={illustration}
//             alt="Illustration showing eco city / nature"
//             className="w-full max-w-md lg:max-w-xl xl:max-w-2xl drop-shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

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
