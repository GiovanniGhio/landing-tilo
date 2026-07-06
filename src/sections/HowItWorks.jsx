import { motion } from 'framer-motion'
import { Package, Settings, UserCheck, Bell } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import ImageCard from '../components/ImageCard'

const steps = [
  {
    step: '01',
    icon: <Package size={22} />,
    title: 'Recibís Tilo',
    description: 'Lo sacás de la caja, lo conectás a la corriente y al WiFi. En menos de 5 minutos ya está listo. No requiere instalación ni configuración técnica.',
    color: 'from-brand-500/20 to-brand-500/5',
  },
  {
    step: '02',
    icon: <UserCheck size={22} />,
    title: 'Tilo conoce a tu familiar',
    description: 'Aprende su nombre, rutinas, horarios y preferencias. Cada interacción lo hace más personal y efectivo en el acompañamiento diario.',
    color: 'from-sky-500/20 to-sky-500/5',
  },
  {
    step: '03',
    icon: <Settings size={22} />,
    title: 'Empieza a cuidar',
    description: 'Monitorea actividad, conversa, juega y detecta anomalías en tiempo real. Todo de forma automática, sin que el adulto mayor tenga que hacer nada.',
    color: 'from-violet-500/20 to-violet-500/5',
  },
  {
    step: '04',
    icon: <Bell size={22} />,
    title: 'Tranquilidad para vos',
    description: 'Recibís actualizaciones y alertas por WhatsApp. Sabés que todo está bien sin interrumpir su independencia. Y si algo pasa, Tilo te avisa al instante.',
    color: 'from-amber-500/20 to-amber-500/5',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-400 mb-4">
              Cómo funciona
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-surface-50 mb-6">
              Listo en minutos.{' '}
              <span className="gradient-text">Simple.</span>
            </h2>
            <p className="text-lg text-surface-400 max-w-2xl mx-auto font-light">
              Sin configuraciones complicadas. Sin manuales extensos. Tilo está diseñado para que cualquier persona pueda usarlo desde el primer día.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <ScrollReveal type="fadeLeft">
            <ImageCard
              src="/images/imagen9.png"
              alt="Familia conectada con Tilo"
              caption="Tilo conecta a tu familia sin importar la distancia"
              className="h-[350px] md:h-[420px]"
            />
          </ScrollReveal>
          <div className="space-y-8">
            {steps.slice(0, 2).map((step, i) => (
              <ScrollReveal key={i} type="fadeRight" delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-surface-950 border border-surface-700/40 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/10 to-brand-500/5 border border-brand-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold gradient-text">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-brand-500`}>
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-surface-50">{step.title}</h3>
                    </div>
                    <p className="text-surface-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8 lg:order-1">
            {steps.slice(2).map((step, i) => (
              <ScrollReveal key={i} type="fadeLeft" delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-surface-950 border border-surface-700/40 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/10 to-brand-500/5 border border-brand-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold gradient-text">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-brand-500`}>
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-surface-50">{step.title}</h3>
                    </div>
                    <p className="text-surface-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal type="fadeRight" className="lg:order-2">
            <ImageCard
              src="/images/imagen3.png"
              alt="Tilo en diferentes espacios del hogar"
              caption="Tilo se adapta a cualquier rincón de la casa"
              className="h-[350px] md:h-[420px]"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
