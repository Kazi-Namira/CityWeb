// import {
//   FaLeaf,
//   FaBell,
//   FaCity,
//   FaTrophy,
//   FaRecycle,
//   FaGlobe,
//   FaStethoscope,
// } from "react-icons/fa";

// export default function Features() {
//   const features = [
//     {
//       title: "Citizen Eco-Score System",
//       desc: "Evaluate sustainability across neighborhoods and wards.",
//       icon: <FaLeaf size={28} />,
//     },
//     {
//       title: "AI-Powered Alerts",
//       desc: "Get real-time notifications on floods, air quality, and heatwaves.",
//       icon: <FaBell size={28} />,
//     },
//     {
//       title: "Smart Dashboard",
//       desc: "Use 3D visualization and digital twin technology for city monitoring.",
//       icon: <FaCity size={28} />,
//     },
//     {
//       title: "Eco-Rewards & Leaderboards",
//       desc: "Motivate citizens through eco-coins and gamified challenges.",
//       icon: <FaTrophy size={28} />,
//     },
//     {
//       title: "Carbon Footprint Tracker",
//       desc: "Help cities progress toward net-zero targets with easy tracking.",
//       icon: <FaRecycle size={28} />,
//     },
//     {
//       title: "Scenario Simulators",
//       desc: "Test impacts of tree plantations, renewable energy, or waste segregation.",
//       icon: <FaGlobe size={28} />,
//     },
//     {
//       title: "Health Risk Predictions",
//       desc: "Link environmental changes with disease outbreaks and wellbeing indicators.",
//       icon: <FaStethoscope size={28} />,
//     },
//   ];

//   return (
//     <section className="py-16 px-6 bg-white text-center">
//       <h2 className="text-4xl font-bold mb-10 text-green-700">Key Features</h2>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {features.map((feat, i) => (
//           <div
//             key={i}
//             className="bg-gray-50 shadow-md rounded-2xl p-6 hover:shadow-xl transition"
//           >
//             <div className="text-green-600 mb-4 flex justify-center">
//               {feat.icon}
//             </div>
//             <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
//             <p className="text-gray-600">{feat.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import {
  FaLeaf,
  FaBell,
  FaCity,
  FaTrophy,
  FaRecycle,
  FaGlobe,
  FaStethoscope,
} from "react-icons/fa";

export default function Features() {
  const features = [
    {
      title: "Citizen Eco-Score System",
      desc: "Evaluate sustainability across neighborhoods and wards.",
      icon: <FaLeaf size={28} />,
    },
    {
      title: "AI-Powered Alerts",
      desc: "Get real-time notifications on floods, air quality, and heatwaves.",
      icon: <FaBell size={28} />,
    },
    {
      title: "Smart Dashboard",
      desc: "Use 3D visualization and digital twin technology for city monitoring.",
      icon: <FaCity size={28} />,
    },
    {
      title: "Eco-Rewards & Leaderboards",
      desc: "Motivate citizens through eco-coins and gamified challenges.",
      icon: <FaTrophy size={28} />,
    },
    {
      title: "Carbon Footprint Tracker",
      desc: "Help cities progress toward net-zero targets with easy tracking.",
      icon: <FaRecycle size={28} />,
    },
    {
      title: "Scenario Simulators",
      desc: "Test impacts of tree plantations, renewable energy, or waste segregation.",
      icon: <FaGlobe size={28} />,
    },
    {
      title: "Health Risk Predictions",
      desc: "Link environmental changes with disease outbreaks and wellbeing indicators.",
      icon: <FaStethoscope size={28} />,
    },
  ];

  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10 text-green-700">Key Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feat, i) => (
          <div
            key={i}
            className="bg-gray-50 shadow-md rounded-2xl p-6 hover:shadow-xl transition"
          >
            <div className="text-green-600 mb-4 flex justify-center">
              {feat.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
            <p className="text-gray-600">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
