"use client";

import { motion } from "framer-motion";
import { HiBeaker, HiCode, HiLightningBolt, HiShieldCheck, HiDeviceMobile, HiGlobe } from "react-icons/hi";
import type { IconType } from "react-icons";

interface Service {
  title: string;
  description: string;
  icon: IconType;
  features: string[];
  price: string;
}

const services: Service[] = [
  {
    title: "Manual Testing",
    description: "Human-driven testing that ensures your application works exactly as users expect",
    icon: HiBeaker,
    features: ["User Experience Testing", "Exploratory Testing", "Usability Testing", "Cross-browser Testing"],
    price: "Starting ₹15,000"
  },
  {
    title: "Automation Testing",
    description: "Efficient automated test solutions for continuous integration and faster releases",
    icon: HiCode,
    features: ["Selenium WebDriver", "API Test Automation", "CI/CD Integration", "Regression Testing"],
    price: "Starting ₹50,000"
  },
  {
    title: "Performance Testing",
    description: "Optimize your application's speed, scalability and reliability under various load conditions",
    icon: HiLightningBolt,
    features: ["Load Testing", "Stress Testing", "Volume Testing", "Endurance Testing"],
    price: "Starting ₹30,000"
  },
  {
    title: "Security Testing",
    description: "Comprehensive security assessment to protect your application from vulnerabilities",
    icon: HiShieldCheck,
    features: ["Penetration Testing", "Vulnerability Assessment", "OWASP Top 10", "Security Audits"],
    price: "Starting ₹40,000"
  },
  {
    title: "Mobile Testing",
    description: "Complete mobile app testing across iOS and Android platforms for optimal user experience",
    icon: HiDeviceMobile,
    features: ["Device Compatibility", "Performance Testing", "UI/UX Testing", "Battery & Memory Testing"],
    price: "Starting ₹35,000"
  },
  {
    title: "API Testing",
    description: "Thorough API testing to ensure reliable data exchange and system integration",
    icon: HiGlobe,
    features: ["REST API Testing", "SOAP Testing", "GraphQL Testing", "Microservices Testing"],
    price: "Starting ₹25,000"
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechStart Solutions",
    image: "/api/placeholder/60/60",
    text: "BugZero helped us identify critical issues before our product launch. Their attention to detail is exceptional!"
  },
  {
    name: "Priya Sharma",
    company: "E-commerce Plus",
    image: "/api/placeholder/60/60",
    text: "The security testing revealed vulnerabilities we never knew existed. Truly professional service!"
  },
  {
    name: "Michael Chen",
    company: "FinTech Innovations",
    image: "/api/placeholder/60/60",
    text: "Their automation testing setup reduced our testing time by 80%. Incredible ROI!"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold heading-gradient mb-6">
            Comprehensive Testing Services
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            From manual testing to advanced security assessments, we provide end-to-end quality assurance 
            solutions that ensure your software exceeds industry standards and user expectations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-accent-primary/30 transition-all duration-300 hover:scale-105"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-2xl flex items-center justify-center group-hover:from-accent-primary/30 group-hover:to-accent-secondary/30 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-accent-primary group-hover:text-accent-secondary transition-colors duration-300" />
                </div>
                <div className="absolute -inset-2 bg-accent-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-gray-400">
                    <div className="w-1.5 h-1.5 bg-accent-primary rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-accent-primary font-semibold">{service.price}</span>
                <button className="bg-gradient-to-r from-accent-primary to-accent-secondary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-accent-primary/30 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">Our Testing Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Analysis", desc: "We analyze your requirements and create a comprehensive test strategy" },
              { step: "02", title: "Planning", desc: "Detailed test planning with timelines and resource allocation" },
              { step: "03", title: "Execution", desc: "Rigorous testing execution using industry-best practices" },
              { step: "04", title: "Reporting", desc: "Detailed reports with actionable insights and recommendations" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {process.step}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{process.title}</h4>
                <p className="text-gray-400">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">`{testimonial.text}`</p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}