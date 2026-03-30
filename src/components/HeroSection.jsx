function HeroSection({ featuredAlbumImage, heroImage, navItems, title, eyebrow, description }) {
  return (
    <header className="hero-shell" id="home">
      <div className="topbar">
        <a className="brand" href="#home">
          Lana Del Ray
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <button className="menu-button" type="button" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </div>

      <img className="hero-image" src={heroImage} alt="Lana Del Ray portrait" />

      <section className="featured-release">
        <img
          className="featured-release__art"
          src={featuredAlbumImage}
          alt="Paradise Edition 12 album cover"
        />
        <div className="featured-release__content">
          <h1>{title}</h1>
          <p className="featured-release__eyebrow">{eyebrow}</p>
          <p className="featured-release__text">{description}</p>
          <a className="cta-button" href="#music">
            Listen Here
          </a>
        </div>
      </section>
    </header>
  )
}

export default HeroSection
