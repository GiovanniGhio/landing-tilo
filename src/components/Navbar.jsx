import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './Button'
import Logo from './Logo'

const links = [
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Características', href: '#caracteristicas' },
  { label: 'Testimonios', href: '#testimonios' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const handleScroll = () => {
      if (mobileOpen) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileOpen])

  return (
    <>
      {/* NAVBAR PRINCIPAL */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? 'bg-surface-950/95 backdrop-blur-2xl border-b border-surface-700/50 shadow-sm'
            : 'bg-transparent'
        }`}
        style={{ maxWidth: '100vw', overflowX: 'hidden' }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '100%' }}>
          <div className="flex items-center justify-between h-[4.5rem] lg:h-20" style={{ minWidth: 0 }}>
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group shrink-0" style={{ minWidth: 0 }}>
              <Logo size={32} />
              <span className="text-lg font-semibold tracking-tight text-surface-100 whitespace-nowrap">tilo</span>
            </a>

            {/* Links desktop */}
            <div className="hidden lg:flex items-center gap-1" style={{ minWidth: 0 }}>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm text-surface-400 hover:text-surface-100 transition-colors duration-300 rounded-xl hover:bg-surface-800/50 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Botones desktop */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Button variant="primary" className="text-sm !px-5 !py-2.5 whitespace-nowrap" href="https://wa.me/3777717778" target="_blank" rel="noopener noreferrer">
                Contáctanos
              </Button>
            </div>

            {/* Botón menú móvil */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative z-[60] p-2 text-surface-400 hover:text-surface-100 transition-colors shrink-0"
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MENÚ MÓVIL */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '4.5rem', maxWidth: '100vw', overflowX: 'hidden' }}
      >
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        
        <div className="relative h-full bg-surface-950/95 backdrop-blur-xl overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col items-center justify-start pt-12 gap-6 px-6 py-12 min-h-full" style={{ maxWidth: '100%' }}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-xl text-surface-400 hover:text-surface-100 transition-colors font-light tracking-tight"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4 w-full max-w-[240px]">
              <Button variant="primary" className="w-full" href="https://wa.me/3777717778" target="_blank" rel="noopener noreferrer">
                Contáctanos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}