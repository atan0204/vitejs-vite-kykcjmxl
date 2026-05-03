import { motion } from 'framer-motion'
import SimpleParallax from 'simple-parallax-js'
import './HeroBanner.css'

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function HeroBanner({ image, eyebrow, title, subtitle }) {
  return (
    <section className="hero-banner" aria-label="Hero">
      <div className="hero-banner-bg">
        <SimpleParallax orientation="up" scale={1.4} delay={0.4} transition="cubic-bezier(0,0,0,1)">
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="hero-banner-image"
          />
        </SimpleParallax>
      </div>

      <div className="hero-banner-overlay" aria-hidden="true" />

      <div className="hero-banner-content">
        {eyebrow && (
          <motion.p
            className="hero-banner-eyebrow"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          className="hero-banner-title"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="hero-banner-subtitle"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0.35}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

    </section>
  )
}
