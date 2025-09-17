'use client'

import { useState, useEffect } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // On mount, read the user's preferred color scheme
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-800 
                hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 z-50"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <HiSun className="w-6 h-6 text-yellow-500" />
      ) : (
        <HiMoon className="w-6 h-6 text-gray-700" />
      )}
    </button>
  )
}
