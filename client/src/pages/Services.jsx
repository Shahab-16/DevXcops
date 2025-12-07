import React from 'react';
import { useNavigate } from 'react-router-dom'; // ← Only this import added

const Services = () => {
  const navigate = useNavigate(); // ← This lets us navigate

  const services = [
    {
      title: "Web Design",
      path: "webdesign", // ← will go to /services/webdesign
      description: "We create stunning, modern, and responsive web designs that reflect your brand identity and engage your audience.",
      features: [
        "Responsive Web Designs",
        "SEO Optimization",
        "User-Friendly Interface",
        "Website Redesign",
        "Performance and Security",
        "Web Hosting and Maintenance"
      ]
    },
    {
      title: "Website",
      path: "website",
      description: "Professional, high-performance websites built with cutting-edge technologies to establish your strong online presence.",
      features: [
        "Captivating Online Platforms",
        "Seamless Functionality",
        "Custom Web Development",
        "User Experience Optimization",
        "Cross-Browser Compatibility",
        "Content Management Systems"
      ]
    },
    {
      title: "App",
      path: "app",
      description: "We develop powerful mobile and web applications with smooth performance, intuitive design, and excellent user experience.",
      features: [
        "Mobile App Development",
        "Web App Solutions",
        "Cross-Platform Apps",
        "Fast & Secure Performance",
        "Modern Tech Stack",
        "Scalable Architecture"
      ]
    },
    {
      title: "Graphic Design",
      path: "graphic-design",
      description: "Eye-catching visuals and creative designs that communicate your brand message clearly and attract your target audience.",
      features: [
        "Eye-catching Visuals",
        "Engaging Social Media Posters",
        "Branding Solutions",
        "Skilled Graphic Designers",
        "Stunning Marketing Materials",
        "Reflects Brand Identity"
      ]
    },
    {
      title: "Logo",
      path: "logo",
      description: "Unique and memorable logo designs that represent your brand’s personality and make a lasting impression.",
      features: [
        "Custom Logo Creation",
        "Professional Branding",
        "Multiple Design Concepts",
        "High-Quality Files",
        "Fast Revisions",
        "Timeless Design"
      ]
    },
    {
      title: "UI/UX",
      path: "uiux",
      description: "Beautiful and intuitive user interfaces with seamless user experiences that keep your visitors engaged and converted.",
      features: [
        "User-Centered Design",
        "Wireframing & Prototyping",
        "Interactive Elements",
        "Conversion-Focused Layouts",
        "Mobile-First Approach",
        "Usability Testing"
      ]
    },
    {
      title: "Logo Design",
      path: "logo-design",
      description: "Professional logo design services tailored to your business vision — clean, creative, and built to stand out.",
      features: [
        "Unique & Creative Concepts",
        "Brand Identity Development",
        "Vector & High-Res Files",
        "Multiple Format Support",
        "Quick Turnaround",
        "100% Original Designs"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-gray-600 text-lg">Leave us a little info, and we'll be in touch.</p>
          <button className="mt-6 px-8 py-3 bg-purple-800 text-white font-semibold rounded-full hover:bg-red-700 transition">
            Contact Us
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">✔</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* This button now navigates! */}
              <button
                onClick={() => navigate(`/services/${service.path}`)}
                className="w-full px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transition flex items-center justify-center gap-2"
              >
                Explore More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;