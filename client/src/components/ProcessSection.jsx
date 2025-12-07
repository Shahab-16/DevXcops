import React from "react";
import { FaLightbulb, FaPenNib, FaCode, FaRocket } from "react-icons/fa";

/**
 * ProcessSection - displays a 4-step visual process.
 * Tailwind-only. Copy/paste ready.
 */

const steps = [
  {
    icon: <FaLightbulb className="text-white w-6 h-6" />,
    title: "Discover",
    desc: "We research your goals, users and market to craft a clear plan.",
  },
  {
    icon: <FaPenNib className="text-white w-6 h-6" />,
    title: "Design",
    desc: "UX / UI, prototypes and brand identity to make products people love.",
  },
  {
    icon: <FaCode className="text-white w-6 h-6" />,
    title: "Build",
    desc: "Robust engineering, tests and CI/CD to ship reliable software.",
  },
  {
    icon: <FaRocket className="text-white w-6 h-6" />,
    title: "Launch & Support",
    desc: "Deploy, monitor and iterate — long-term partnership.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-gray-500 tracking-wider">Our Process</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
            How we <span className="text-purple-800">work</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            A pragmatic, transparent process that helps us deliver products that solve real problems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="flex flex-col items-start gap-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-purple-800">
                {s.icon}
              </div>

              <div>
                <h3 className="text-lg font-semibold">{`${i + 1}. ${s.title}`}</h3>
                <p className="text-gray-600 mt-2">{s.desc}</p>
              </div>

              {/* progress dots (only decorative) */}
              <div className="mt-3 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${i >= 0 ? "bg-purple-600" : "bg-gray-300"}`} />
                <span className={`w-2 h-2 rounded-full ${i >= 1 ? "bg-purple-600" : "bg-gray-300"}`} />
                <span className={`w-2 h-2 rounded-full ${i >= 2 ? "bg-purple-600" : "bg-gray-300"}`} />
                <span className={`w-2 h-2 rounded-full ${i >= 3 ? "bg-purple-600" : "bg-gray-300"}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
