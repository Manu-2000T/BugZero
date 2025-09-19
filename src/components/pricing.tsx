'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiCheck, HiStar } from 'react-icons/hi'

interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  buttonText: string
  color: string
}

const projectPlans: PricingPlan[] = [
  {
    name: "Starter Testing",
    price: "₹25,000",
    period: "/project",
    description: "Perfect for small applications and startups",
    features: [
      "Manual Testing (up to 20 test cases)",
      "Basic Functional Testing",
      "Test Documentation",
      "Bug Report with Screenshots",
      "Email Support",
      "2 Rounds of Testing",
      "Basic Performance Check"
    ],
    buttonText: "Get Started",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Professional",
    price: "₹75,000",
    period: "/project",
    description: "Comprehensive testing for growing businesses",
    features: [
      "Manual Testing (up to 100 test cases)",
      "Automation Testing Setup",
      "API Testing",
      "Performance Testing",
      "Security Testing (Basic)",
      "Cross-browser Testing",
      "Mobile App Testing",
      "Detailed Test Reports",
      "Priority Support",
      "3 Rounds of Testing"
    ],
    popular: true,
    buttonText: "Most Popular",
    color: "from-accent-primary to-accent-secondary"
  },
  {
    name: "Enterprise",
    price: "₹1,50,000",
    period: "/project",
    description: "Full-scale testing for large applications",
    features: [
      "Comprehensive Manual Testing",
      "Full Automation Testing Suite",
      "Advanced Performance Testing",
      "Security Penetration Testing",
      "Load Testing (up to 1000 users)",
      "API & Database Testing",
      "Mobile & Web Testing",
      "CI/CD Integration",
      "24/7 Support",
      "Unlimited Testing Rounds",
      "Test Strategy Consultation",
      "Dedicated QA Manager"
    ],
    buttonText: "Contact Us",
    color: "from-purple-500 to-purple-600"
  }
]

const monthlyPlans: PricingPlan[] = [
  {
    name: "Basic Monthly",
    price: "₹50,000",
    period: "/month",
    description: "Ongoing testing support for continuous development",
    features: [
      "40 hours of testing per month",
      "Manual & Automated Testing",
      "API Testing",
      "Bug Tracking & Reporting",
      "Email & Chat Support",
      "Monthly Test Reports",
      "2 Applications Coverage"
    ],
    buttonText: "Get Started",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Professional Monthly",
    price: "₹1,25,000",
    period: "/month",
    description: "Complete QA solution for growing teams",
    features: [
      "100 hours of testing per month",
      "Full Testing Suite",
      "Performance & Security Testing",
      "CI/CD Integration",
      "Dedicated QA Engineer",
      "Priority Support",
      "Weekly Reports",
      "5 Applications Coverage",
      "Test Automation Setup"
    ],
    popular: true,
    buttonText: "Most Popular",
    color: "from-accent-primary to-accent-secondary"
  },
  {
    name: "Enterprise Monthly",
    price: "₹2,50,000",
    period: "/month",
    description: "Full-scale QA team for large organizations",
    features: [
      "Unlimited testing hours",
      "Dedicated QA Team (3+ members)",
      "Complete Testing Suite",
      "Custom Test Framework",
      "24/7 Support",
      "Advanced Reporting & Analytics",
      "Unlimited Applications",
      "On-site Support Available",
      "Custom SLA Agreement"
    ],
    buttonText: "Contact Us",
    color: "from-purple-500 to-purple-600"
  }
]

const additionalServices = [
  { name: "Test Automation Setup", price: "₹50,000", duration: "one-time" },
  { name: "Performance Testing Only", price: "₹30,000", duration: "per application" },
  { name: "Security Testing Audit", price: "₹40,000", duration: "per application" },
  { name: "Mobile App Testing", price: "₹35,000", duration: "per app" },
  { name: "API Testing Suite", price: "₹25,000", duration: "per API set" },
  { name: "Load Testing", price: "₹45,000", duration: "per application" }
]

export default function PricingPlans() {
  const [isProjectBased, setIsProjectBased] = useState(true)

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentPlans = isProjectBased ? projectPlans : monthlyPlans

  return (
    <section id="pricing" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold heading-gradient mb-6">
            Transparent Pricing Plans
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect testing plan for your project. No hidden costs, just quality assurance.
          </p>
          <div className="inline-flex bg-white/10 rounded-full p-1 border border-white/20">
            <button 
              onClick={() => setIsProjectBased(true)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                isProjectBased 
                  ? 'bg-accent-primary text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Project Based
            </button>
            <button 
              onClick={() => setIsProjectBased(false)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                !isProjectBased 
                  ? 'bg-accent-primary text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly Plans
            </button>
          </div>
        </motion.div>

        {/* Main Pricing Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {currentPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-accent-primary shadow-xl shadow-accent-primary/20' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-accent-primary to-accent-secondary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <HiStar className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-4xl font-bold text-accent-primary">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <HiCheck className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={scrollToContact}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'btn-primary hover:shadow-lg hover:shadow-accent-primary/30'
                    : 'bg-white/10 text-white hover:bg-white/20 hover:shadow-lg'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-2">
            À La Carte Services
          </h3>
          <p className="text-gray-400 text-center mb-8">
            Need specific testing services? Choose individual components.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-accent-primary/50 transition-colors cursor-pointer"
                onClick={scrollToContact}
              >
                <h4 className="font-semibold text-white mb-2">{service.name}</h4>
                <div className="flex items-baseline space-x-2 mb-3">
                  <span className="text-xl font-bold text-accent-primary">{service.price}</span>
                  <span className="text-gray-400 text-sm">/{service.duration}</span>
                </div>
                <button className="text-accent-primary text-sm hover:text-accent-secondary transition-colors">
                  Get Quote →
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-2xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              100% Satisfaction Guarantee
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Not satisfied with our testing results? Will work with you until you are, or provide a full refund. 
              Your success is our priority.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}