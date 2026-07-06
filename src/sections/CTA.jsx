import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'

const perks = [
  'Acceso anticipado al producto',
  'Precio preferencial de lanzamiento',
  'Soporte prioritario vitalicio',
  'Sin compromiso, cancela cuando quieras',
]

export default function CTA() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-900 via-surface-800/30 to-surface-900" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl" style={{ background: 'radial-gradient(ellipse at center, rgba(216,93,55,0.1), transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: 'radial-gradient(ellipse at center, rgba(216,93,55,0.06), transparent 70%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <ScrollReveal type="fadeUp">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-400 mb-4">
            Únete ahora
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-surface-50 mb-6 leading-[1.1]">
            Sé parte del cambio.{' '}
            <span className="gradient-text">Contactanos</span>
          </h2>
          <p className="text-lg text-surface-400 max-w-xl mx-auto font-light mb-10">
            Estamos buscando las primeras familias que quieran probar Tilo antes que nadie. Cupos limitados.
          </p>
        </ScrollReveal>

        <ScrollReveal type="fadeUp" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {perks.map((perk, i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-950/80 border border-surface-700/30 text-sm text-surface-300 shadow-sm">
                <Check size={14} className="text-brand-400 shrink-0" />
                {perk}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal type="fadeUp" delay={0.2}>
          <Button variant="primary" className="text-base !px-10 !py-4 !rounded-2xl shadow-lg shadow-brand-500/20" href="https://wa.me/3777717778" target="_blank" rel="noopener noreferrer">
            Contáctanos
            <ArrowRight size={18} />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
