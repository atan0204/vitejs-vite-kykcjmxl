import { motion } from 'framer-motion'
import './SectionHeading.css'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = 'light',
  align = 'center',
  // eslint-disable-next-line no-unused-vars -- used as JSX tag
  as: Heading = 'h2',
}) {
  return (
    <motion.div
      className={`section-heading section-heading--${tone} section-heading--${align}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <p className="section-heading-eyebrow">{eyebrow}</p>}
      <Heading className="section-heading-title">{title}</Heading>
      {subtitle && <p className="section-heading-subtitle">{subtitle}</p>}
    </motion.div>
  )
}
