import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'
import Hero from './sections/Hero'
import Benefits from './sections/Benefits'
import Services from './sections/Services'
import HowItWorks from './sections/HowItWorks'
import Features from './sections/Features'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import QuienesSomos from './sections/QuienesSomos'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onFinish={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="fixed top-0 left-0 bottom-0 w-[3px] z-[60] bg-gradient-to-b from-brand-400 via-brand-500 to-brand-600 origin-top rounded-r-full shadow-lg shadow-brand-500/20"
              style={{ scaleY, transformOrigin: 'top' }}
            />

            <div className="fixed inset-0 pointer-events-none z-[55] opacity-[0.12]"
              style={{
                background: 'radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(216,93,55,0.25), transparent 60%)',
              }}
            />

            <Navbar />
            <main>
              <Hero />
              <Benefits />
              <Services />
              <HowItWorks />
              <Features />
              <Gallery />
              <Testimonials />
              <QuienesSomos />
              <CTA />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
