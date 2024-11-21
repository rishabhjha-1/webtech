"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 21V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16M8 11h8M8 15h8M10 7h4"
          />
        </svg>
      ),
      title: "Expert Team",
      description:
        "Our team of experienced professionals ensures top-quality services tailored to your needs.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 9V7a4 4 0 00-8 0v2M21 12H3M12 19a2 2 0 100-4 2 2 0 000 4z"
          />
        </svg>
      ),
      title: "Secure and Reliable",
      description:
        "We prioritize your data's security, delivering dependable solutions you can trust.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4H9l4-4 4 4h-3v4z"
          />
        </svg>
      ),
      title: "Innovative Solutions",
      description:
        "We leverage cutting-edge technology to provide innovative and scalable solutions.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l-2 2m8-2l2 2V19"
          />
        </svg>
      ),
      title: "Affordable Pricing",
      description:
        "Our services offer the best value for your investment without compromising on quality.",
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
            Why <span className="text-blue-500">Choose Us</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Discover what sets us apart and why we&apos;re the right choice for your
            needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900">
            Ready to experience excellence?
          </h3>
          <p className="text-gray-600 mt-4">
            Let us help you achieve your goals with our tailored solutions.
          </p>
          
        </motion.div>
      </div>
    </section>
  );
}
