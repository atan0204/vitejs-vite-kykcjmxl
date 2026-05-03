import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../../navigation/Header/Header'
import Footer from '../../navigation/Footer/Footer'
import { navItems, socialLinks } from '../../../data/siteContent'
import './PageLayout.css'

const pageVariants = {
  initial:  { opacity: 0, y: 24 },
  animate:  { opacity: 1, y: 0 },
  exit:     { opacity: 0, y: -24 },
}

const pageTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
}

export default function PageLayout({ children, title }) {
  const { pathname } = useLocation()

  /* Scroll to top on route change */
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  /* Update document title */
  useEffect(() => {
    document.title = title
      ? `${title} \u00B7 Lana Del Ray`
      : 'Lana Del Ray'
  }, [title])

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header navItems={navItems} />

      <motion.main
        id="main-content"
        className="page-main"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
      >
        {children}
      </motion.main>

      <Footer navItems={navItems} socialLinks={socialLinks} />
    </div>
  )
}
