import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Works", href: "/works" },
    { name: "Team", href: "/team" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
  ];

  return (
    <header className="fixed top-0 left-0 px-[8%] w-full bg-white/80 backdrop-blur shadow-sm z-50">
      <nav className="max-w-[1600px] px-4 py-4 flex items-center justify-between">
        {/* LOGO */}

        <a href="/" className="inline-flex items-center gap-1 bg-black text-white rounded-full px-3 py-1 text-lg w-max">
          <FaCode className="text-white" />
          <span className="font-bold">
            dev<span className="text-purple-800">X</span>cops
          </span>
        </a>


        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-black font-medium hover:text-purple-800 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="/contact"
            className="bg-black hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-black font-semibold py-2 hover:text-purple-800 transition"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}

            <a
              href="/contact"
              className="mt-2 bg-black text-white text-center py-2 rounded-lg font-semibold transition"
              onClick={() => setOpen(false)}
            >
              Let's Talk
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
