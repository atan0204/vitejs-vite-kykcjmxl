import { motion } from 'framer-motion'
import PageLayout from '../../components/layout/PageLayout/PageLayout'
import HeroBanner from '../../components/sections/HeroBanner/HeroBanner'
import SectionHeading from '../../components/ui/SectionHeading/SectionHeading'
import StatCard from '../../components/cards/StatCard/StatCard'
import ParallaxSection from '../../components/sections/ParallaxSection/ParallaxSection'
import Discography from '../../components/sections/Discography/Discography'
import Button from '../../components/ui/Button/Button'
import {
  aboutContent,
  discography,
  influences,
  bgImages,
} from '../../data/siteContent'
import './About.css'

const revealUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

export default function About() {
  return (
    <PageLayout title="About">
      {/* Hero */}
      <HeroBanner
        image={bgImages.hero}
        eyebrow="The Artist"
        title="Lana Del Ray"
        subtitle={aboutContent.tagline}
      />

      {/* Stats strip */}
      <section className="about-stats" aria-label="Career statistics">
        <div className="about-stats-grid">
          {aboutContent.stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* Bio body */}
      <section className="about-bio" aria-labelledby="about-bio-heading">
        <motion.div className="about-bio-inner" {...revealUp}>
          <SectionHeading
            title="Biography"
            eyebrow="Her Story"
            align="left"
          />
          <div className="about-bio-text">
            {aboutContent.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Discography timeline */}
      <ParallaxSection bgImage={bgImages.music} overlay="dark">
        <SectionHeading
          title="Discography"
          eyebrow="The Albums"
          subtitle="A chronological journey through her studio releases."
        />
        <Discography entries={discography} />
      </ParallaxSection>

      {/* Influences */}
      <section className="about-influences" aria-labelledby="about-influences-heading">
        <SectionHeading
          title="Influences & Inspirations"
          eyebrow="Her World"
        />
        <motion.div className="about-influences-list" {...revealUp}>
          {influences.map((name, i) => (
            <motion.span
              key={name}
              className="about-influences-chip"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <motion.section
        className="about-cta"
        aria-label="Explore more"
        {...revealUp}
      >
        <div className="about-cta-inner">
          <h2 className="about-cta-title">Explore Her Work</h2>
          <div className="about-cta-buttons">
            <Button to="/music" variant="primary" size="lg">
              Discography
            </Button>
            <Button to="/video" variant="outline" size="lg">
              Music Videos
            </Button>
          </div>
        </div>
      </motion.section>
    </PageLayout>
  )
}
