import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { FiMail, FiPhone, FiGlobe, FiDatabase, FiSettings } from "react-icons/fi";
import { FaRegHandshake, FaTools } from "react-icons/fa";

import img1 from "../assets/img1.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import image1 from "../assets/image1.jpg";

import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* ================= HERO SECTION (fixed z-index + spacing) ================= */}
      <section className="relative h-[720px] w-full overflow-hidden mt-18 pt-20">
        {/* Background Image (moved behind page with -z-10 so a fixed navbar stays on top) */}
        <div className="absolute inset-0 -z-10">
          <img src={img1} className="w-full h-full object-cover" alt="DevXcops office" />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/40"></div>

        {/* Content (kept above background) */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold drop-shadow-xl leading-tight">
            DevXcops
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mt-4 max-w-2xl leading-relaxed">
            We build modern websites & apps — static, dynamic, and dynamic with ongoing maintenance.
            Smart, reliable, and tailored for your growth.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="bg-purple-800 hover:bg-purple-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <FiMail className="text-xl" /> Contact Us
            </button>

            <button
              onClick={() => navigate("/services")}
              className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <FiGlobe className="text-xl" /> Our Services
            </button>
          </div>
        </div>

        {/* Curve Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none -z-10">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-[120px]">
            <path d="M0.00,49.98 C150.00,150.00 349.74,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" className="fill-white" />
          </svg>
        </div>
      </section>

      {/* ================= SERVICE CATEGORIES (renamed + descriptions) ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8 -mt-10">
        {[
          {
            icon: <FiGlobe className="text-3xl" />,
            title: "Launch — Static Sites",
            desc: "Beautiful, ultra-fast brochure websites for businesses who need a polished web presence quickly. Perfect for portfolios, landing pages and marketing sites."
          },
          {
            icon: <FiDatabase className="text-3xl" />,
            title: "Scale — Dynamic Platforms",
            desc: "Feature-rich web apps and e-commerce platforms built with performance and integrations in mind — ideal for businesses that need dynamic content and growth."
          },
          {
            icon: <FaTools className="text-3xl" />,
            title: "Sustain — Managed Growth",
            desc: "All the power of a dynamic platform plus ongoing maintenance: security, monitoring, regular improvements and priority support to keep you moving forward."
          }
        ].map((card, i) => (
          <div key={i} className="bg-white rounded-2xl p-8 shadow-md">
            <div className="w-14 h-14 rounded-lg bg-purple-50 flex items-center justify-center text-purple-800 mb-4">
              {card.icon}
            </div>
            <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </section>

      {/* ================= SLIDER (FEATURE HIGHLIGHTS) ================= */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Why Choose DevXcops</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">We focus on performance, clarity and long-term partnerships. Here are three core features we bring to every project.</p>

          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500 }}
            spaceBetween={20}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {/* Feature Slide 1 */}
            <SwiperSlide>
              <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                <div className="relative h-56">
                  <img src={img3} alt="fast-performance" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 flex items-end p-6">
                    <div>
                      <div className="flex items-center gap-3 text-white mb-2">
                        <FiSettings className="text-2xl" />
                        <h3 className="text-xl font-semibold">Reliable Maintenance</h3>
                      </div>
                      <p className="text-sm text-white/90">Continuous updates, security patches and performance tuning so your product keeps growing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Feature Slide 2 */}
            <SwiperSlide>
              <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                <div className="relative h-56">
                  <img src={img4} alt="scalable-architecture" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 flex items-end p-6">
                    <div>
                      <div className="flex items-center gap-3 text-white mb-2">
                        <FiDatabase className="text-2xl" />
                        <h3 className="text-xl font-semibold">Scalable Systems</h3>
                      </div>
                      <p className="text-sm text-white/90">Architectures designed to grow — from MVPs to enterprise-grade apps.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Feature Slide 3 */}
            <SwiperSlide>
              <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                <div className="relative h-56">
                  <img src={img5} alt="design-excellence" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 flex items-end p-6">
                    <div>
                      <div className="flex items-center gap-3 text-white mb-2">
                        <FaRegHandshake className="text-2xl" />
                        <h3 className="text-xl font-semibold">Client-First Process</h3>
                      </div>
                      <p className="text-sm text-white/90">Clear timelines, transparent pricing and proactive communication — always.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </section>

      {/* ================= BUSINESS SECTION ================= */}
      <section className="max-w-7xl mx-auto py-24 grid md:grid-cols-2 px-6 gap-16">
        {/* LEFT TEXT */}
        <div className="">
          <h3 className="uppercase text-gray-600 tracking-widest">Business</h3>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4">
            Building Your Trust — Building Your Business
          </h1>

          <img src={image1} className="mt-12 rounded-2xl w-full max-w-[520px] shadow-md" alt="team at work" />
        </div>

        {/* RIGHT ACCORDION + TESTIMONIAL */}
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold mb-8">
            Our People Make The Difference
          </h1>

          <Accordion title="Focus on Innovation">
            We explore new technologies to deliver innovative solutions — from PWAs to native-feeling mobile apps.
          </Accordion>

          <Accordion title="Personalized Service">
            Every project gets a dedicated manager and a tailored roadmap so your goals are met predictably.
          </Accordion>

          <Accordion title="Expert Delivery">
            We follow industry best-practices for code quality, testing and observability.
          </Accordion>

          <div className="mt-12 border-t pt-12">
            <p className="text-lg text-gray-800 leading-relaxed">
              "Partnering with DevXcops transformed how we engage customers online. Fast, clean delivery and the team cared about our success."
            </p>

            <div className="mt-6">
              <h4 className="font-semibold text-lg text-black">CEO & Founder</h4>
              <p className="text-gray-600 text-lg">Vitavision Medical Supplies L.L.C.</p>
            </div>

            <div className="flex gap-2 mt-5">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Accordion component
const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4 transition-all">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center text-left">
        <span className="text-lg md:text-xl font-semibold">{title}</span>
        <span className="text-2xl font-bold text-purple-800">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="pt-4 text-gray-600 text-base leading-relaxed animate-fadeIn">{children}</div>
      )}
    </div>
  );
};

export default About;
