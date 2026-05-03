import { motion } from 'framer-motion'
import './TimelineEntry.css'

export default function TimelineEntry({ year, title, note, side = 'left' }) {
  const fromX = side === 'left' ? -36 : 36

  return (
    <motion.div
      className={`timeline-entry timeline-entry--${side}`}
      initial={{ opacity: 0, x: fromX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="timeline-entry-content">
        <span className="timeline-entry-year">{year}</span>
        <h3 className="timeline-entry-title">{title}</h3>
        <p className="timeline-entry-note">{note}</p>
      </div>
      <div className="timeline-entry-marker" aria-hidden="true" />
    </motion.div>
  )
}
