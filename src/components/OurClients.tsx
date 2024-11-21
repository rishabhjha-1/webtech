"use client";

import { motion } from "framer-motion";

export default function OurClients() {
  const clients = [
    "/logos/client1.png",
    "/logos/client2.png",
    "/logos/client3.png",
    "/logos/client4.png",
    "/logos/client5.png",
    "/logos/client6.png",
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-blue-500">Clients</span>
          </h2>
          <p className="mt-4 text-gray-600">
            We are proud to work with some of the world's most recognizable
            brands and organizations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {clients.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img src={'https://letzkhelo-drab.vercel.app/_next/image?url=%2Fletzkhelo-logo.png&w=128&q=75'} alt={`Client ${index + 1}`} className="h-12" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
