import {
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaHandshake,
  FaHeartbeat,
} from "react-icons/fa";

export default function About() {
  const objectives = [
    {
      title: "Citizen Empowerment",
      desc: "Provide communities with transparent eco-scores and real-time insights into their environmental performance.",
      icon: <FaUsers size={30} />,
    },
    {
      title: "Data-Driven Urban Planning",
      desc: "Enable policymakers to use predictive analytics and scenario simulations for sustainable infrastructure development.",
      icon: <FaChartLine size={30} />,
    },
    {
      title: "Climate Resilience",
      desc: "Monitor, predict, and respond to urban risks such as heatwaves, floods, and pollution hotspots.",
      icon: <FaShieldAlt size={30} />,
    },
    {
      title: "Community Engagement",
      desc: "Encourage sustainable practices through gamification, rewards, and neighborhood-level challenges.",
      icon: <FaHandshake size={30} />,
    },
    {
      title: "Health & Wellbeing",
      desc: "Connect environmental data with public health insights to mitigate climate-linked risks.",
      icon: <FaHeartbeat size={30} />,
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-10 text-green-700">
        Our Core Objectives
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {objectives.map((obj, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition"
          >
            <div className="text-green-600 mb-4 flex justify-center">
              {obj.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{obj.title}</h3>
            <p className="text-gray-600">{obj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
