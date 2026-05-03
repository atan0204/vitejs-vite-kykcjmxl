import { Link } from 'react-router-dom'
import './Logo.css'

export default function Logo({ to = '/', text = 'Lana Del Ray' }) {
  return (
    <Link to={to} className="logo" aria-label="Home">
      {text}
    </Link>
  )
}
