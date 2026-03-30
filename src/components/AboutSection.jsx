function AboutSection({ title, description }) {
  return (
    <div className="about-section-wrap">
      <section className="about-section" id="about">
        <div className="about-section__inner">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </section>
    </div>
  )
}

export default AboutSection
