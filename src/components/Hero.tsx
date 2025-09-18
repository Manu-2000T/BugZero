'use client'
import { motion } from 'framer-motion'
import { HiPlay, HiShieldCheck, HiBadgeCheck, HiLightningBolt } from 'react-icons/hi'

const stats = [
  { number: '500+', label: 'Projects Tested', icon: HiBadgeCheck },
  { number: '99.9%', label: 'Bug Detection Rate', icon: HiShieldCheck },
  { number: '48hr', label: 'Average Turnaround', icon: HiLightningBolt },
  { number: '100+', label: 'Happy Clients', icon: HiBadgeCheck }
]

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div id="home" className="relative section-gradient min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-accent-primary/10 via-transparent to-transparent opacity-50" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-accent-secondary/10 via-transparent to-transparent opacity-50" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent-primary/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-accent-primary/10 border border-accent-primary/20 rounded-full px-4 py-2 mb-8"
            >
              <HiShieldCheck className="w-5 h-5 text-accent-primary mr-2" />
              <span className="text-accent-primary text-sm font-semibold">
                #1 Software Testing Company in India
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-8 heading-gradient leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We Break It Before<br />
              <span className="text-accent-primary">It Breaks You</span>
            </motion.h1>

            <motion.p 
              className="text-xl lg:text-2xl mb-12 text-gray-300 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Comprehensive software testing services that ensure your applications are 
              <span className="text-accent-primary font-semibold"> secure, reliable, and bug-free</span>. 
              Trusted by 100+ companies worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button 
                onClick={() => scrollToSection('free-audit')}
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2 hover:shadow-2xl hover:shadow-accent-primary/30"
              >
                <span>Get Free QA Audit</span>
                <HiShieldCheck className="w-5 h-5" />
              </button>
              
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <HiPlay className="w-5 h-5" />
                <span>View Services</span>
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-8 text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <HiBadgeCheck className="w-5 h-5 text-green-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <HiShieldCheck className="w-5 h-5 text-blue-400" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <HiLightningBolt className="w-5 h-5 text-yellow-400" />
                <span>24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent-primary/30 transition-colors group"
              >
                <stat.icon className="w-8 h-8 text-accent-primary mb-4 group-hover:text-accent-secondary transition-colors" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}