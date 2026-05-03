import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import NavLink from '../../ui/NavLink/NavLink'
import './NavMenu.css'

const barTransition = { duration: 0.3, ease: [0.22, 1, 0.36, 1] }

const topBarVariants = {
  closed: { y: 0, rotate: 0 },
  open: { y: 7, rotate: 45 },
}

const middleBarVariants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
}

const bottomBarVariants = {
  closed: { y: 0, rotate: 0 },
  open: { y: -7, rotate: -45 },
}

export default function NavMenu({ items }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  /* Close mobile menu on route change */
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const animState = open ? 'open' : 'closed'

  return (
    <>
      {/* Desktop nav */}
      <nav className="desktop-nav" aria-label="Primary navigation">
        <ul className="desktop-nav-list">
          {items.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile toggle */}
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <motion.span
          variants={topBarVariants}
          animate={animState}
          transition={barTransition}
        />
        <motion.span
          variants={middleBarVariants}
          animate={animState}
          transition={barTransition}
        />
        <motion.span
          variants={bottomBarVariants}
          animate={animState}
          transition={barTransition}
        />
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.ul
              className="mobile-nav-list"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
                closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
              }}
            >
              {items.map((item) => (
                <motion.li
                  key={item.to}
                  variants={{
                    closed: { opacity: 0, y: 16 },
                    open: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink to={item.to} onClick={() => setOpen(false)}>
                    {item.label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
