import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const images = [
  { id: 1, src: '/images/imagen1.png', alt: 'Tilo en el hogar', size: 'md:col-span-2 md:row-span-2' },
  { id: 2, src: '/images/imagen2.png', alt: 'Interfaz de Tilo', size: '' },
  { id: 3, src: '/images/imagen3.png', alt: 'Familia conectada', size: '' },
  { id: 4, src: '/images/imagen4.png', alt: 'Adulto mayor con Tilo', size: 'md:col-span-2' },
  { id: 5, src: '/images/imagen5.png', alt: 'Monitoreo de salud', size: '' },
  { id: 6, src: '/images/imagen6.png', alt: 'App de familiares', size: '' },
  { id: 7, src: '/images/imagen7.png', alt: 'Conversación con Tilo', size: '' },
  { id: 8, src: '/images/imagen8.png', alt: 'Tilo en diferentes espacios', size: 'md:col-span-2' },
  { id: 9, src: '/images/imagen9.png', alt: 'Juegos cognitivos', size: '' },
]

function GalleryImage({ src, alt, id, className }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])

  return (
    <div ref={ref} className={`relative group overflow-hidden rounded-2xl ${className} h-full border border-surface-700/30 shadow-sm`}>
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y, scale }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-all duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <p className="text-white text-sm font-medium drop-shadow-lg">{alt}</p>
      </div>
      <div className="absolute top-3 left-3 w-7 h-7 rounded-lg bg-black/30 backdrop-blur-sm flex items-center justify-center">
        <span className="text-white/80 text-xs font-medium">{id}</span>
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-400 mb-4">
              Galería
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-surface-50 mb-6">
              Conoce a{' '}
              <span className="gradient-text">Tilo</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {images.map((image, i) => (
            <ScrollReveal key={i} type="scale" delay={i * 0.06}>
              <GalleryImage src={image.src} alt={image.alt} id={image.id} className={image.size} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
