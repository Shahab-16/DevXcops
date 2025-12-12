import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import teamMembers from "../assets/TeamMembers/TeamMembers.json";

const slugify = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const Avatar = ({ src, alt }) => {
  const fallback = "/assets/TeamMembers/Default_Img.png";
  return (
    <img
      src={src || fallback}
      alt={alt}
      onError={(e) => (e.currentTarget.src = fallback)}
      className="w-full h-full object-cover"
    />
  );
};

const TeamCard = ({ member }) => (
  <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100">
    <div className="relative h-70 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10" />
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        onError={(e) => {
          e.target.src = "/assets/TeamMembers/Default_Img.png";
        }}
      />
      
      <div className="absolute bottom-4 left-4 z-20">
        <h3 className="text-white font-bold text-xl drop-shadow-md">{member.name}</h3>
        <p className="text-sm text-white/90 drop-shadow">{member.role}</p>
      </div>
    </div>

    <div className="p-5">
      <p className="text-gray-700 text-sm mb-4 line-clamp-3">{member.about}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {member.techStack.slice(0, 5).map((tech, index) => (
          <span
            key={index}
            className="text-xs px-2.5 py-1 bg-gray-100 border border-gray-200 rounded-lg text-gray-700"
          >
            {tech}
          </span>
        ))}
        {member.techStack.length > 5 && (
          <span className="text-xs px-2.5 py-1 bg-gray-100 border border-gray-200 rounded-lg text-gray-500">
            +{member.techStack.length - 5} more
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 pt-2">
        <Link
          to={`/team/${slugify(member.name)}`}
          state={member}
          className="flex-1 text-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
        >
          View Profile
        </Link>

        {member.name === "MD Shahab Uddin" && (
          <a
            href="https://shahabportfoliowebsite.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-900 rounded-lg text-white transition-colors"
          >
            <FaExternalLinkAlt className="text-sm" />
          </a>
        )}
      </div>
    </div>
  </article>
);

export default function Team() {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[79vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600"
            alt="Team Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              A team of passionate developers building cutting-edge solutions with modern technologies.
            </p>
            <div className="flex justify-center">
              <a
                href="#team-members"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
              >
                Explore Team Members
              </a>
            </div>
          </div>
        </div>
         <div className="hidden md:block absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full  md:h-[120px] lg:[150px]"
          >
            <path
              d="M0.00,49.98 C150.00,150.00 349.74,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              className="fill-white"
            />
          </svg>
        </div>
      </div>

      {/* Team Grid */}
      <div id="team-members" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Development Experts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each member brings unique expertise and experience to deliver exceptional results.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Click on any profile to view detailed information about skills, projects, and experience.
          </p>
        </div>
      </div>
    </div>
  );
}