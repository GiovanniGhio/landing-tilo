import { GraduationCap, Heart, MapPin, Lightbulb } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-900 via-surface-800/30 to-surface-900" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-400 mb-4">
              Quiénes somos
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-surface-50 mb-6">
              Hecho por estudiantes,{' '}
              <span className="gradient-text">pensado para ellos</span>
            </h2>
            <p className="text-lg text-surface-400 max-w-3xl mx-auto font-light">
              Detrás de Tilo hay un equipo de estudiantes de la Universidad Nacional del Nordeste (UNNE)
              en Corrientes Capital, impulsados por una misma motivación: ayudar a los adultos mayores.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal type="fadeLeft">
            <div className="rounded-2xl overflow-hidden border border-surface-700/30 shadow-sm">
              <img
                src="/images/fotogrupal.png"
                alt="Equipo de Tilo"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal type="fadeRight">
            <div className="space-y-6">
              <p className="text-surface-300 text-base leading-relaxed">
                Somos un grupo de estudiantes de la Universidad Nacional del Nordeste (UNNE), ubicada en
                Corrientes Capital. Nuestra formación abarca distintas disciplinas, pero compartimos un mismo
                objetivo: usar la tecnología para resolver problemas reales de nuestra comunidad.
              </p>
              <p className="text-surface-300 text-base leading-relaxed">
                Tilo nació al ver la realidad de muchos adultos mayores en nuestra región que viven solos o
                pasan largas horas sin compañía. Lejos de sus familias, con dificultades para acceder a
                herramientas digitales complejas, encontramos una oportunidad de hacer un verdadero impacto.
              </p>
              <p className="text-surface-300 text-base leading-relaxed">
                No somos una gran empresa. Somos estudiantes con ganas de cambiar las cosas. Cada línea de
                código, cada prueba, cada conversación con familias y profesionales de la salud nos confirmó
                que estábamos en el camino correcto.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: <MapPin size={20} />,
              title: 'Corrientes, Argentina',
              desc: 'Nacimos acá, pensando en las necesidades de nuestra gente.',
            },
            {
              icon: <GraduationCap size={20} />,
              title: 'Estudiantes UNNE',
              desc: 'Formación multidisciplinaria con un mismo propósito: ayudar.',
            },
            {
              icon: <Heart size={20} />,
              title: 'Compromiso real',
              desc: 'Motivados por el impacto social, no por el beneficio económico.',
            },
          ].map((item, i) => (
            <ScrollReveal key={i} type="fadeUp" delay={i * 0.08}>
              <div className="p-6 rounded-2xl bg-surface-950 border border-surface-700/40 shadow-sm text-center h-full">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500 mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-surface-50 mb-2">{item.title}</h3>
                <p className="text-xs text-surface-400 leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
