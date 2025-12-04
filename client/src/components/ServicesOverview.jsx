import { FaLaptopCode, FaMobileAlt, FaPalette, FaBullhorn } from "react-icons/fa";

const items = [
  { icon: <FaLaptopCode />, title: "Website Development", desc: "Fast, modern and responsive websites." },
  { icon: <FaMobileAlt />, title: "App Development", desc: "Android + iOS — smooth and scalable apps." },
  { icon: <FaPalette />, title: "UI/UX & Branding", desc: "Logos, UI/UX and complete visual identity." },
  { icon: <FaBullhorn />, title: "Digital Solutions", desc: "Custom tools and systems for your business." },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-black">What We Offer</h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white border rounded-xl shadow-sm hover:shadow-lg transition text-center"
            >
              <div className="text-blue-600 text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
