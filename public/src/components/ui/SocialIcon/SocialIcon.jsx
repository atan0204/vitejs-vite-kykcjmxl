import './SocialIcon.css'

export default function SocialIcon({ name, icon, href }) {
  return (
    <a
      href={href}
      className="social-icon hover-lift"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
    >
      <img src={icon} alt="" aria-hidden="true" />
    </a>
  )
}
