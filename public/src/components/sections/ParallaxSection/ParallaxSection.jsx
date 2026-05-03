import SimpleParallax from 'simple-parallax-js'
import './ParallaxSection.css'

export default function ParallaxSection({
  bgImage,
  children,
  className = '',
  overlay = 'dark',
  id,
}) {
  return (
    <section className={`parallax-section ${className}`} id={id}>
      <div className="parallax-section-bg">
        <SimpleParallax orientation="up" scale={1.3} delay={0.4} transition="cubic-bezier(0,0,0,1)">
          <img
            src={bgImage}
            alt=""
            aria-hidden="true"
            className="parallax-section-image"
          />
        </SimpleParallax>
      </div>

      {overlay !== 'none' && (
        <div
          className={`parallax-section-overlay parallax-section-overlay--${overlay}`}
          aria-hidden="true"
        />
      )}

      <div className="parallax-section-content">
        {children}
      </div>
    </section>
  )
}
