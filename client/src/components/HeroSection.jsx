import React from "react";
import { FaCode } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import heroImage from "../assets/hero_section.png";

const HeroSection = () => {
  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Text */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            We build powerful{" "}
            <span className="text-purple-800">websites & apps</span> that grow
            your business.
          </h1>

          <p className="text-gray-700 max-w-xl text-base sm:text-lg">
            From high-performance websites to modern mobile apps, we design,
            develop and deliver digital products that stand out. Our team also
            crafts stunning UI/UX, custom logos, and complete brand identities —
            everything you need to launch with impact.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-purple-800 hover:bg-purple-600 text-white font-semibold px-5 py-3 rounded-lg shadow-lg transition"
            >
              Get Started
              <FiChevronRight className="ml-2" />
            </a>

            <a
              href="/works"
              className="inline-flex items-center justify-center border-2 border-gray-200 hover:border-blue-600 text-black font-semibold px-5 py-3 rounded-lg transition"
            >
              See Our Work
            </a>
          </div>

          {/* small features row */}
          <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-2">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md">
              <span className="font-medium text-black">Websites</span>
              <span className="text-xs">•</span>
              <span>Next.js / React</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md">
              <span className="font-medium text-black">Mobile Apps</span>
              <span className="text-xs">•</span>
              <span>Android / iOS</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md">
              <span className="font-medium text-black">Branding</span>
              <span className="text-xs">•</span>
              <span>Logo & UI/UX</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="flex items-center justify-center">

          <figure className="w-full max-w-lg">
            <img
              src={heroImage}
              alt="Hero illustration for devXcops — developer workspace and laptop mockup"
              className="w-full h-auto rounded-xl shadow-2xl transform transition duration-700 hover:scale-[1.02]"
              loading="eager"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
