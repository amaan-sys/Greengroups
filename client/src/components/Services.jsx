import React from "react";
import { motion } from "framer-motion";
import solutionImg from "../assets/hero1.jpg";
import installationImg from "../assets/hero1.jpg";
import supportImg from "../assets/hero1.jpg";

export default function Services() {
  const services = [
    {
      title: "SOLUTIONS",
      image: solutionImg,
      description:
        "We provide complete landscaping solutions—from concept planning to final execution—ensuring your outdoor space becomes functional, aesthetic, and eco-friendly.",
    },
    {
      title: "INSTALLATION",
      image: installationImg,
      description:
        "Our team specializes in installing plants, lighting, irrigation systems, and hardscapes with precision, ensuring long-lasting quality and perfect finishing.",
    },
    {
      title: "SUPPORT",
      image: supportImg,
      description:
        "We offer continuous maintenance and support, keeping your garden healthy with regular care, seasonal services, and expert guidance whenever needed.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 leading-tight text-center pb-2">
        Our Services
      </h2>
      <p className="text-center text-gray-600 mt-2 mb-12 text-lg">
        We offer premium outdoor solutions
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
