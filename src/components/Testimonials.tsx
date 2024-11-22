"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Prerna Sharma",
      role: "CEO, Founder",
      text: "The team exceeded our expectations and delivered top-quality solutions. Highly recommend!",
      image: "/images/testimonial1.jpg",
    },
    {
      name: "Ravi Rohilla",
      role: "Marketing Manager, Oxign Labs",
      text: "Their innovative approach and attention to detail were instrumental in our project's success.",
      image: "/images/testimonial2.jpg",
    },
    {
      name: "Arvind Mali",
      role: "Founder, Academic topper",
      text: "Fantastic experience working with such a talented and professional team!",
      image: "/images/testimonial3.jpg",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            What Our <span className="text-blue-500">Clients Say</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Hear from our clients about their experiences working with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
             
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&quot;{testimonial.text}&quot;</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
