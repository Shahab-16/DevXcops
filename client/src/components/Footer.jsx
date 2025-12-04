import React from "react";
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaWhatsapp, FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#0a0a0a] text-gray-300">

      {/* FULL WIDTH CTA SECTION */}
      <div className="w-full border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
          {/* LEFT TEXT */}
          <div>
            <p className="uppercase text-sm text-gray-400 tracking-wider mb-2">Let's Talk</p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Got a project?
            </h2>

            <p className="text-gray-400 max-w-xl">
              We’re a team of creatives who build websites, apps, brands, UI/UX and digital identities
              that help businesses grow and stand out.
            </p>
          </div>

          {/* BUTTON */}
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition"
          >
            Contact Us <FaArrowRight />
          </a>
        </div>
      </div>

      {/* FULL WIDTH FOOTER MAIN SECTION */}
      <div className="w-full border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-14">

          {/* LOGO + ABOUT */}
          <div>
            <div className="flex items-center gap-2 text-white text-xl font-bold mb-4">
              <FaCode className="text-white text-lg" />
              <span>
                <span className="text-white">dev</span>
                <span className="text-blue-600">X</span>
                <span className="text-white">cops</span>
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              We help clients build modern websites, apps, branding, UI/UX and digital systems that scale.
            </p>
          </div>

          {/* OFFICE ADDRESS */}
          <div>
            <h3 className="text-white font-semibold mb-3">Office Address</h3>
            <p className="font-semibold text-gray-200">devXcops</p>
            <p className="text-gray-400">
              Your Address Line 1 <br />
              Your City, Your State – ZIP
            </p>
          </div>

          {/* WORK INQUIRIES */}
          <div>
            <h3 className="text-white font-semibold mb-3">Work inquiries</h3>
            <p className="text-gray-400">Interested in working with us?</p>
            <p className="font-semibold text-gray-200 mt-1">hello@devxcops.com</p>
            <p className="font-semibold text-gray-200">+91 9876543210</p>
          </div>

          {/* SOCIAL LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-3">Follow us on</h3>

            <div className="flex gap-4">
              <a className="border border-gray-500 p-2 rounded-full hover:border-blue-600 hover:text-blue-600 transition">
                <FaFacebookF />
              </a>
              <a className="border border-gray-500 p-2 rounded-full hover:border-blue-600 hover:text-blue-600 transition">
                <FaInstagram />
              </a>
              <a className="border border-gray-500 p-2 rounded-full hover:border-blue-600 hover:text-blue-600 transition">
                <FaLinkedinIn />
              </a>
              <a className="border border-gray-500 p-2 rounded-full hover:border-blue-600 hover:text-blue-600 transition">
                <FaPinterestP />
              </a>
            </div>

            <a href="#" className="block mt-4 text-gray-400 hover:text-white text-sm">
              Terms & condition
            </a>
          </div>

        </div>
      </div>

      {/* COPYRIGHT SECTION (FULL WIDTH) */}
      <div className="w-full py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} devXcops Digital Services. All rights reserved.
      </div>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/917325842656"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg text-2xl transition"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
};

export default Footer;
