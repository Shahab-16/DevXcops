import React from "react";
import { FaArrowRight } from "react-icons/fa";

/**
 * CtaBanner - full-width CTA banner
 * Tailwind-only. Copy/paste ready.
 *
 * Usage: <CtaBanner />
 */

const CtaBanner = () => {
  return (
    <section className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Ready to build something great?
          </h3>
          <p className="text-blue-100 mt-2 max-w-xl">
            Let’s discuss your project and craft a plan to ship a product that delights users and meets your business goals.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-5 py-3 rounded-lg font-semibold shadow hover:translate-y-[-2px] transition-transform"
          >
            Start a Project
            <FaArrowRight className="ml-3" />
          </a>

          <a
            href="/works"
            className="text-white/90 hover:text-white font-medium"
          >
            View case studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
