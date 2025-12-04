import { FaCheckCircle } from "react-icons/fa";

const features = [
  "10+ years combined team experience",
  "Modern tech stack & scalable architecture",
  "Strong UI/UX and brand identity design",
  "Clean, maintainable & optimized code",
  "On-time delivery and proper project management",
  "Dedicated support & long-term partnership",
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
        
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Knowledge Behind <span className="text-blue-600">What We Build</span>
          </h2>

          <p className="text-gray-600 mb-6">
            Our expertise is grounded in solid engineering knowledge, user-focused design and modern
            development practices. Everything we build is crafted with performance, scalability, and 
            business impact in mind.
          </p>

          <div className="grid gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex gap-3 items-center">
                <FaCheckCircle className="text-blue-600" />
                <p className="font-medium">{f}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-bold mb-4">Our Core Approach</h3>
          <p className="text-gray-700 leading-relaxed">
            We combine research-driven strategy, design excellence, and engineering precision to
            deliver products that push your business forward. Every project is handled with careful 
            planning, prototyping, testing, and refinement.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
