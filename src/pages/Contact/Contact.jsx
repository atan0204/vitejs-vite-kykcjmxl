import { motion } from 'framer-motion'
import PageLayout from '../../components/layout/PageLayout/PageLayout'
import HeroBanner from '../../components/sections/HeroBanner/HeroBanner'
import SectionHeading from '../../components/ui/SectionHeading/SectionHeading'
import ContactForm from '../../components/sections/ContactForm/ContactForm'
import SocialIcon from '../../components/ui/SocialIcon/SocialIcon'
import { contactContent, socialLinks, bgImages } from '../../data/siteContent'
import './Contact.css'

const revealUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

export default function Contact() {
  return (
    <PageLayout title="Contact">
      <HeroBanner
        image={bgImages.hero}
        eyebrow="Say Hello"
        title={contactContent.heading}
        subtitle={contactContent.intro}
      />

      {/* Contact desks */}
      <section className="contact-desks" aria-label="Contact departments">
        <motion.div className="contact-desks-grid" {...revealUp}>
          {contactContent.contacts.map((c) => (
            <article key={c.desk} className="contact-desk">
              <h3 className="contact-desk-title">{c.desk}</h3>
              <p className="contact-desk-desc">{c.description}</p>
              <a href={`mailto:${c.email}`} className="contact-desk-email">
                {c.email}
              </a>
            </article>
          ))}
        </motion.div>
      </section>

      {/* Form + Aside */}
      <section className="contact-main" aria-label="Contact form">
        <div className="contact-main-inner">
          <motion.div
            className="contact-main-form"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeading
              title="Send a Message"
              align="left"
            />
            <ContactForm inquiryTypes={contactContent.inquiryTypes} />
          </motion.div>

          <motion.aside
            className="contact-main-aside"
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="contact-aside-block">
              <h4 className="contact-aside-label">Address</h4>
              <address className="contact-aside-address">
                {contactContent.address.line1}<br />
                {contactContent.address.line2}<br />
                {contactContent.address.line3}
              </address>
            </div>

            <div className="contact-aside-block">
              <h4 className="contact-aside-label">Hours</h4>
              <p className="contact-aside-text">{contactContent.hours}</p>
            </div>

            <div className="contact-aside-block">
              <h4 className="contact-aside-label">Social</h4>
              <div className="contact-aside-social">
                {socialLinks.map((link) => (
                  <SocialIcon key={link.name} {...link} />
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </PageLayout>
  )
}
