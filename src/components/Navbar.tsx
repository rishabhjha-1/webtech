"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Whatapp Us",  href:"https://wa.me/8851840604" },

   
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-500">
          <img src="/logo-bg.png" height={150} width={180}/>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="hover:text-blue-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="focus:outline-none"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? 45 : 0 }}
                className="w-6 h-6 relative"
              >
                <span
                  className={`block h-1 w-full bg-white transform transition-transform ${
                    isOpen ? "rotate-45 absolute" : "translate-y-0"
                  }`}
                ></span>
                <span
                  className={`block h-1 w-full bg-white my-1 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block h-1 w-full bg-white transform transition-transform ${
                    isOpen ? "-rotate-45 absolute" : "translate-y-0"
                  }`}
                ></span>
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-gray-800"
        >
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block text-center py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white rounded"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
