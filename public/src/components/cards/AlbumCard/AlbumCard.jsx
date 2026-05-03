import { motion } from 'framer-motion'
import Button from '../../ui/Button/Button'
import './AlbumCard.css'

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: { y: -6, boxShadow: '0 18px 40px rgba(0,0,0,0.35)' },
}

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.06 },
}

export default function AlbumCard({ album, index = 0 }) {
  return (
    <motion.article
      className="album-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="album-card-visual">
        <motion.img
          src={album.image}
          alt={`${album.title} album cover`}
          loading="lazy"
          variants={imageVariants}
          initial="rest"
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="album-card-body">
        {album.year && <span className="album-card-year">{album.year}</span>}
        <h3 className="album-card-title">{album.title}</h3>
        <p className="album-card-desc">{album.description}</p>
        <Button variant="primary" size="md">Listen Here</Button>
      </div>
    </motion.article>
  )
}
