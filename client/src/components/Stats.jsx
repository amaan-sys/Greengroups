import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Award, Leaf } from "lucide-react"; // icons

export default function Stats() {
  const stats = [
    {
      n: "500+",
      t: "Happy Customers",
      icon: <CheckCircle className="w-10 h-10 text-green-600" />,
    },
    {
      n: "300+",
      t: "Projects Completed",
      icon: <Award className="w-10 h-10 text-green-600" />,
    },
    {
      n: "10+",
      t: "Years Experience",
      icon: <Leaf className="w-10 h-10 text-green-600" />,
    },
  ];

  return (
    <section className="py-15 pb-25  bg-white">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 leading-tight text-center mb-14">
        Our Achievements
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl border border-green-400/40
                       hover:shadow-2xl hover:scale-[1.02] transition-all 
                       p-10 backdrop-blur-lg relative overflow-hidden"
          >
            {/* Glow Background */}
            <div className="absolute inset-0  from-green-100/20 to-transparent opacity-70"></div>

            {/* Icon */}
            <div className="relative flex justify-center mb-4">{s.icon}</div>

            {/* Number */}
            <h3 className="text-5xl font-bold text-green-700 relative z-10">
              {s.n}
            </h3>

            {/* Title */}
            <p className="text-gray-600 mt-3 text-lg relative z-10">{s.t}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
