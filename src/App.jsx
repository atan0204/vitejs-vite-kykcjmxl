import './App.css'

const heroImage = '/Lana Del Ray Hero image.jpg'
const featuredAlbumImage = '/Poplar Album Image.jpg'
const facebookIcon = '/social icons/Facebook.png'
const instagramIcon = '/social icons/Instagram.png'
const twitterIcon = '/social icons/et_twitter.png'
const linkedInIcon = '/social icons/LinkedIn.png'

const navItems = ['Home', 'About', 'Music', 'Video', 'News', 'Contact']

const albumCards = [
  {
    title: 'Ultraviolence',
    image: '/album image 1.png',
    description: 'A dark, cinematic spiral through toxic love, vintage glamour, and beautiful destruction.'
  },
  {
    title: 'Born to Die',
    image: '/Album image 1.jpg',
    description: 'A lush, melancholic anthem of youth, heartbreak, and doomed Hollywood dreams.'
  },
  {
    title: 'Lust For Life',
    image: '/album image 3 (1).png',
    description: 'A dreamy, hopeful journey where old-soul romance meets freedom, reflection, and reinvention..'

  },
]

const videoCards = [
  {
    title: 'Complete',
    image: '/Top Video image 01.jpg',
  },
  {
    title: 'Honeymoon',
    image: '/Top Video image 02.jpg',
  },
  {
    title: 'Say Yes To Heaven',
    image: '/Top Video image 03.jpg',
  },
  {
    title: 'Paradise',
    image: '/Top Video image 04.jpg',
  },
  {
    title: 'Young and Beautiful',
    image: '/Top Video image 05.jpg',
  },

  {
    title: 'Summertime Sadness',
    image: '/Top Video image 06.jpg',
  },
  {
    title: 'West Coast',
    image: '/Top Video image 07.jpg',
  },
  {
    title: 'Love',
    image: '/Top Video image 08.jpg',
  },
]

const merchItems = [
  {
    title: 'HONEYMOON: VINYL 2LP',
    price: '$38.00',
    image: '/Merch images/Merch image 01.png',
  },
  {
    title: 'BORN TO DIE: VINYL LP',
    price: '$33.00',
    image: '/Merch images/Merch image 02.png',
  },
  {
    title: 'Tough 7" Vinyl',
    price: '$15.00',
    image: '/Merch images/Merch image 03.png',
  },
  {
    title: 'NORMAN ROCKWELL!',
    price: '$40.00',
    image: '/Merch images/Merch image 04.png',
  },
  {
    title: 'Ultraviolence Standard Vinyl',
    price: '$33.00',
    image: '/Merch images/Merch image 05.png',
  },
  {
    title: 'Chemtrails Over the Country',
    price: '$36.00',
    image: '/Merch images/Merch image 06.png',
  },
]

const socialLinks = [
  { name: 'Facebook', icon: facebookIcon, href: 'https://facebook.com' },
  { name: 'Instagram', icon: instagramIcon, href: 'https://instagram.com' },
  { name: 'Twitter', icon: twitterIcon, href: 'https://x.com' },
  { name: 'LinkedIn', icon: linkedInIcon, href: 'https://linkedin.com' },
]

function App() {

  return (
    <div className="lana-page">
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
            <h1>Popular Album</h1>
            <p className="featured-release__eyebrow">Paradise Edition 12</p>
            <p className="featured-release__text">
              Listen to &lsquo;Paradise&rsquo; available on all streaming platforms.
              Order the new album on vinyl and CD today!
            </p>
            <a className="cta-button" href="#music">
              Listen Here
            </a>
          </div>
        </section>
      </header>

      <div className="about-section-wrap">
        <section className="about-section" id="about">
          <div className="about-section__inner">
            <h2>Lana Del Ray</h2>
            <p>
              Elizabeth Woolridge Grant (born June 21, 1985), known professionally as
              Lana Del Rey, is an American singer-songwriter. Her music is noted for its
              melancholic exploration of glamour and romance, with frequent references to
              pop culture and 1950s-1970s Americana. She is the recipient of numerous
              awards and nominations, and has been recognized as one of the defining
              songwriters of the 21st century.
            </p>
          </div>
        </section>
      </div>

      <section className="music-section" id="music">
        <div className="section-heading">
          <h2>Latest Music Albums</h2>
        </div>

        <div className="album-showcase">
          {albumCards.map((album) => (
            <article key={album.title} className="album-card">
              <div className="album-card__visual">
                <img src={album.image} alt={album.title} loading="lazy" />
                {album.record ? (
                  <img
                    className="album-card__record"
                    src={album.record}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                ) : null}
              </div>
              <div className="album-card__body">
                <h3>{album.title}</h3>
                <p>{album.description}</p>
                <a className="cta-button cta-button--small" href="#footer">
                  Listen Here
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="view-all">
          <a href="#merch">View All</a>
        </div>
      </section>

      <section className="videos-section" id="video">
        <div className="section-heading section-heading--dark">
          <h2>Top Videos</h2>
        </div>
        <div className="video-grid">
          {videoCards.map((video) => (
            <article key={video.title} className="video-card">
              <img src={video.image} alt={video.title} loading="lazy" />
              <div className="video-card__label">{video.title}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="merch-section" id="merch">
        <div className="section-heading">
          <h2>MERCH</h2>
        </div>
        <div className="merch-grid">
          {merchItems.map((item) => (
            <article key={item.title} className="merch-card">
              <div className="merch-card__imageWrap">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </article>
          ))}
        </div>
        <div className="view-all">
          <a href="#footer">See All</a>
        </div>
      </section>

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
        <p className="footer-meta footer-meta--muted">
          Copyright &copy; 2026 ABC Music Inc.
        </p>
      </footer>
    </div>
  )
}

export default App
