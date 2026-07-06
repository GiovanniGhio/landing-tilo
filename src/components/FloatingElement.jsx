import { motion } from 'framer-motion'

export default function FloatingElement({ children, className = '', duration = 6, y = 20, delay = 0 }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-y, y, -y],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
