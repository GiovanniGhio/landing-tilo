import { motion } from 'framer-motion'
import { Mic, Wifi, Smartphone, Cpu, Battery, Bluetooth, Volume2, Camera } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import TiltCard from '../components/TiltCard'
import ImageCard from '../components/ImageCard'

const features = [
  { icon: <Mic size={20} />, title: 'Micrófono de campo lejano', desc: 'Escucha y responde desde cualquier parte de la habitación' },
  { icon: <Volume2 size={20} />, title: 'Altavoz premium', desc: 'Audio nítido y claro para conversaciones y música' },
  { icon: <Smartphone size={20} />, title: 'App para familiares', desc: 'Panel de control y notificaciones en tiempo real' },
  { icon: <Cpu size={20} />, title: 'IA conversacional', desc: 'Procesamiento de lenguaje natural avanzado' },
  { icon: <Wifi size={20} />, title: 'WiFi + Bluetooth', desc: 'Conectividad inalámbrica sin complicaciones' },
  { icon: <Battery size={20} />, title: 'Respaldo de batería', desc: 'Funciona incluso durante cortes de luz' },
  { icon: <Camera size={20} />, title: 'Cámara integrada', desc: 'Videollamada sin configuración adicional' },
  { icon: <Bluetooth size={20} />, title: 'Sensores externos', desc: 'Compatibilidad con dispositivos de salud Bluetooth' },
]

const specs = [
  { label: 'Conectividad', value: 'WiFi 6 + Bluetooth 5.2' },
  { label: 'Alimentación', value: '220V con respaldo 4h' },
  { label: 'Sensores', value: 'Temp, presión, SpO2, pulso' },
  { label: 'Audio', value: 'Mic array + speaker 360°' },
  { label: 'IA', value: 'NLP + detección anomalías' },
  { label: 'Comunicación', value: 'WhatsApp + videollamada' },
]

export default function Features() {
  return (
    <section id="caracteristicas" className="relative py-32 lg:py-40">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-400 mb-4">
              Características
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-surface-50 mb-6">
              Diseñado para{' '}
              <span className="gradient-text">cuidar</span>
            </h2>
            <p className="text-lg text-surface-400 max-w-2xl mx-auto font-light">
              Cada detalle de Tilo fue pensado para que funcione sin que el adulto mayor tenga que aprender nada nuevo.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 mb-20 items-center">
          <div className="grid grid-cols-2 gap-4">
            {features.slice(0, 4).map((feature, i) => (
              <ScrollReveal key={i} type="scale" delay={i * 0.05}>
                <TiltCard glare={false} maxTilt={4}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-5 rounded-2xl bg-surface-950 border border-surface-700/40 shadow-sm hover:shadow-md transition-all duration-500 text-center h-full"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500 mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-surface-50 mb-2">{feature.title}</h4>
                    <p className="text-xs text-surface-400 leading-relaxed">{feature.desc}</p>
                  </motion.div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal type="fadeRight">
            <ImageCard
              src="/images/imagen5.png"
              alt="Monitoreo de salud con Tilo"
              caption="Sensores integrados para monitoreo preventivo continuo"
              className="h-[350px]"
            />
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20 items-center">
          <ScrollReveal type="fadeLeft" className="lg:order-2">
            <ImageCard
              src="/images/imagen7.png"
              alt="Conversación con Tilo"
              caption="Conversaciones naturales que estimulan la mente"
              className="h-[280px]"
            />
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-4 lg:order-1">
            {features.slice(4).map((feature, i) => (
              <ScrollReveal key={i} type="scale" delay={i * 0.05}>
                <TiltCard glare={false} maxTilt={4}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-5 rounded-2xl bg-surface-950 border border-surface-700/40 shadow-sm hover:shadow-md transition-all duration-500 text-center h-full"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500 mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-surface-50 mb-2">{feature.title}</h4>
                    <p className="text-xs text-surface-400 leading-relaxed">{feature.desc}</p>
                  </motion.div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal type="fadeUp">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 lg:p-10 rounded-2xl bg-surface-950 border border-surface-700/40 shadow-sm">
              <h3 className="text-xl font-semibold text-surface-50 mb-8 text-center">Especificaciones técnicas</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
                {specs.map((spec, i) => (
                  <div key={i} className="flex items-center justify-between sm:flex-col sm:items-start gap-1 py-3 border-b border-surface-700/30 sm:border-0">
                    <span className="text-xs text-surface-400 font-medium uppercase tracking-wider">{spec.label}</span>
                    <span className="text-sm text-surface-50 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
