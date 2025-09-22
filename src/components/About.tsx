'use client'
import { motion } from 'framer-motion'
import { 
  HiAcademicCap, HiUsers, HiTrendingUp, HiShieldCheck, 
  HiLightningBolt, HiHeart, HiStar, HiBadgeCheck 
} from 'react-icons/hi'

const founders = [
  {
    name: "Manu T",
    role: "Co-Founder & CEO",
    experience: "5+ years",
    expertise: ["Performance Testing", "Test Automation", "CI/CD Integration"],
    description: "Expert in building scalable testing frameworks and performance optimization."
  },
  {
    name: "Mani",
    role: "Co-Founder & CTO",
    experience: "5+ years",
    expertise: ["Cypress", "TestNG","Selenium", "API Testing"],
    description: "Specialized in automation testing."
  }
]

const values = [
  {
    icon: HiShieldCheck,
    title: "Excellence in Delivery",
    description: "We maintain the highest standards in every testing project, ensuring zero compromise on quality.",
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-400"
  },
  {
    icon: HiHeart,
    title: "Customer Satisfaction",
    description: "Your success is our priority. We work closely with you to exceed expectations every time.",
    color: "from-red-500/20 to-red-600/20",
    iconColor: "text-red-400"
  },
  {
    icon: HiLightningBolt,
    title: "Innovation",
    description: "We constantly adopt cutting-edge testing tools and methodologies to stay ahead of the curve.",
    color: "from-yellow-500/20 to-yellow-600/20",
    iconColor: "text-yellow-400"
  },
  {
    icon: HiTrendingUp,
    title: "Transparency",
    description: "Clear communication, honest feedback, and transparent processes in all our interactions.",
    color: "from-green-500/20 to-green-600/20",
    iconColor: "text-green-400"
  }
]

const achievements = [
  { number: "500+", label: "Projects Completed", icon: HiBadgeCheck },
  { number: "100+", label: "Happy Clients", icon: HiUsers },
  { number: "99.9%", label: "Bug Detection Rate", icon: HiShieldCheck },
  { number: "10+", label: "Years Experience", icon: HiAcademicCap }
]

const industries = [
  "FinTech", "E-commerce", "Healthcare", "EdTech", "SaaS", "Gaming", "IoT", "Blockchain"
]

export default function About() {
  return (
    <section id="about" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold heading-gradient mb-6">About BugZero</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Founded by passionate QA engineers who believe every product deserves to be bug-free. 
            We are on a mission to help businesses deliver flawless software products that users love.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                BugZero was born from a simple belief: every software product deserves to be perfect. 
                Founded by Manu T and Mani, two seasoned QA engineers with a combined experience of 5+ years, 
                we have witnessed firsthand how critical bugs can destroy user trust and business reputation.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                We started BugZero to bridge the gap between rapid development cycles and quality assurance. 
                Our mission is to help businesses deliver flawless software products while maintaining 
                development velocity and meeting market demands.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center">
                  <HiStar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">ISO 27001 Certified</p>
                  <p className="text-gray-400 text-sm">Ensuring the highest security standards</p>
                </div>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 p-6 rounded-2xl border border-accent-primary/20"
              >
                <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                  <HiLightningBolt className="w-6 h-6 text-accent-primary mr-2" />
                  Our Vision
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  To be the most trusted name in software quality assurance globally, 
                  helping businesses deliver perfect software solutions that exceed user expectations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-2xl border border-purple-500/20"
              >
                <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                  <HiShieldCheck className="w-6 h-6 text-purple-400 mr-2" />
                  Our Mission
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  To provide comprehensive, innovative, and reliable testing services that ensure 
                  software quality while accelerating time-to-market for our clients.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">Meet Our Founders</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-accent-primary/30 transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-white mb-1">{founder.name}</h4>
                  <p className="text-accent-primary font-semibold">{founder.role}</p>
                  <p className="text-gray-400 text-sm">{founder.experience} in QA</p>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-center">
                  {founder.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-white font-semibold text-sm">Expertise:</p>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-accent-primary/20 text-accent-primary text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
