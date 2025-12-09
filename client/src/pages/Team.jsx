import React from "react";
import { Link } from "react-router-dom";

// All team data including about text for the profile page
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    techStack: ["Leadership", "Strategy", "Product Vision"],
    about:
      "John has experience building and scaling products. He specializes in strategy, product development, and team leadership, driving impactful solutions for clients.",
  },
  {
    name: "Sarah Wilson",
    role: "Lead Designer",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    techStack: ["Figma", "UI/UX", "Branding", "Illustrator"],
    about:
      "Sarah is passionate about design systems and digital experiences. She has led UI/UX development for multiple products, enhancing usability and branding.",
  },
  {
    name: "Alex Carter",
    role: "Full-Stack Developer",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
    about:
      "Alex works on scalable web applications using MERN stack technologies. He enjoys building real-time systems and enhancing performance through optimized design.",
  },
  {
    name: "Emily Johnson",
    role: "Marketing Head",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    techStack: ["SEO", "Analytics", "Growth Strategy"],
    about:
      "Emily leads growth strategies and brand positioning. She specializes in digital marketing, with a focus on analytics and content-driven growth for products.",
  },
];

// Helper to format URL slug
function slugify(name) {
  return name.toLowerCase().replace(/ /g, "-");
}

const Team = () => {
  return (
    <section className="bg-gray-50 mt-[69px]">

      {/* 🔥 Hero Banner */}
      <div className="relative w-full h-[95vh] flex items-center justify-center">
        <img
          src="https://img.freepik.com/free-photo/meeting-communication-planning-business-people-concept_53876-16083.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Team Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-lg text-white max-w-2xl leading-relaxed">
            People behind our successful projects — explore to know more about their skills and roles.
          </p>

          {/* Scroll Button */}
          <button
            onClick={() =>
              document.getElementById("team-grid").scrollIntoView({
                behavior: "smooth",
              })
            }
            className="mt-6 px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all"
          >
            Meet The Team
          </button>
        </div>
      </div>

      {/* 🟣 Team Member Grid */}
      <div id="team-grid" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Team Members</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <Link
              key={index}
              to={`/team/${slugify(member.name)}`}
              state={member} // full profile data passed to profile page
            >
              <div className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
