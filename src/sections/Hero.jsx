import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Heart, Brain } from 'lucide-react'
import Button from '../components/Button'
import SectionBackground from '../components/SectionBackground'

const titleWords = ['Tilo', 'nunca', 'se', 'va']

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 2
      const y = (clientY / window.innerHeight - 0.5) * 2
      containerRef.current.style.setProperty('--mouse-x', x)
      containerRef.current.style.setProperty('--mouse-y', y)
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="lg:hidden absolute inset-0">
        <SectionBackground src="/images/imagen11.png" alt="Tilo en el hogar" opacityMax={0.35} speed={0.15} blurAmount={3} fixed={true} overlay="light" />
      </div>
      <div className="hidden lg:block absolute inset-0">
        <SectionBackground src="/images/imagen10.png" alt="Tilo en el hogar" opacityMax={0.35} speed={0.15} blurAmount={3} fixed={true} overlay="light" />
      </div>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.15), transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(6,150,103,0.08), transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(52,211,153,0.06), transparent 50%)',
          transform: 'translate(calc(var(--mouse-x, 0) * -20px), calc(var(--mouse-y, 0) * -20px))',
          transition: 'transform 0.3s ease-out',
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-400/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>


      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-950/70 backdrop-blur-xl border border-surface-700/40 text-sm text-surface-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
          Innovación para el bienestar
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6"
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.6 + i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`inline-block mr-[0.15em] ${i === 0 ? 'gradient-text' : 'text-surface-50'}`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg sm:text-xl text-surface-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          El compañero inteligente que cuida, acompaña y conecta a tus seres queridos mayores con tu familia, estés donde estés.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" className="text-base !px-8 !py-4" href="https://wa.me/3777717778" target="_blank" rel="noopener noreferrer">
            Contáctanos
            <ArrowRight size={18} />
          </Button>
          <Button variant="secondary" className="text-base !px-8 !py-4" href="#como-funciona">
            Ver cómo funciona
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16"
        >
          {[
            { icon: <Heart size={16} />, text: 'Acompañamiento emocional' },
            { icon: <Shield size={16} />, text: 'Monitoreo inteligente' },
            { icon: <Brain size={16} />, text: 'Estimulación cognitiva' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-surface-400 text-sm">
              <span className="text-brand-400">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-surface-600/50 flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
