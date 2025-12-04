import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Founder, PixelMart",
    quote:
      "devXcops built our ecommerce website and the performance is unbelievable. Clean design, fast development and seamless support!",
  },
  {
    name: "Priya Verma",
    role: "CEO, EduLift",
    quote:
      "Our mobile app was delivered ahead of schedule with amazing UI/UX. We loved the communication and work quality.",
  },
  {
    name: "Rahul Mehta",
    role: "Marketing Head, FinGrow",
    quote:
      "They redesigned our entire brand identity and website. Conversions improved drastically. Highly recommended!",
  },
  {
    name: "Sana Khan",
    role: "Product Manager, HealthPlus",
    quote:
      "The devXcops team understands tech and business both. They built a scalable app with clean architecture and flawless execution.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-20 bg-[#f8f9ff] text-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-gray-500 tracking-wider">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
            What our <span className="text-blue-600">clients say</span>
          </h2>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-3">
              <div className="bg-white rounded-xl shadow-md p-8 border">
                
                {/* Quote Icon */}
                <div className="text-blue-600 text-3xl mb-4">
                  <FaQuoteLeft />
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t.quote}
                </p>

                {/* Name + Role */}
                <div>
                  <h4 className="text-lg font-bold">{t.name}</h4>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
