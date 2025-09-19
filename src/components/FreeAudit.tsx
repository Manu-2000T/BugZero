'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiCheckCircle, HiClock, HiDocumentReport, HiShieldCheck } from 'react-icons/hi'

const auditFeatures = [
  {
    icon: HiShieldCheck,
    title: "Security Vulnerabilities",
    description: "Identify potential security risks and vulnerabilities in your application"
  },
  {
    icon: HiDocumentReport,
    title: "Detailed Report",
    description: "Comprehensive audit report with actionable recommendations"
  },
  {
    icon: HiClock,
    title: "Quick Turnaround",
    description: "Receive your audit results within 48-72 hours"
  },
  {
    icon: HiCheckCircle,
    title: "No Obligations",
    description: "Completely free audit with no strings attached"
  }
]

export default function FreeQAAudit() {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="free-audit" className="py-24 bg-gradient-to-b from-dark-100 to-dark-200">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mb-6">
            <HiShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold heading-gradient mb-6">
            Get Your Free QA Audit
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover hidden issues in your application before they impact your users. 
            Our expert QA team will provide a comprehensive audit at no cost.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">What You will Get</h3>
            <div className="space-y-6">
              {auditFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 bg-white/5 rounded-xl p-6 border border-white/10"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Why Choose Our Audit?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <HiCheckCircle className="w-4 h-4 text-green-400" />
                  <span>500+ applications audited</span>
                </li>
                <li className="flex items-center space-x-2">
                  <HiCheckCircle className="w-4 h-4 text-green-400" />
                  <span>Industry-standard testing methodologies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <HiCheckCircle className="w-4 h-4 text-green-400" />
                  <span>Expert QA engineers with 18+ years combined experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <HiCheckCircle className="w-4 h-4 text-green-400" />
                  <span>Actionable recommendations included</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready for Your Free Audit?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Get started with a comprehensive QA audit of your application. Our experts will analyze 
                your software and provide detailed recommendations to improve quality and security.
              </p>
              
              <div className="bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-xl p-6 border border-accent-primary/20 mb-8">
                <h4 className="text-lg font-semibold text-white mb-3">What We will Analyze:</h4>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                    <span>UI/UX Issues</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                    <span>Security Vulnerabilities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                    <span>Performance Issues</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                    <span>Functionality Bugs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                    <span>Browser Compatibility</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                    <span>Mobile Responsiveness</span>
                  </div>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="btn-primary w-full py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <HiShieldCheck className="w-6 h-6" />
                <span>Request Free Audit</span>
              </button>
            </div>

            {/* Process Steps */}
            <div className="text-left space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4 text-center">Simple 3-Step Process:</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="text-white font-medium">Share Your Details</p>
                    <p className="text-gray-400 text-sm">Tell us about your application and testing needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="text-white font-medium">We Analyze</p>
                    <p className="text-gray-400 text-sm">Our experts conduct a thorough audit of your application</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="text-white font-medium">Get Your Report</p>
                    <p className="text-gray-400 text-sm">Receive detailed findings and recommendations within 48-72 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <HiCheckCircle className="w-4 h-4 text-green-400" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <HiCheckCircle className="w-4 h-4 text-green-400" />
                  <span>100% Free</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}