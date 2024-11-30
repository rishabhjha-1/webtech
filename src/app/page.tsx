"use client";
import { motion } from "framer-motion";
import Button from "@/app/components/ui/Button";
import { ThreeDCardDemo } from "@/app/components/ui/Card";
import Container from "@/app/components/ui/Container";
import { BackgroundBeamsWithCollision } from "@/app/components/ui/BackgroundCollision";
import { BackgroundLines } from "@/app/components/ui/Backgroundlines";
import { LampContainer } from "@/app/components/ui/LampEffect";
import ContactUs from "@/components/ContactUs";
import WhyChooseUs from "@/components/Choose";
import OurClients from "@/components/OurClients";
import Testimonials from "@/components/Testimonials";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const [showAllService, setShowAllService] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size on the client side
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Run on mount
    checkIsMobile();

    // Update on resize
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="h-screen w-full flex items-center justify-center bg-gradient-to-r">
        <LampContainer>
          <img src="/logo-bg.png" className="absolute md:top-2 top-12" />

          <Container>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mt-10"
            >
              <h1 className="text-4xl md:text-6xl font-bold">
                Welcome to{" "}
                <span className="text-yellow-300">CohorDigiTech</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-200">
                Crafting Modern Apps, Websites, Logos, and More for Your
                Business.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute text-center mt-44"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 md:ml-44 mt-28">
                Trusted by <span className="text-blue-400">50+ Brands</span> Worldwide
              </h2>
             
            </motion.div>
          </Container>
        </LampContainer>
        <a
          href="tel:8851840604"
          className="absolute bottom-8 z-50 cursor-pointer"
        >
          <Button>Call Us</Button>
        </a>
      </section>
      <ContactUs />

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 bg-gray-800">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Our <span className="text-blue-500">Services</span>
          </h2>
          <p className="text-gray-400 text-center mt-2">
            Explore the wide range of services we provide to elevate your
            business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "App & Web Development",
                description:
                  "Modern and responsive apps and websites tailored to your unique needs.",
                image: "/appweb.png",
              },
              {
                title: "Web3 Technologies",
                description:
                  "Innovative blockchain and decentralized technology solutions.",
                image: "web3.jpg",
              },
              {
                title: "CMS",
                description:
                  "Effortless content management solutions to empower your business.",
                image: "/cms.webp",
              },
              {
                title: "Admin Panel",
                description:
                  "Centralized dashboards for managing business operations efficiently.",
                image: "/adminpanel.png",
              },
              {
                title: "Logo Designing",
                description:
                  "Unique and memorable logos crafted for strong brand identity.",
                image: "/logodesign.png",
              },
              {
                title: "Video Editing",
                description:
                  "Professional video editing to bring your creative ideas to life.",
                image: "videoediting2.jpg",
              },
              {
                title: "Script Writing",
                description:
                  "Captivating scripts designed to engage and entertain your audience.",
                image:
                  "/script.png",
              },
              {
                title: "SEO",
                description:
                  "Strategic SEO to boost growth, visibility, and audience engagement.",
                image:
                  "/seo.png",
              },
              {
                title: "Brand Strategy",
                description:
                  "Comprehensive strategies to enhance and grow your brand identity.",
                image:
                  "/brand.png",
              },
              {
                title: "Social Media",
                description:
                  "Tailored strategies to build presence, engage, and drive business growth.",
                image:
                  "/social.png",
              },
            ]
              .slice(0, showAllService || !isMobile ? 10 : 4)
              .map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <ThreeDCardDemo
                    title={service.title}
                    desc={service.description}
                    src={service.image}
                  />
                </motion.div>
              ))}
          </div>
          <div className="flex justify-center">
            {isMobile && !showAllService && (
              <button
                className="show-more-btn bg-blue-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => setShowAllService(true)}
              >
                Show More
              </button>
            )}
          </div>
        </Container>
      </section>

      {/* Other Sections */}
      <div className="flex flex-col">
        <BackgroundBeamsWithCollision className="md:block">
          <WhyChooseUs />
        </BackgroundBeamsWithCollision>
        <BackgroundLines className="md:block md:h-80">
          <OurClients />
        </BackgroundLines>
        <Testimonials />
      </div>

      {/* Contact Us */}

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center">
        <p className="text-gray-400">
          &copy; 2024 CohorDigiTech. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
