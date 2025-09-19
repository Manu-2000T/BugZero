'use client'

import { useState, useEffect } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'
import { motion } from 'framer-motion'

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check if there's a saved preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      const isDark = savedTheme === 'dark'
      setDarkMode(isDark)
      document.documentElement.classList.toggle('dark', isDark)
      document.documentElement.classList.toggle('light', !isDark)
    } else {
      // Default to dark mode if no preference saved
      setDarkMode(true)
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    
    // Update DOM classes
    document.documentElement.classList.toggle('dark', newDarkMode)
    document.documentElement.classList.toggle('light', !newDarkMode)
    
    // Update body background for light mode
    if (newDarkMode) {
      document.body.style.backgroundColor = '#1E1E1E'
      document.body.style.color = 'white'
    } else {
      document.body.style.backgroundColor = '#ffffff'
      document.body.style.color = '#1f2937'
    }
    
    // Save preference
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-50 transition-all duration-300
                bg-white/10 backdrop-blur-sm border border-white/20 hover:border-accent-primary/50
                hover:shadow-xl hover:shadow-accent-primary/20 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? (
          <HiSun className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
        ) : (
          <HiMoon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
        )}
      </motion.div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-dark-200 text-white text-sm rounded-lg 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                    whitespace-nowrap border border-white/10">
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        <div className="absolute top-full right-4 w-2 h-2 bg-dark-200 border-r border-b border-white/10 
                      transform rotate-45 translate-y-[-1px]"></div>
      </div>
    </motion.button>
  )
}