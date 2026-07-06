import { motion } from 'framer-motion'
import { Heart, Shield, Brain, Users, Bell, Activity } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import ImageCard from '../components/ImageCard'

const benefits = [
  {
    icon: <Heart size={24} />,
    title: 'Acompañamiento constante',
    description: 'Tilo está siempre presente. Conversa, escucha y brinda compañía a través de interacciones naturales por voz, reduciendo la soledad y el aislamiento.',
    color: 'from-rose-500/20 to-rose-500/5',
    border: 'border-rose-500/10',
    iconColor: 'text-rose-400',
  },
  {
    icon: <Shield size={24} />,
    title: 'Detección proactiva',
    description: 'No espera a que pase algo. Tilo detecta inactividad prolongada, ruidos anormales o posibles caídas y alerta automáticamente a la familia con datos concretos.',
    color: 'from-amber-500/20 to-amber-500/5',
    border: 'border-amber-500/10',
    iconColor: 'text-amber-400',
  },
  {
    icon: <Brain size={24} />,
    title: 'Estimulación cognitiva',
    description: 'Juegos de memoria conversacionales diseñados para mantener la mente activa y retrasar el deterioro cognitivo asociado a la edad.',
    color: 'from-violet-500/20 to-violet-500/5',
    border: 'border-violet-500/10',
    iconColor: 'text-violet-400',
  },
  {
    icon: <Activity size={24} />,
    title: 'Monitoreo de salud',
    description: 'Sensores integrados de temperatura, presión, oxigenación y pulso que permiten un seguimiento preventivo sin intervención del usuario.',
    color: 'from-sky-500/20 to-sky-500/5',
    border: 'border-sky-500/10',
    iconColor: 'text-sky-400',
  },
  {
    icon: <Bell size={24} />,
    title: 'Alertas inteligentes',
    description: 'Si Tilo detecta una anomalía en signos vitales o una emergencia, avisa automáticamente con datos concretos. No una alarma genérica: información útil.',
    color: 'from-brand-500/20 to-brand-500/5',
    border: 'border-brand-500/10',
    iconColor: 'text-brand-400',
  },
  {
    icon: <Users size={24} />,
    title: 'Conexión familiar',
    description: 'Comunicación directa con la familia por WhatsApp, incluyendo videollamada médica cuando se necesite. Tranquilidad para quienes cuidan desde lejos.',
    color: 'from-blue-500/20 to-blue-500/5',
    border: 'border-blue-500/10',
    iconColor: 'text-blue-400',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-400 mb-4">
              Beneficios
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-surface-50 mb-6">
              Más que un dispositivo,{' '}
              <span className="gradient-text">un compañero</span>
            </h2>
            <p className="text-lg text-surface-400 max-w-2xl mx-auto font-light">
              Tilo combina tres dimensiones que hoy no existen juntas: acompañamiento emocional, seguridad física y prevención de salud.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.slice(0, 3).map((benefit, i) => (
            <ScrollReveal key={i} type="fadeUp" delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group relative p-8 rounded-2xl bg-gradient-to-b ${benefit.color} ${benefit.border} border hover:border-surface-600/50 transition-all duration-500`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${benefit.iconColor} bg-black/5 mb-5 group-hover:bg-black/10 transition-colors duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-surface-50 mb-3">{benefit.title}</h3>
                <p className="text-surface-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal type="fadeUp" className="mt-5 mb-5">
          <div className="grid md:grid-cols-2 gap-5">
            <ImageCard
              src="/images/imagen4.png"
              alt="Adulto mayor acompañado por Tilo"
              caption="Tilo acompaña en casa, siempre presente"
              className="h-[300px] md:h-full min-h-[280px]"
            />
            <div className="grid grid-cols-1 gap-5">
              {benefits.slice(3).map((benefit, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`group relative p-6 rounded-2xl bg-gradient-to-b ${benefit.color} ${benefit.border} border hover:border-surface-600/50 transition-all duration-500`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${benefit.iconColor} bg-black/5 mb-4 group-hover:bg-black/10 transition-colors duration-300`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-base font-semibold text-surface-50 mb-2">{benefit.title}</h3>
                  <p className="text-surface-400 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
