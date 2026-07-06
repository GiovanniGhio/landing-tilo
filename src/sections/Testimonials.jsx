import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import ImageCard from '../components/ImageCard'

const testimonials = [
  {
    quote: 'Mi mamá vive sola y siempre me preocupo. Cuando vi lo que Tilo puede hacer — acompañarla, avisarme si pasa algo, ayudarle con la memoria — sentí que por fin existe una solución real.',
    category: 'Familiar de adulto mayor',
  },
  {
    quote: 'Trabajo en una obra social y vemos todos los días las secuelas de la soledad en adultos mayores. Un proyecto que combine compañía, salud y conexión familiar era algo que esperábamos hace años.',
    category: 'Profesional de la salud',
  },
  {
    quote: 'Lo que más me gusta del proyecto es que no le pide al adulto mayor que aprenda tecnología. Simplemente habla, y Tilo entiende. Eso cambia todo. Mis viejos no merecen menos.',
    category: 'Hijo de adultos mayores',
  },
  {
    quote: 'Investigamos alternativas en el mercado y no hay nada que junte detección de caídas, monitoreo de salud y compañía por voz en un solo producto. Tilo es justo lo que hace falta en Argentina.',
    category: 'Profesional de gerontología',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonios" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-400 mb-4">
              Testimonios
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-surface-50 mb-6">
              Lo que dicen quienes conocen{' '}
              <span className="gradient-text">el proyecto</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal type="fadeLeft">
            <ImageCard
              src="/images/imagen6.png"
              alt="App de familiares Tilo"
              caption="Siempre conectado con quienes más querés"
              className="h-[350px] md:h-[400px]"
            />
          </ScrollReveal>

          <ScrollReveal type="fadeRight">
            <div className="relative">
              <div className="relative p-8 lg:p-10 rounded-2xl bg-surface-950 border border-surface-700/40 shadow-sm">
                <Quote size={28} className="text-brand-500/20 mb-4" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <blockquote className="text-lg lg:text-xl text-surface-50 font-light leading-relaxed mb-6">
                      &ldquo;{testimonials[current].quote}&rdquo;
                    </blockquote>

                    <p className="text-sm text-brand-500 font-medium">
                      {testimonials[current].category}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center justify-between mt-6 pt-5 border-t border-surface-700/30">
                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i === current ? 'bg-brand-500 w-6' : 'bg-surface-600 hover:bg-surface-500'
                        }`}
                        aria-label={`Ver testimonio ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={prev}
                      className="w-9 h-9 rounded-xl bg-surface-800 hover:bg-surface-700/50 flex items-center justify-center text-surface-400 hover:text-surface-50 transition-all duration-300"
                      aria-label="Anterior"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={next}
                      className="w-9 h-9 rounded-xl bg-surface-800 hover:bg-surface-700/50 flex items-center justify-center text-surface-400 hover:text-surface-50 transition-all duration-300"
                      aria-label="Siguiente"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
