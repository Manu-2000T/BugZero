"use client";

import { motion } from "framer-motion";
import { HiBeaker, HiCode, HiLightningBolt, HiShieldCheck } from "react-icons/hi";
import type { IconType } from "react-icons";

interface Service {
  title: string;
  description: string;
  icon: IconType;
}

const services: Service[] = [
  {
    title: "Manual Testing",
    description:
      "In-depth human-driven testing for intuitive user experience and functionality",
    icon: HiBeaker,
  },
  {
    title: "Automation Testing",
    description:
      "Efficient automated test solutions for continuous integration",
    icon: HiCode,
  },
  {
    title: "Performance Testing",
    description: "Optimize your application's speed and scalability",
    icon: HiLightningBolt,
  },
  {
    title: "Security Testing",
    description: "Protect your application from vulnerabilities",
    icon: HiShieldCheck,
  },
];

export default function Services() {
  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold heading-gradient mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive software testing solutions to ensure your
            applications meet the highest quality standards.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group bg-white/5 rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="mb-6 relative flex items-center justify-center">
                <service.icon className="w-14 h-14 text-accent-primary group-hover:text-accent-secondary transition-colors duration-300" />
                <div className="absolute -inset-2 bg-accent-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-accent-primary">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
