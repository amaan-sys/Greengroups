import React from "react";
import {
  CheckCircle,
  Leaf,
  Award,
  Shield,
  Sparkles,
  Wrench,
  Users,
  Mountain,
  ClipboardCheck,
} from "lucide-react";

export default function WhyUs() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-50">

      {/* BACKGROUND GRADIENT CIRCLES */}
      <div className="absolute w-[600px] h-[600px] bg-green-300/30 rounded-full blur-3xl -top-20 -left-32"></div>
      <div className="absolute w-[450px] h-[450px] bg-green-500/20 rounded-full blur-2xl top-[50%] -right-20"></div>
      <div className="absolute w-[300px] h-[300px] bg-green-700/10 rounded-full blur-xl bottom-10 left-[40%]"></div>

      {/* HEADER */}
      <section className="relative text-center py-24 z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 drop-shadow-sm">
          Why <span className="text-green-600">Choose Us?</span>
        </h1>
        <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          At <span className="font-semibold text-green-700">GreenGroups</span>, we are committed  
          to delivering outdoor experiences that are beautiful, durable, and built  
          with precision. Here’s why thousands trust us with their landscapes.
        </p>
      </section>

      {/* MAIN FEATURE CARDS */}
      <section className="relative max-w-7xl mx-auto px-6 py-10 z-10">
        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD */}
          <div className="bg-white shadow-xl rounded-2xl p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all border border-gray-100">
            <div className="w-20 h-20 mx-auto flex items-center justify-center bg-green-600 text-white rounded-full shadow-lg mb-6">
              <Leaf size={40} />
            </div>
            <h3 className="text-2xl font-bold text-green-700">Eco-Friendly Work</h3>
            <p className="text-gray-600 mt-4">
              We prioritize sustainable materials and green construction methods  
              to protect the environment while beautifying your spaces.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all border border-gray-100">
            <div className="w-20 h-20 mx-auto flex items-center justify-center bg-green-600 text-white rounded-full shadow-lg mb-6">
              <Award size={40} />
            </div>
            <h3 className="text-2xl font-bold text-green-700">Certified Experts</h3>
            <p className="text-gray-600 mt-4">
              Our team consists of trained horticulturists, engineers, and  
              landscaping professionals dedicated to excellence.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all border border-gray-100">
            <div className="w-20 h-20 mx-auto flex items-center justify-center bg-green-600 text-white rounded-full shadow-lg mb-6">
              <Shield size={40} />
            </div>
            <h3 className="text-2xl font-bold text-green-700">Guaranteed Quality</h3>
            <p className="text-gray-600 mt-4">
              We offer long-lasting durability with premium materials and  
              workmanship backed by service warranties.
            </p>
          </div>

        </div>
      </section>

      {/* STATISTICS ROW */}
      <section className="relative py-20 bg-white z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 text-center px-6 gap-10">

          <div>
            <h3 className="text-4xl font-bold text-green-700">10+</h3>
            <p className="text-gray-600 mt-2">Years of Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-700">500+</h3>
            <p className="text-gray-600 mt-2">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-700">300+</h3>
            <p className="text-gray-600 mt-2">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-700">98%</h3>
            <p className="text-gray-600 mt-2">Client Satisfaction</p>
          </div>

        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="relative max-w-7xl mx-auto px-6 py-24 z-10">
        <h2 className="text-4xl font-extrabold text-center text-gray-900">
          Our <span className="text-green-600">Process</span>
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4">
          A seamless, client-friendly workflow designed to deliver outstanding  
          results with zero stress.
        </p>

        <div className="grid md:grid-cols-4 gap-12 mt-16">

          {/* STEP 1 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg">
              <ClipboardCheck size={30} />
            </div>
            <h3 className="text-xl font-bold mt-4">1. Consultation</h3>
            <p className="text-gray-600 mt-2">
              Understanding your vision, needs, and budget.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg">
              <Mountain size={30} />
            </div>
            <h3 className="text-xl font-bold mt-4">2. Design Planning</h3>
            <p className="text-gray-600 mt-2">
              Crafting modern, functional, and aesthetic landscape blueprints.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg">
              <Wrench size={30} />
            </div>
            <h3 className="text-xl font-bold mt-4">3. Execution</h3>
            <p className="text-gray-600 mt-2">
              Turning plans into reality with expert craftsmanship.
            </p>
          </div>

          {/* STEP 4 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg">
              <Users size={30} />
            </div>
            <h3 className="text-xl font-bold mt-4">4. Final Handover</h3>
            <p className="text-gray-600 mt-2">
              Ensuring satisfaction with walkthroughs and after-support.
            </p>
          </div>

        </div>
      </section>

      {/* MINI TESTIMONIAL STRIP */}
      <section className="relative bg-green-700 text-white py-16 text-center overflow-hidden">
        <div className="absolute w-[700px] h-[700px] bg-green-500/30 rounded-full blur-[150px] -top-20 right-0"></div>

        <h2 className="text-4xl font-bold mb-6">Loved By Homeowners</h2>

        <p className="text-white/90 max-w-2xl mx-auto">
          “GreenGroups transformed my backyard into an oasis. The attention to detail  
          and professionalism were unmatched.”
        </p>

        <p className="mt-4 font-semibold text-lg text-white/80">— Aditi Sharma</p>
      </section>

      {/* CTA SECTION */}
      <section className="relative bg-gray-900 text-white py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Outdoors?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Let’s build a beautiful, durable and modern outdoor space that enhances  
          your lifestyle and increases your property value.
        </p>

        <a
          href="/contact"
          className="bg-green-600 hover:bg-green-700 py-3 px-10 rounded-xl font-semibold text-lg shadow-lg transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
