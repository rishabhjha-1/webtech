"use client";

import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";

// Define type for form data
interface FormData {
  fullName: string;
  email: string;
  message: string;
}

export default function ContactUs() {
  const [formState, setFormState] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track error state
  const [success, setSuccess] = useState<string | null>(null); // Track success message

  // Handle form input changes
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  // Handle form submission
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await axios.post("/api/contact", formState);
      console.log(res);
      setSuccess("Your message has been sent successfully!");
      setFormState({ fullName: "", email: "", message: "" }); // Reset form on success
    } catch (error: any) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">
            Get in <span className="text-blue-500">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            We&apos;d love to hear from you! Send us a message, and we&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form className="bg-gray-800 p-8 rounded-lg shadow-lg" onSubmit={onSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="fullName"
                  className="w-full mt-2 px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  value={formState.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-2 px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full mt-2 px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows={5}
                  placeholder="Write your message"
                  value={formState.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Error and Success Message */}
              {error && <p className="text-red-500 mt-2">{error}</p>}
              {success && <p className="text-green-500 mt-2">{success}</p>}

              <button
                type="submit"
                disabled={isLoading} // Disable the button while loading
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-300"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h11M9 21V3M17 16l4-4m0 0l-4-4m4 4H9"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Email Us</h4>
                  <p className="text-gray-400">cohortdigitech@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h11M9 21V3M17 16l4-4m0 0l-4-4m4 4H9"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Call Us</h4>
                  <p className="text-gray-400">+918851840604</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h11M9 21V3M17 16l4-4m0 0l-4-4m4 4H9"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Our Address</h4>
                  <p className="text-gray-400">
                    108, JMD Megapolis, Sohna Road, Gurgaon, Haryana, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
