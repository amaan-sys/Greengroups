import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Comments() {
  const comments = [
    {
      name: "Rahul Singh",
      text: "GreenGroups completely transformed my garden! Professional, friendly and reliable team. My outdoor space looks stunning now.",
      avatar: "https://i.pravatar.cc/100?img=1",
      rating: 5,
    },
    {
      name: "Aditi Verma",
      text: "Amazing service and quick work! They made the entire garden feel fresh, modern, and beautifully organized.",
      avatar: "https://i.pravatar.cc/100?img=5",
      rating: 5,
    },
    {
      name: "John Matthew",
      text: "Great experience! My lawn looks better than ever. Highly satisfied with their work quality and dedication.",
      avatar: "https://i.pravatar.cc/100?img=8",
      rating: 4,
    },
  ];

  return (
    <section className="py-15 pb-30 bg-gray-100">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 leading-tight text-center mb-12">
        What Our Clients Say
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {comments.map((comment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-8 text-center border border-gray-300 hover:shadow-2xl hover:bg-white transition-all"
          >
            {/* Avatar */}
            <img
              src={comment.avatar}
              alt={comment.name}
              className="w-20 h-20 mx-auto rounded-full shadow-md object-cover"
            />

            {/* Stars */}
            <div className="flex justify-center mt-3">
              {Array.from({ length: comment.rating }).map((_, idx) => (
                <Star
                  key={idx}
                  className="text-yellow-500 w-6 h-6 fill-yellow-500"
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-700 mt-5 text-lg leading-relaxed italic">
              “{comment.text}”
            </p>

            {/* Name */}
            <h4 className="text-green-700 text-xl font-semibold mt-4">
              — {comment.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
