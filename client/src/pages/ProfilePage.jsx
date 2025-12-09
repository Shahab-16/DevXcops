import React from "react";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const { state: profile } = useLocation();

  if (!profile) return <h1 className="text-center mt-20">Profile Not Found</h1>;

  return (
    <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">

      {/* 2-Column Layout */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SECTION: Picture + Tech Stack */}
        <div className="opacity-0 animate-slideLeft">
          {/* Picture */}
          <img
            src={profile.img}
            alt={profile.name}
            className="w-48 h-48 rounded-full object-cover mx-auto md:mx-0 mb-6"
          />

          {/* Name/Role in mobile only */}
          <div className="block md:hidden text-center mb-6">
            <h1 className="text-3xl font-bold">{profile.name}</h1>
            <p className="text-gray-600">{profile.role}</p>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-2">
            {profile.techStack.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-purple-100 text-black text-sm rounded-full opacity-0 animate-fadeUp"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION: Name + About */}
        <div className="opacity-0 animate-slideRight">
          
          {/* Large name on desktop */}
          <div className="hidden md:block mb-6">
            <h1 className="text-4xl font-bold">{profile.name}</h1>
            <p className="text-gray-600 text-lg">{profile.role}</p>
          </div>

          {/* About */}
          <h3 className="text-xl font-semibold mb-4">About</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            {profile.about}
          </p>

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
