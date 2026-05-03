import { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../ui/Input/Input'
import Button from '../../ui/Button/Button'
import SocialIcon from '../../ui/SocialIcon/SocialIcon'
import './Footer.css'

export default function Footer({ navItems, socialLinks }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <footer className="site-footer" id="footer">
      <div className="site-footer-inner">
        {/* Newsletter */}
        <p className="site-footer-copy">
          Join the Lana Del Ray mailing list
          <span>Sign up and get a free track right now</span>
        </p>

        {submitted ? (
          <p className="site-footer-thanks" aria-live="polite">
            Thanks for subscribing!
          </p>
        ) : (
          <form className="signup-form" onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Your Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              required
            />
            <Button variant="outline" size="md" type="submit">
              Sign Up
            </Button>
          </form>
        )}

        {/* Social icons */}
        <div className="social-row" aria-label="Social links">
          {socialLinks.map((link) => (
            <SocialIcon key={link.name} {...link} />
          ))}
        </div>

        {/* Footer nav */}
        <nav className="footer-nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="footer-nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Meta */}
        <p className="footer-meta">
          Privacy Policy | Terms & Conditions | Cookie Policy | Accessibility
        </p>
        <p className="footer-meta footer-meta--muted">
          &copy; 2026 ABC Music Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
