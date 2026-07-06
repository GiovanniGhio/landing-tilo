import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function SectionBackground({ src, alt, className = '', speed = 0.2, blurAmount = 4, opacityMax = 0.15, fixed = true, overlay = 'dark' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const y = useTransform(scrollYProgress, [0, 1], fixed ? [speed * -150, speed * 150] : [0, 0])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, opacityMax, opacityMax, 0])
  const blur = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [blurAmount, 0, 0, blurAmount])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.15])

  const overlayEl = overlay === 'dark' ? (
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
  ) : overlay === 'light' ? (
    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-white/20" />
  ) : null

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ opacity: imageOpacity, filter: blur ? `blur(${blur}px)` : 'none' }}
          loading="lazy"
        />
      </motion.div>
      {overlayEl}
    </div>
  )
}
