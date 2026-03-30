function FooterSection({ navItems, socialLinks }) {
  return (
    <footer className="footer-section" id="footer">
      <p className="footer-section__copy">
        Join the Lana Del Ray mailing list
        <span>Sign up and get a free track right now</span>
      </p>

      <form className="signup-form">
        <input type="email" placeholder="Your Mail" aria-label="Your email" />
        <button type="submit">Sign Up</button>
      </form>

      <div className="social-row" aria-label="Social links">
        {socialLinks.map((link) => (
          <a key={link.name} href={link.href} aria-label={link.name}>
            <img src={link.icon} alt="" />
          </a>
        ))}
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>

      <p className="footer-meta">
        Website and Content &copy; Lana Del Ray. All Rights Reserved. Privacy policy
      </p>
      <p className="footer-meta footer-meta--muted">Copyright &copy; 2026 ABC Music Inc.</p>
    </footer>
  )
}

export default FooterSection
