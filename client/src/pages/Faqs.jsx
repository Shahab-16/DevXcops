import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const faqData = [
  {
    q: "Why is professional web design important for my business?",
    a: "Professional web design builds trust, improves user experience, and helps convert visitors into customers. It reflects your company's credibility and values.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A typical website project takes anywhere from 2–6 weeks depending on design complexity and number of pages.",
  },
  {
    q: "Do you provide maintenance services?",
    a: "Yes, we offer dedicated maintenance packages including updates, backups, and security improvements.",
  },
  {
    q: "Will my website be mobile responsive?",
    a: "Absolutely. Every project is designed to be fully responsive across all screen sizes and devices.",
  },
  {
    q: "Do you offer custom web development?",
    a: "Yes, we build tailor-made web solutions using modern frameworks and technologies.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate=useNavigate();
  const toggleFAQ = (i) => {
    if (openIndex === i) setOpenIndex(null);
    else setOpenIndex(i);
  };

  return (
    <div className="bg-gray-50">

      {/* Banner */}
      <section className="relative bg-[#121212] text-white py-24 text-center h-[66vh] mt-[69px]">
        <h1 className="text-5xl font-bold mb-4 mt-8">FAQs</h1>
        <p className="text-lg mb-6">
          Leave us a little info, and we’ll be in touch.
        </p>

        {/* Purple Button */}
        <button onClick={()=>navigate('/contact')} className=" hover:cursor-pointer  bg-purple-600 hover:bg-purple-700 px-6 py-3 text-white font-semibold rounded-full transition-all">
          Contact Us
        </button>
         <div className="hidden md:block absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full  md:h-[120px]"
          >
            <path
              d="M0.00,49.98 C150.00,150.00 349.74,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="max-w-5xl mx-auto py-14 px-6">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-4">
          Home <span className="text-gray-700">›</span> FAQs
        </p>

        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left"
                onClick={() => toggleFAQ(i)}
              >
                <span className="text-lg font-medium text-gray-800">
                  {item.q}
                </span>

                <span className="text-black text-2xl font-bold">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {openIndex === i && (
                <div className="px-5 pb-5 text-gray-700 animate-fadeIn">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default Faqs;
