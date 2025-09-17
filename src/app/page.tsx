import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import DarkModeToggle from '@/components/DarkModeToggle'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <DarkModeToggle />
    </main>
  )
}
