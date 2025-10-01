import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Team() {
  const members = [
    {
      name: "Kazi Namira Meyheg Sanam",
      role: "Frontend Developer",
      img: "https://via.placeholder.com/150", // replace with real photo in assets
      github: "https://github.com/Kazi-Namira",
      linkedin: "https://linkedin.com/in/your-profile",
    },
    {
      name: "Umme Benin Yeasmin Meem",
      role: "Backend Developer",
      img: "https://via.placeholder.com/150",
      github: "https://github.com/byeasmin",
      linkedin: "https://linkedin.com/in/teammate",
    },
    // Add more teammates here
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-10 text-green-700">Meet Our Team</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {members.map((member, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-xl transition"
          >
            <img
              src={member.img}
              alt={""}
              className="w-32 h-32 mx-auto rounded-full border-4 border-green-500 object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <div className="flex justify-center gap-4 mt-4 text-green-600">
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FaGithub size={22} className="hover:text-black transition" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={22}
                  className="hover:text-blue-700 transition"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
