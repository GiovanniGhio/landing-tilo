import { motion } from 'framer-motion'

export default function Button({ children, variant = 'primary', className = '', href, onClick, ...props }) {
  const base = 'relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-medium text-sm tracking-wide transition-all duration-300 cursor-pointer select-none overflow-hidden group'

  const variants = {
    primary: 'bg-brand-500 text-white hover:bg-brand-400 shadow-lg shadow-brand-500/20 hover:shadow-brand-400/30',
    secondary: 'bg-surface-800/80 text-surface-300 hover:text-surface-100 hover:bg-surface-700/80 border border-surface-700/50',
    ghost: 'text-surface-400 hover:text-surface-100 bg-transparent hover:bg-surface-800/50',
  }

  const content = (
    <>
      <motion.span
        className="absolute inset-0 rounded-2xl bg-black/5 opacity-0 group-hover:opacity-100"
        layoutId="button-glow"
        transition={{ duration: 0.3 }}
      />
      <span
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(20,184,166,0.08), transparent 40%)',
        }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  )

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
        {content}
      </a>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--mouse-x', `${((e.clientX - rect.left) / rect.width) * 100}%`)
        e.currentTarget.style.setProperty('--mouse-y', `${((e.clientY - rect.top) / rect.height) * 100}%`)
      }}
      {...props}
    >
      {content}
    </motion.button>
  )
}
