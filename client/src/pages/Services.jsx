"use client";

import { useNavigate } from "react-router-dom";
import services_img from "../assets/images/services_img.png";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Web Design",
      path: "webdesign",
      description:
        "We create stunning, modern, and responsive web designs that reflect your brand identity and engage your audience.",
      features: [
        "Responsive Web Designs",
        "SEO Optimization",
        "User-Friendly Interface",
        "Website Redesign",
        "Performance and Security",
        "Web Hosting and Maintenance",
      ],
    },
    {
      title: "Website",
      path: "website",
      description:
        "Professional, high-performance websites built with cutting-edge technologies to establish your strong online presence.",
      features: [
        "Captivating Online Platforms",
        "Seamless Functionality",
        "Custom Web Development",
        "User Experience Optimization",
        "Cross-Browser Compatibility",
        "Content Management Systems",
      ],
    },
    {
      title: "App",
      path: "app",
      description:
        "We develop powerful mobile and web applications with smooth performance, intuitive design, and excellent user experience.",
      features: [
        "Mobile App Development",
        "Web App Solutions",
        "Cross-Platform Apps",
        "Fast & Secure Performance",
        "Modern Tech Stack",
        "Scalable Architecture",
      ],
    },
    {
      title: "Graphic Design",
      path: "graphic-design",
      description:
        "Eye-catching visuals and creative designs that communicate your brand message clearly and attract your target audience.",
      features: [
        "Eye-catching Visuals",
        "Engaging Social Media Posters",
        "Branding Solutions",
        "Skilled Graphic Designers",
        "Stunning Marketing Materials",
        "Reflects Brand Identity",
      ],
    },
    {
      title: "Logo",
      path: "logo",
      description:
        "Unique and memorable logo designs that represent your brand's personality and make a lasting impression.",
      features: [
        "Custom Logo Creation",
        "Professional Branding",
        "Multiple Design Concepts",
        "High-Quality Files",
        "Fast Revisions",
        "Timeless Design",
      ],
    },
    {
      title: "UI/UX",
      path: "uiux",
      description:
        "Beautiful and intuitive user interfaces with seamless user experiences that keep your visitors engaged and converted.",
      features: [
        "User-Centered Design",
        "Wireframing & Prototyping",
        "Interactive Elements",
        "Conversion-Focused Layouts",
        "Mobile-First Approach",
        "Usability Testing",
      ],
    },
  ];

  return (
    <div className="bg-white">

      {/* 🔥 HERO SECTION LIKE ABOUT US */}
      <section
        className="mt-[18%] md:mt-[5%] relative h-[70vh] md:h-[88vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${services_img})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Center Content */}
        <div className="relative text-center text-white z-10 px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Services</h2>

          <p className="text-lg md:text-xl mb-6">
            Leave us a little info, and we'll be in touch.
          </p>

          <button onClick={() => navigate("/contact")} className="mt-4 px-8 py-3 bg-purple-700 text-white text-lg font-semibold rounded-full hover:bg-purple-900 transition">
            Contact Us
          </button>
        </div>
      </section>

      {/* 🔥 SERVICES GRID BELOW HERO */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-purple-700 mr-3 mt-1">✔</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate(`/services/${service.path}`)}
                  className="px-6 py-3 bg-black text-white rounded hover:bg-purple-700 transition"
                >
                  Explore More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
