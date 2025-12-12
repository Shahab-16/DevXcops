import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const services = [
  { title: "Website", path: "website" },
  { title: "App", path: "app" },
  { title: "Graphic Design", path: "graphic-design" },
  { title: "Logo", path: "logo" },
  { title: "UI/UX", path: "uiux" }
];

const Contact = () => {
  const [selectedService, setSelectedService] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const phoneNumber = "7325842656"; // Your WhatsApp number

  // SEND MESSAGE TO WHATSAPP
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const text = `New Contact Inquiry:\n
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Service: ${selectedService}
Message: ${form.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  // REQUEST A CALL
  const handleRequestCall = () => {
    const text = `Call Request:\n
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Service: ${selectedService}
Message: ${form.message}\n
The client wants to receive a call.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO SECTION ================= */}
  <section className="flex flex-col text-white bg-black mt-[18%] md:mt-[5%] relative h-[80vh] md:h-[79vh] bg-center  items-center justify-center">

  <h1 className=" justify-center text-6xl items-center ml-[15%] md:text-5xl mr-[13%] font-bold mb-4 gap-3  ">
    Let's Build Something{" "}
    <span className="text-purple-600">Amazing Together</span>
  </h1>

  <p className="flex flex-col justify-center ml-2 mr-2 md:text-lg mb-6 text-gray-300 max-w-2xl mx-auto">
    Whether you need a website, mobile app, logo, UI/UX or complete
    branding — we create high-performance digital experiences built
    for results.
  </p>

  <a href="#contact" className="bg-purple-600 hover:bg-purple-700 px-6  md:px-6 py-3 text-white font-semibold rounded-full transition-all">
    Contact Us
  </a >

<div className="hidden md:block absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
  <svg
    viewBox="0 0 500 150"
    preserveAspectRatio="none"
    className="w-full h-[120px]"
  >
    <path
      d="M0.00,49.98 C150.00,150.00 349.74,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
      fill="white"
    />
  </svg>
</div>


</section>


      {/* ================= MAIN CONTACT SECTION ================= */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* ========== LEFT: SERVICES LIST ========== */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">
            Select a <span className="text-purple-600">service</span>
          </h2>

          <p className="text-gray-600 mb-6">
            Choose the service you're interested in. This helps us understand
            your needs quickly and accurately.
          </p>

          <div className="grid gap-4">
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => setSelectedService(s.title)}
                className={`flex items-center justify-between p-4 rounded-lg border shadow-sm text-left transition
                ${selectedService === s.title
                    ? "border-purple-600 bg-purple-50"
                    : "border-gray-300 hover:border-purple-400"
                  }`}
              >
                <span className="font-semibold text-black">{s.title}</span>
                {selectedService === s.title && (
                  <FaCheckCircle className="text-purple-600 text-xl" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ========== RIGHT: CONTACT FORM ========== */}
        <form
          onSubmit={handleWhatsAppSubmit}
          className="p-8 rounded-2xl shadow-xl bg-white border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-black mb-6">
            Tell us about your <span className="text-purple-600">project</span>
          </h3>

          {/* Name */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 
              focus:ring-purple-600 focus:border-purple-600 outline-none"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 
              focus:ring-purple-600 focus:border-purple-600 outline-none"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
              focus:ring-2 focus:ring-purple-600 focus:border-purple-600 outline-none"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          {/* Selected service (read-only) */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Selected Service</label>
            <input
              type="text"
              readOnly
              value={selectedService || "No service selected"}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border text-gray-700 cursor-not-allowed"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              required
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 
              focus:ring-purple-600 focus:border-purple-600 outline-none"
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="flex flex-col gap-4">

            {/* Send via WhatsApp */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold 
              py-3 rounded-lg transition"
            >
              Send via WhatsApp
            </button>

            {/* Request a Call */}
            <button
              type="button"
              onClick={handleRequestCall}
              className="w-full bg-purple-600 hover:bg-purple-800 text-white font-semibold 
              py-3 rounded-lg transition"
            >
              Request a Call
            </button>

          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
