import { motion } from 'framer-motion'
import Button from '../../ui/Button/Button'
import './FeaturedRelease.css'

export default function FeaturedRelease({ image, title, eyebrow, description }) {
  return (
    <section className="featured-release" aria-label="Featured release">
      <motion.div
        className="featured-release-art-wrap"
        initial={{ opacity: 0, x: -36 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={image}
          alt={`${title} album cover`}
          className="featured-release-art"
        />
      </motion.div>

      <motion.div
        className="featured-release-content"
        initial={{ opacity: 0, x: 36 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="featured-release-title">{title}</h2>
        <p className="featured-release-eyebrow">{eyebrow}</p>
        <p className="featured-release-text">{description}</p>
        <Button to="/music" variant="primary" size="lg">Listen Here</Button>
      </motion.div>
    </section>
  )
}
