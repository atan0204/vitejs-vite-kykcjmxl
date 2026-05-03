import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Logo from '../../ui/Logo/Logo'
import NavMenu from '../NavMenu/NavMenu'
import './Header.css'

export default function Header({ navItems }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className="site-header"
      animate={{
        backgroundColor: scrolled ? 'rgba(24, 22, 22, 0.85)' : 'rgba(24, 22, 22, 0)',
        backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="site-header-inner">
        <Logo />
        <NavMenu items={navItems} />
      </div>
    </motion.header>
  )
}
