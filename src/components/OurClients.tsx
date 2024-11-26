"use client";

import { motion } from "framer-motion";

export default function OurClients() {
  const clients = [
    "https://i.pinimg.com/736x/f3/6d/23/f36d23a2701b38fe7440a3a12c3f4729.jpg",
    "https://letzkhelo-drab.vercel.app/_next/image?url=%2Fletzkhelo-logo.png&w=128&q=75",
    "https://www.nexgenbattles.com/logo1.png",
    "https://media.licdn.com/dms/image/v2/D4D0BAQFWY_aj0EvncA/company-logo_200_200/company-logo_200_200/0/1682073430277?e=1740009600&v=beta&t=0XMq-UXnianzOfzc8W9KHcrIosFytUbduD677otigEA",
    "https://www.academictopper.com/_next/image?url=%2Flogo.jpg&w=96&q=75",
  
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
            We are proud to work with some of the world&apos;s most recognizable
            brands and organizations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:gap-8 gap-4 flex"
        >
          {clients.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center p-4 bg-gray-500 content-evenly rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img src={logo} alt={`Client ${index + 1}`} className="h-12" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
