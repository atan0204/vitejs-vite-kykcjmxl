import { motion } from 'framer-motion'
import './VideoCard.css'

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
  hover: {},
}

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.06 },
}

const overlayVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
}

export default function VideoCard({ video, index = 0 }) {
  return (
    <motion.article
      className="video-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={video.image}
        alt={`${video.title} music video`}
        loading="lazy"
        variants={imageVariants}
        initial="rest"
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {video.length && (
        <span className="video-card-duration" aria-label={`Duration: ${video.length}`}>
          {video.length}
        </span>
      )}

      <motion.div
        className="video-card-overlay"
        aria-hidden="true"
        variants={overlayVariants}
        initial="rest"
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg className="video-card-play" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2" />
          <path d="M19 16l14 8-14 8V16z" fill="currentColor" />
        </svg>
      </motion.div>

      <div className="video-card-label">
        {video.title}
      </div>
    </motion.article>
  )
}
