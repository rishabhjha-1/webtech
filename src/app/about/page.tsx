"use client";
import { motion } from "framer-motion";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";

export default function About() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              About{" "}
              <span className="text-yellow-300">CohortTech</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              Your trusted partner for crafting modern, innovative solutions for
              the digital age.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-800">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Who We Are
          </h2>
          <p className="text-gray-400 text-center mt-4 max-w-3xl mx-auto">
          CohortTech is a team of passionate developers, designers, and
            strategists dedicated to building exceptional apps, websites, and
            digital experiences. Since our inception, we've focused on helping
            businesses thrive in the ever-evolving digital landscape.
          </p>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-900">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-yellow-300">Our Mission</h3>
              <p className="text-gray-300 mt-4">
                To empower businesses of all sizes by delivering innovative,
                user-centric solutions that drive growth and success.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-blue-500">Our Vision</h3>
              <p className="text-gray-300 mt-4">
                To be a global leader in crafting digital experiences that
                redefine innovation and usability.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Meet the Team */}
      {/* <section className="py-16 bg-gray-800">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Meet the <span className="text-yellow-300">Team</span>
          </h2>
          <p className="text-gray-400 text-center mt-2">
            A blend of creativity, innovation, and technical expertise.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {[
              { name: "John Doe", role: "CEO", image: "/team/john.jpg" },
              { name: "Jane Smith", role: "CTO", image: "/team/jane.jpg" },
              { name: "Emily White", role: "Lead Designer", image: "/team/emily.jpg" },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-32 h-32 mx-auto"
                />
                <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section> */}

     

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center">
        <p className="text-gray-400">
          &copy; 2024 CohortTech. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
