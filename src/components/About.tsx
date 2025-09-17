'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">About BugZero</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Founded by Manu T and Mani, BugZero is a leading software testing company
                committed to delivering excellence in quality assurance services. Our mission
                is to help businesses deliver flawless software products.
              </p>
              <p className="text-gray-600">
                With years of experience in the industry, we understand the challenges of
                modern software development and provide tailored solutions to meet your
                specific needs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
                <p className="text-gray-600">
                  To be the most trusted name in software quality assurance, helping
                  businesses deliver perfect software solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Our Values</h4>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Excellence in delivery</li>
                  <li>Customer satisfaction</li>
                  <li>Innovation</li>
                  <li>Transparency</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
