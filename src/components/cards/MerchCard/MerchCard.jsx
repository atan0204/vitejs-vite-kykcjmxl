import { motion } from 'framer-motion'
import './MerchCard.css'

const cardVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, y: 0, borderColor: 'var(--clr-card-border)' },
  hover: { y: -4, borderColor: 'var(--clr-accent)' },
}

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
}

export default function MerchCard({ item, index = 0 }) {
  return (
    <motion.article
      className="merch-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="merch-card-image-wrap">
        <motion.img
          src={item.image}
          alt={item.title}
          loading="lazy"
          variants={imageVariants}
          initial="rest"
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <h3 className="merch-card-title">{item.title}</h3>
      <p className="merch-card-price">{item.price}</p>
    </motion.article>
  )
}
