import { motion } from 'framer-motion'
import { MessageCircle, HeartPulse, PhoneCall, Gamepad2, Bell, ShieldCheck } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import TiltCard from '../components/TiltCard'
import ImageCard from '../components/ImageCard'

const services = [
  {
    icon: <MessageCircle size={22} />,
    title: 'Asistente por voz',
    description: 'Conversaciones naturales impulsadas por IA. Tilo escucha, responde y recuerda conversaciones anteriores para una experiencia personalizada.',
  },
  {
    icon: <HeartPulse size={22} />,
    title: 'Monitoreo de salud',
    description: 'Medición continua de temperatura, presión arterial, saturación de oxígeno y pulso. Datos analizados por IA para detectar anomalías.',
  },
  {
    icon: <Gamepad2 size={22} />,
    title: 'Juegos cognitivos',
    description: 'Ejercicios de memoria y agilidad mental conversacionales. Estimulación diaria adaptada al ritmo y capacidades de cada persona.',
  },
  {
    icon: <PhoneCall size={22} />,
    title: 'Videollamada médica',
    description: 'Conexión directa con familiares y profesionales de la salud. Videollamada integrada sin configuración compleja.',
  },
  {
    icon: <Bell size={22} />,
    title: 'Alertas automáticas',
    description: 'Notificaciones inteligentes a familiares por WhatsApp ante cualquier anomalía. Información clara y accionable, no falsas alarmas.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Detección de caídas',
    description: 'Reconocimiento de patrones anómalos, sonidos de impacto y períodos de inactividad para activar protocolos de emergencia.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="relative py-32 lg:py-40">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-400 mb-4">
              Servicios
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-surface-50 mb-6">
              Todo lo que necesitas en{' '}
              <span className="gradient-text">un solo lugar</span>
            </h2>
            <p className="text-lg text-surface-400 max-w-2xl mx-auto font-light">
              No es un botón de pánico ni una cámara de vigilancia. Es un ecosistema completo de cuidado y compañía.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map((service, i) => (
            <ScrollReveal key={i} type="fadeUp" delay={i * 0.08}>
              <TiltCard glare={false} maxTilt={5}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative p-8 rounded-2xl bg-surface-950 border border-surface-700/40 shadow-sm hover:shadow-md transition-all duration-500 h-full"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-surface-50">{service.title}</h3>
                  </div>
                  <p className="text-surface-400 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal type="fadeUp" className="mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <ImageCard
              src="/images/imagen6.png"
              alt="Tilo interactuando con el usuario"
              caption="Interacción natural por voz, sin complicaciones"
              className="h-[300px] md:h-full min-h-[280px]"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.slice(3).map((service, i) => (
                <TiltCard key={i} glare={false} maxTilt={5}>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="relative p-6 rounded-2xl bg-surface-950 border border-surface-700/40 shadow-sm hover:shadow-md transition-all duration-500 h-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-base font-semibold text-surface-50 mb-2">{service.title}</h3>
                    <p className="text-surface-400 text-sm leading-relaxed">{service.description}</p>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
