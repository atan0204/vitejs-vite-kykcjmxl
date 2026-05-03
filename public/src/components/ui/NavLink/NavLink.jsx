import { NavLink as RouterNavLink } from 'react-router-dom'
import './NavLink.css'

export default function NavLink({ to, children, onClick }) {
  return (
    <RouterNavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        `nav-link link-underline ${isActive ? 'active' : ''}`
      }
      onClick={onClick}
    >
      {children}
    </RouterNavLink>
  )
}
