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
  const [auditForm, setAuditForm] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    applicationtype: 'web',
    description: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setAuditForm({ ...auditForm, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setAuditForm({
        name: '',
        email: '',
        company: '',
        website: '',
        applicationtype: 'web',
        description: '',
        phone: ''
      })
    }, 2000)
  }

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

        <div className="grid lg:grid-cols-2 gap-16 items-start">
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
                  <span>Expert QA engineers with 10+ years experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <HiCheckCircle className="w-4 h-4 text-green-400" />
                  <span>Actionable recommendations included</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HiCheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Audit Request Submitted!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for your interest! Our QA experts will analyze your application 
                  and send you a comprehensive audit report within 48-72 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn-primary"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-6">Request Your Free Audit</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* (your input fields here, unchanged) */}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed
                             flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Submit Audit Request"
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
