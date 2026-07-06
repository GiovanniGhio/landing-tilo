import { motion } from 'framer-motion'

export default function ImageCard({ src, alt, className = '', caption, variant = 'rounded' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -2 }}
      className={`relative overflow-hidden bg-surface-950 border border-surface-700/40 shadow-sm transition-shadow duration-300 hover:shadow-md ${
        variant === 'rounded' ? 'rounded-2xl' : variant === 'full' ? 'rounded-none' : 'rounded-xl'
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-5 py-4">
          <p className="text-white text-sm font-medium">{caption}</p>
        </div>
      )}
    </motion.div>
  )
}
