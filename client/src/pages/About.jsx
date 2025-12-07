import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

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

      {/* ================= HERO SECTION (UPDATED DESIGN) ================= */}
      <section className="relative h-[680px] w-full overflow-hidden mt-18">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={img1}
            className="w-full h-full object-cover"
            alt="about"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6">
          
          <h1 className="text-7xl font-extrabold drop-shadow-xl leading-tight">
            About Us
          </h1>

          <p className="text-gray-200 text-xl mt-4 max-w-2xl leading-relaxed">
            Leave us a little info, and we’ll be in touch — together we create impact.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-8 bg-red-500 hover:bg-red-600 px-8 py-3 rounded-full text-lg font-bold shadow-lg transition-all duration-300"
          >
            Contact Us
          </button>
        </div>

        {/* Curve Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full h-[120px]"
          >
            <path
              d="M0.00,49.98 C150.00,150.00 349.74,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>


      {/* ================= ABOUT 3 COLUMN ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-16">
        
        {/* ABOUT US */}
        <div>
          <SectionLabel>ABOUT US</SectionLabel>

          <SectionHeading>
            Discover Our Story, Discover Your Partner.
          </SectionHeading>

          <SectionText>
            Webwhites is a digital solutions company based in the IT hub of
            Kerala, Thiruvananthapuram. Our mission is to support businesses
            of all kinds by building a strong online presence.
          </SectionText>
        </div>

        {/* VISION + QUALITY */}
        <div>
          <SectionLabel>VISION</SectionLabel>
          <SectionSubhead>Leading the way to a connected world</SectionSubhead>
          <SectionText>
            Our vision is to become the most trusted web design & digital
            transformation company worldwide.
          </SectionText>

          <div className="mt-16">
            <SectionLabel>QUALITY</SectionLabel>
            <SectionSubhead>Excellence in every pixel</SectionSubhead>
            <SectionText>
              Quality is our core value. Our dedicated team ensures every
              solution exceeds expectations.
            </SectionText>
          </div>
        </div>

        {/* MISSION + SUPPORT */}
        <div>
          <SectionLabel>MISSION</SectionLabel>
          <SectionSubhead>Empowering Your Digital Journey</SectionSubhead>
          <SectionText>
            We empower businesses to establish a strong online presence
            and connect with their customers with meaningful experiences.
          </SectionText>

          <div className="mt-16">
            <SectionLabel>SUPPORT</SectionLabel>
            <SectionSubhead>Your satisfaction is our top priority</SectionSubhead>
            <SectionText>
              Our clients are the backbone of our business. Satisfaction is
              not optional — it’s our commitment.
            </SectionText>
          </div>
        </div>
      </section>

      {/* ================= SLIDER ================= */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={3}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
          >
            {[img1, img3, img4, img5].map((src, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                  <img
                    src={src}
                    className="object-cover w-full h-[550px]"
                    alt="portfolio"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= BUSINESS SECTION ================= */}
      <section className="max-w-7xl mx-auto py-24 grid md:grid-cols-2 px-6 gap-16">

        {/* LEFT TEXT */}
        <div className="">
          <h3 className="uppercase text-gray-600 tracking-widest">Business</h3>
          <h1 className="text-6xl font-bold leading-tight mt-4">
            Building Your Trust<br />Building Your Business
          </h1>

          <img src={image1} className="mt-12 rounded-2xl w-[450px]" />
        </div>

        {/* RIGHT ACCORDION + TESTIMONIAL */}
        <div>
          <h1 className="text-5xl font-semibold mb-12">
            Our People Make The Difference
          </h1>

          <Accordion title="Focus on Innovation">
            We explore new technologies to deliver innovative solutions.
          </Accordion>

          <Accordion title="Personalized Service">
            We understand each client's goals to provide tailored results.
          </Accordion>

          <Accordion title="Our Expertise">
            We bring years of digital transformation experience.
          </Accordion>

          <Accordion title="Client-Centric Approach">
            We build long-term partnerships through measurable growth.
          </Accordion>

          <div className="mt-12 border-t pt-12">
            <p className="text-xl text-gray-800 leading-relaxed">
              "Working with Webwhites was a game-changer for my business.
              They developed an e-commerce site that helped increase our
              online sales. The team was responsive and knowledgeable."
            </p>

            <div className="mt-6">
              <h4 className="font-semibold text-lg text-black">CEO & Founder</h4>
              <p className="text-gray-600 text-lg">
                Vitavision Medical Supplies L.L.C.
              </p>
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


// UI COMPONENTS
const SectionLabel = ({ children }) => (
  <h5 className="text-sm font-semibold tracking-[0.2em] text-gray-500 mb-4">
    {children}
  </h5>
);

const SectionHeading = ({ children }) => (
  <h1 className="text-5xl font-bold leading-tight mb-6">
    {children}
  </h1>
);

const SectionSubhead = ({ children }) => (
  <h3 className="text-3xl font-bold mb-3 leading-snug">
    {children}
  </h3>
);

const SectionText = ({ children }) => (
  <p className="text-gray-700 text-lg leading-relaxed">
    {children}
  </p>
);

// Accordions
const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4 transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-xl font-semibold">{title}</span>
        <span className="text-3xl font-bold text-red-500">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="pt-4 text-gray-600 text-lg leading-relaxed animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
};

export default About;
