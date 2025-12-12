import React, { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaExternalLinkAlt, FaMapMarkerAlt, FaCalendarAlt, FaCode, FaStar, FaBriefcase, FaUserTie, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import teamMembers from "../assets/TeamMembers/TeamMembers.json";

const slugify = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function ProfilePage() {
  const { workName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  
  const member =
    location.state || teamMembers.find((m) => slugify(m.name) === workName);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center">
            <FaUserTie className="w-12 h-12 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Profile Not Found</h2>
          <p className="text-gray-600 mb-8">The requested team member profile could not be located.</p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaChevronLeft /> Return to Team
          </button>
        </div>
      </div>
    );
  }

  const imgFallback = "/assets/TeamMembers/Default_Img.png";
  const imgSrc = member.img || imgFallback;

  const hasProjects = Array.isArray(member.projects) && member.projects.length > 0;
  const hasHighlights = Array.isArray(member.highlights) && member.highlights.length > 0;
  const hasTech = Array.isArray(member.techStack) && member.techStack.length > 0;
  const hasSocial = member.linkedin || member.github || member.email;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      {/* Header with Back Button */}
      <header className="bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors group"
          >
            <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Team</span>
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mb-8">
          {/* Profile Header with Gradient */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Profile Image Container */}
              <div className="relative flex-shrink-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-lg opacity-30" />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden ring-4 ring-white/30">
                    <img
                      src={imgSrc}
                      alt={member.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = imgFallback;
                      }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Online Status Indicator */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 rounded-full ring-2 ring-white" />
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-white">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold">{member.name}</h1>
                    <p className="text-lg text-gray-300 mt-2">{member.role}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 backdrop-blur-sm rounded-full text-sm">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        Active Member
                      </span>
                      {hasTech && (
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm">
                          <FaCode className="w-3 h-3" />
                          {member.techStack.length} Technologies
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => window.print()}
                      className="hidden md:inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors"
                    >
                      Print
                    </button>
                    {member.name === "MD Shahab Uddin" && (
                      <a
                        href="https://shahabportfoliowebsite.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        Portfolio
                      </a>
                    )}
                  </div>
                </div>

                {/* Social Links */}
                {hasSocial && (
                  <div className="flex items-center gap-4 mt-6">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                        title="LinkedIn"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                        title="GitHub"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-300 hover:text-white transition-colors"
                        title="Email"
                      >
                        <FaEnvelope className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6 md:p-8">
            {/* About Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{member.about}</p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Tech Stack & Details */}
              <div className="lg:col-span-1 space-y-6">
                {/* Tech Stack */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg">
                      <FaCode className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Tech Stack</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {hasTech ? (
                      member.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-2 rounded-lg text-sm font-medium ${
                            index % 5 === 0 ? "bg-purple-100 text-purple-700 border border-purple-200" :
                            index % 5 === 1 ? "bg-blue-100 text-blue-700 border border-blue-200" :
                            index % 5 === 2 ? "bg-emerald-100 text-emerald-700 border border-emerald-200" :
                            index % 5 === 3 ? "bg-amber-100 text-amber-700 border border-amber-200" :
                            "bg-rose-100 text-rose-700 border border-rose-200"
                          }`}
                        >
                          {tech}
                        </span>
                      ))
                    ) : (
                      <p className="text-gray-500 italic">No technologies listed</p>
                    )}
                  </div>
                </div>

                {/* Personal Details */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Details</h3>
                  
                  <div className="space-y-5">
                    {member.location && (
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <FaMapMarkerAlt className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p className="font-semibold text-gray-800">{member.location}</p>
                        </div>
                      </div>
                    )}

                    {member.experience && (
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <FaCalendarAlt className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Experience</p>
                          <p className="font-semibold text-gray-800">{member.experience}</p>
                        </div>
                      </div>
                    )}

                    {member.availability && (
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-emerald-100 rounded-lg">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Availability</p>
                          <p className="font-semibold text-gray-800">{member.availability}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column - Projects & Highlights */}
              <div className="lg:col-span-2 space-y-6">
                {/* Projects Section */}
                {hasProjects && (
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg">
                        <FaBriefcase className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Projects & Contributions</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {member.projects.map((project, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                        >
                          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg font-semibold">
                            {index + 1}
                          </div>
                          <p className="text-gray-700 flex-1">{project}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights Section */}
                {hasHighlights && (
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gradient-to-r from-amber-100 to-amber-200 rounded-lg">
                        <FaStar className="w-5 h-5 text-amber-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Key Highlights</h3>
                    </div>
                    
                    <ul className="space-y-3">
                      {member.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                          </div>
                          <p className="text-gray-700">{highlight}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Fallback Skills Summary */}
                {!hasProjects && !hasHighlights && hasTech && (
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Skill Summary</h3>
                    <p className="text-gray-600">
                      Expertise in {member.techStack.slice(0, 3).join(", ")} 
                      {member.techStack.length > 3 ? ` and ${member.techStack.length - 3} other technologies` : ''}. 
                      Focused on delivering high-quality solutions with modern development practices.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>Last updated recently • Click on team member cards to view their profiles</p>
        </div>
      </main>
    </div>
  );
}