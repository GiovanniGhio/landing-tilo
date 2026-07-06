import { Heart, Mail, MapPin, Globe, X } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import Logo from '../components/Logo'

const footerLinks = [
  {
    title: 'Producto',
    links: [
      { label: 'Beneficios', href: '#beneficios' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Cómo funciona', href: '#como-funciona' },
      { label: 'Características', href: '#caracteristicas' },
    ],
  },
  {
    title: 'Compañía',
    links: [
      { label: 'Sobre nosotros', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Prensa', href: '#' },
      { label: 'Contacto', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Términos de uso', href: '#' },
      { label: 'Privacidad', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative pt-20 lg:pt-28 pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-700/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16 pb-16 lg:pb-20">
          <div className="col-span-2 sm:col-span-2">
            <ScrollReveal type="fadeUp">
              <a href="#" className="flex items-center gap-2.5 mb-5">
                <Logo size={32} />
                <span className="text-lg font-semibold tracking-tight text-surface-50">tilo</span>
              </a>
              <p className="text-surface-400 text-sm leading-relaxed max-w-sm mb-6">
                Tilo es el compañero inteligente que cuida, acompaña y conecta a adultos mayores con sus familias.
                No es un botón de pánico ni una cámara de vigilancia. Es presencia, juego y tranquilidad.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-xl bg-surface-800 hover:bg-surface-700/50 flex items-center justify-center text-surface-400 hover:text-surface-50 transition-all duration-300" aria-label="LinkedIn">
                  <Globe size={16} />
                </a>
                <a href="#" className="w-9 h-9 rounded-xl bg-surface-800 hover:bg-surface-700/50 flex items-center justify-center text-surface-400 hover:text-surface-50 transition-all duration-300" aria-label="Twitter / X">
                  <X size={16} />
                </a>
                <a href="#" className="w-9 h-9 rounded-xl bg-surface-800 hover:bg-surface-700/50 flex items-center justify-center text-surface-400 hover:text-surface-50 transition-all duration-300" aria-label="Email">
                  <Mail size={16} />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <ScrollReveal type="fadeUp" delay={0.1}>
                <h4 className="text-sm font-semibold text-surface-50 mb-5">{group.title}</h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-surface-400 hover:text-surface-50 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-surface-700/30">
          <p className="text-surface-400 text-xs">
            &copy; {year} Tilo. Todos los derechos reservados.
          </p>
          <p className="text-surface-400 text-xs flex items-center gap-1">
            Hecho con <Heart size={10} className="text-brand-500" /> para las familias argentinas
          </p>
          <p className="text-surface-400 text-xs">
            <MapPin size={10} className="inline mr-1" />
            NEA, Argentina
          </p>
        </div>
      </div>
    </footer>
  )
}
