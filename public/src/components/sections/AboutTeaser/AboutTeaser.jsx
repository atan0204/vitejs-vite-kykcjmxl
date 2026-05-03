import { motion } from 'framer-motion'
import ParallaxSection from '../ParallaxSection/ParallaxSection'
import Button from '../../ui/Button/Button'
import './AboutTeaser.css'

export default function AboutTeaser({ bgImage, title, description }) {
  return (
    <ParallaxSection bgImage={bgImage} overlay="dark">
      <motion.div
        className="about-teaser"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="about-teaser-card">
          <h2 className="about-teaser-title">{title}</h2>
          <p className="about-teaser-text">{description}</p>
          <Button to="/about" variant="outline" size="md">
            Read Full Bio
          </Button>
        </div>
      </motion.div>
    </ParallaxSection>
  )
}
