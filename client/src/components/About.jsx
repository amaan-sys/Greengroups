import React from "react";
import { motion } from "framer-motion";
import aboutimg from "../assets/hero1.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-24  from-gray-100 to-gray-200"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 px-6 md:px-12 items-center">

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Floating BG Card */}
          <div className="absolute -inset-4 bg-green-700/10 rounded-3xl blur-xl"></div>

          <img
            src={aboutimg}
            className="w-full h-100 relative z-10 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Text Side */}
        <div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="px-0 md:pr-10" // Added right padding for medium+ screens
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 leading-tight">
            About Us
          </h2>

          <p className="text-gray-700 mt-10 text-lg leading-relaxed">
            At <span className="font-semibold text-green-700">GreenGroups</span>,
            we believe every outdoor area has the potential to become a
            masterpiece. From designing modern landscapes to maintaining lush,
            healthy gardens, our team combines creativity, professionalism, and
            eco-conscious methods.
          </p>

          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            With years of experience in landscaping, installation, and maintenance,
            our mission is to create visually stunning, functional spaces that bring
            peace, beauty, and value to your environment.
          </p>

          <button className="mt-8 px-8 py-3 bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:bg-green-800 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
