import React from "react";
import { motion } from "framer-motion";
import aboutimg from "../assets/hero1.jpg"; // Use your own image
import before from "../assets/hero1.jpg"; // replace with before img
import after from "../assets/hero1.jpg"; // replace with after img

export default function AboutUs() {
  return (
    <div className="relative overflow-hidden bg-gray-50">

      {/* BACKGROUND CIRCLES */}
      <div className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-green-300 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-40 right-0 w-[300px] h-[300px] bg-green-600 rounded-full blur-2xl opacity-30"></div>
      <div className="absolute bottom-0 left-1/2 w-[250px] h-[250px] bg-green-400 rounded-full blur-2xl opacity-40"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">

        {/* HEADER CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-800">
            About GreenGroups
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto mt-6 text-lg">
            We design, build, and maintain landscapes that blend beauty with
            functionality — transforming outdoor spaces into natural masterpieces.
          </p>
        </motion.div>

        {/* ABOUT IMAGE & TEXT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <motion.img
            src={aboutimg}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="rounded-3xl shadow-xl object-cover"
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold text-green-800">
              Who We Are
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed text-lg">
              GreenGroups is a full-service landscaping company committed
              to creating sustainable, artistic, and functional outdoor spaces.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed text-lg">
              With a passionate team of designers, horticulturists,
              and builders, we bring innovation and craftsmanship
              together to deliver exceptional landscapes.
            </p>
          </motion.div>

        </div>

        {/* MISSION & VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-28">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 bg-white rounded-2xl shadow-lg border-l-4 border-green-700"
          >
            <h3 className="text-3xl font-bold text-green-800">Our Mission</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              To craft breathtaking environments by merging nature’s
              beauty with modern design — enriching lifestyles and
              elevating outdoor spaces with eco-friendly solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 bg-white rounded-2xl shadow-lg border-l-4 border-green-700"
          >
            <h3 className="text-3xl font-bold text-green-800">Our Vision</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              To become the leading landscaping company known for
              transformative designs, sustainable practices, and
              outstanding customer experiences.
            </p>
          </motion.div>

        </div>

        {/* HISTORY TIMELINE */}
        <div className="mt-28">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            Our Journey
          </h2>

          <div className="space-y-10">
            {[
              { year: "2014", text: "GreenGroups was founded with a passion for crafting natural landscapes." },
              { year: "2017", text: "Expanded into commercial & large-scale residential projects." },
              { year: "2020", text: "Introduced eco-friendly and water-saving landscaping solutions." },
              { year: "2024", text: "Completed 500+ transformation projects across the region." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-md"
              >
                <span className="text-4xl font-extrabold text-green-700">
                  {item.year}
                </span>
                <p className="text-gray-700 text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BEFORE & AFTER */}
        <div className="mt-28">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            Before & After Transformations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            <div className="text-center">
              <img src={before} className="rounded-xl shadow-lg" />
              <p className="mt-4 text-gray-600 font-semibold">Before</p>
            </div>
            <div className="text-center">
              <img src={after} className="rounded-xl shadow-lg" />
              <p className="mt-4 text-gray-600 font-semibold">After</p>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "500+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "20+", label: "Expert Team Members" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <h3 className="text-4xl font-extrabold text-green-800">
                {item.number}
              </h3>
              <p className="mt-2 text-gray-700 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* TEAM INTRO PLACEHOLDER */}
        <div className="mt-28 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-6">Meet Our Team</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our talented designers, engineers, landscapers, and maintenance specialists 
            bring passion and expertise to every project.  
            *(Add team cards here if you want — I can create them!)*  
          </p>
        </div>
      </div>
    </div>
  );
}
