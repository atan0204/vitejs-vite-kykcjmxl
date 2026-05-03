import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Button.css'

const MotionLink = motion.create(Link)

const buttonVariants = {
  primary: {
    rest: { y: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' },
    hover: { y: -2, boxShadow: '0 8px 24px rgba(255, 78, 80, 0.45)' },
    tap: { y: 0 },
  },
  outline: {
    rest: { y: 0, backgroundColor: 'rgba(0,0,0,0)', color: 'var(--clr-accent)' },
    hover: { y: -2, backgroundColor: 'var(--clr-accent)', color: 'var(--clr-white)' },
    tap: { y: 0 },
  },
  ghost: {
    rest: {},
    hover: {},
    tap: {},
  },
}

const shineVariants = {
  rest: { x: '-100%' },
  hover: { x: '100%' },
}

const baseTransition = { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
const shineTransition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] }

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  type = 'button',
  ...rest
}) {
  const cls = `btn btn--${variant} btn--${size} ${className}`.trim()

  const motionProps = {
    variants: buttonVariants[variant],
    initial: 'rest',
    whileHover: 'hover',
    whileTap: 'tap',
    transition: baseTransition,
  }

  const inner = (
    <>
      <span className="btn-label">{children}</span>
      <motion.span
        className="btn-shine"
        aria-hidden="true"
        variants={shineVariants}
        transition={shineTransition}
      />
    </>
  )

  /* Router link */
  if (to) {
    return (
      <MotionLink to={to} className={cls} {...motionProps} {...rest}>
        {inner}
      </MotionLink>
    )
  }

  /* External anchor */
  if (href) {
    return (
      <motion.a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
        {...rest}
      >
        {inner}
      </motion.a>
    )
  }

  /* Native button */
  return (
    <motion.button type={type} className={cls} {...motionProps} {...rest}>
      {inner}
    </motion.button>
  )
}
