import { motion } from 'framer-motion'
import './StatCard.css'

export default function StatCard({ value, label, index = 0 }) {
  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="stat-card-value">{value}</span>
      <span className="stat-card-label">{label}</span>
    </motion.div>
  )
}
