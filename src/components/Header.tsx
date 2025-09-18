'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'Manual Testing', href: '#manual-testing' },
    { name: 'Automation Testing', href: '#automation-testing' },
    { name: 'Performance Testing', href: '#performance-testing' },
    { name: 'Security Testing', href: '#security-testing' },
    { name: 'API Testing', href: '#api-testing' },
    { name: 'Mobile Testing', href: '#mobile-testing' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-100/95 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">BZ</span>
            </div>
            <span className="text-2xl font-bold heading-gradient">BugZero</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-accent-primary transition-colors">Home</a>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-white hover:text-accent-primary transition-colors flex items-center space-x-1">
                <span>Services</span>
                <HiChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-dark-200 rounded-lg shadow-xl border border-white/10 py-4"
                  >
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-gray-300 hover:text-accent-primary hover:bg-white/5 transition-colors"
                      >
                        {service.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#pricing" className="text-white hover:text-accent-primary transition-colors">Pricing</a>
            <a href="#about" className="text-white hover:text-accent-primary transition-colors">About</a>
            <a href="#contact" className="text-white hover:text-accent-primary transition-colors">Contact</a>
            
            <button 
              onClick={() => scrollToSection('free-audit')}
              className="btn-primary"
            >
              Free QA Audit
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-dark-200 rounded-lg mt-4 py-4"
            >
              <div className="space-y-4 px-4">
                <a href="#home" onClick={() => setIsOpen(false)} className="block text-white hover:text-accent-primary">Home</a>
                <div className="space-y-2">
                  <span className="block text-accent-primary font-semibold">Services</span>
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-300 hover:text-accent-primary ml-4"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
                <a href="#pricing" onClick={() => setIsOpen(false)} className="block text-white hover:text-accent-primary">Pricing</a>
                <a href="#about" onClick={() => setIsOpen(false)} className="block text-white hover:text-accent-primary">About</a>
                <a href="#contact" onClick={() => setIsOpen(false)} className="block text-white hover:text-accent-primary">Contact</a>
                <button 
                  onClick={() => {
                    scrollToSection('free-audit')
                    setIsOpen(false)
                  }}
                  className="btn-primary w-full"
                >
                  Free QA Audit
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}