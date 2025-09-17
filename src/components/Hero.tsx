'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative section-gradient">
      <div 
        className="absolute inset-0 bg-gradient-radial from-accent-primary/20 via-transparent to-transparent opacity-30"
        style={{ mixBlendMode: 'overlay' }}
      />
      <div className="container mx-auto px-6 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8 heading-gradient"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to BugZero
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-4xl mb-12 text-accent-primary font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We Break It Before It Breaks You
          </motion.p>
          <motion.button
            className="btn-primary text-lg md:text-xl py-4 px-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}
