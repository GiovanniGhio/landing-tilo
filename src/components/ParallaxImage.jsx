import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxImage({ src, alt, className = '', speed = 0.3, opacity = true, overlay = true, blur = false }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100])
  const opacityT = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6])
  const blurT = useTransform(scrollYProgress, [0, 0.5, 1], [4, 0, 4])
  const imageOpacity = opacity ? opacityT : 1
  const blurValue = blur ? blurT : 0

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ y, opacity: imageOpacity, filter: blur ? `blur(${blurValue}px)` : 'none' }}
        loading="lazy"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      )}
    </div>
  )
}
