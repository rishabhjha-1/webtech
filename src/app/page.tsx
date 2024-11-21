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
import { useRef } from "react";



export default function Home() {
  const servicesRef = useRef<HTMLDivElement | null>(null); 
  const scrollToServices = () => {
    console.log('dsf')
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}

      {/* <BackgroundBeamsWithCollision className='p-0 m-0'> */}
      {/* <BackgroundLines> */}
      <section className="h-screen w-full flex items-center  justify-center bg-gradient-to-r">
        <LampContainer>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold">
                Welcome to{" "}
                <span className="text-yellow-300">CohortTech</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-200">
                Crafting Modern Apps, Websites, Logos, and More for Your
                Business.
              </p>
              <Button
                className="mt-8"
                size="large"
                variant="primary"
                onClick={scrollToServices
                }
              >
                Explore Our Services
              </Button>
            </motion.div>
          </Container>
        </LampContainer>
      </section>
      {/* </BackgroundLines> */}
      {/* </BackgroundBeamsWithCollision> */}

      {/* Services Section */}
      <section  ref={servicesRef} className="py-16 bg-gray-800">
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
    description: "Building modern and responsive apps and websites tailored to your needs." 
  },
  { 
    title: "Logo Designing", 
    description: "Crafting unique and memorable logos for your brand identity." ,
    image:
'https://tse3.mm.bing.net/th?id=OIP.fFWL6w75QwbvSxxwk3cyxwHaE_&pid=Api&P=0&h=180'  },
  { 
    title: "Video Editing", 
    description: "Professional video editing to bring your ideas to life." ,
    image:"https://tse1.mm.bing.net/th?id=OIP.iEhQM4VH2L4kPyBDd7OHpgHaEK&pid=Api&P=0&h=180"
  },
  { 
    title: "Web3 Technologies", 
    description: "Innovative solutions in blockchain and decentralized tech." ,
    image:"https://tse4.mm.bing.net/th?id=OIP.pkD2XAI-i8OtAmOPWWOm9AHaE8&pid=Api&P=0&h=180"
  },
  { 
    title: "Script Writing", 
    description: "Creative scriptwriting to captivate your audience." ,
    image:"https://tse3.mm.bing.net/th?id=OIP.s27ty9CO_KG1IqxXRajtkQHaDt&pid=Api&P=0&h=180"
  },
  { 
    title: "Marketing Solutions", 
    description: "Strategic marketing to drive growth and brand visibility." ,
    image:"https://tse2.mm.bing.net/th?id=OIP.NwOQUOzNcsvZCr9zGodfIwHaE8&pid=Api&P=0&h=180"
  },
]
.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ThreeDCardDemo  title={service.title}  desc={service.description} src={service.image}/>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      {/* <section className="py-16 bg-gray-900">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Why <span className="text-yellow-300">Choose Us?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://thumbs.dreamstime.com/z/vector-illustration-isolated-white-background-why-choose-us-web-button-why-choose-us-button-120724255.jpg"
                alt="Why Choose Us"
                height={200}
                width={200}
                className="hidden md:block rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <ul className="space-y-4">
                <li>
                  Tailored solutions for all your business needs.
                </li>
                <li>
                  Dedicated support and timely delivery.
                </li>
                <li>
                  Industry experts in modern tech and design.
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </section> */}
      <BackgroundBeamsWithCollision className="hidden md:block">
        <WhyChooseUs />
      </BackgroundBeamsWithCollision>
      <BackgroundLines className="hidden md:block md:h-80">
        <OurClients />
      </BackgroundLines>
      <Testimonials />
      {/* Call to Action */}
      {/* <section className="py-16 bg-blue-600 text-center">
        <Container>
          <h2 className="text-3xl font-bold">
            Ready to Transform Your Business with <span className="text-yellow-300">WebTechSolutions</span>?
          </h2>
          <Button size="large" variant="light" className="mt-8">
            Contact Us Today!
          </Button>
        </Container>
      </section> */}
      <ContactUs />

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center">
        <p className="text-gray-400">
          &copy; 2024 CohortTech. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
