import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom";


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + DESCRIPTION */}
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} className="w-12 h-12 " alt="logo" />
            <h2 className="text-2xl font-bold ">GreenGroups</h2>
          </div>

          <p className="text-gray-200 mt-4 leading-relaxed">
            Eco-friendly Landscaping & Gardening services that bring your
            outdoor spaces to life.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">

            <li>  <NavLink to="/" onClick={scrollToTop}
              className="hover:text-green-300">
              Home
            </NavLink></li>
            <li>  <NavLink to="/whyus" onClick={scrollToTop}
              className="hover:text-green-300">
              Why Us
            </NavLink></li>
            <li>  <NavLink to="/about" onClick={scrollToTop}
              className="hover:text-green-300">
              About Us
            </NavLink></li>
            <li>  <NavLink to="/contact" onClick={scrollToTop}
              className="hover:text-green-300">
              Contact
            </NavLink></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-green-300">Lawn Care</li>
            <li className="hover:text-green-300">Garden Maintenance</li>
            <li className="hover:text-green-300">Landscape Design</li>
            <li className="hover:text-green-300">Tree Trimming</li>
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-white text-xl">
            <a href="#" className="p-3 bg-green-600 rounded-full hover:bg-green-500">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 bg-green-600 rounded-full hover:bg-green-500">
              <FaInstagram />
            </a>
            <a href="#" className="p-3 bg-green-600 rounded-full hover:bg-green-500">
              <FaTwitter />
            </a>
            <a href="#" className="p-3 bg-green-600 rounded-full hover:bg-green-500">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 border-t border-green-600 pt-6 text-center text-gray-300">
        © {new Date().getFullYear()} GreenGroups. All Rights Reserved.
      </div>
    </footer>
  );
}
