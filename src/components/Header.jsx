import { useState, useEffect } from 'react'
import './Header.css'

const NAV_LINKS = [
  { href: '#about',      label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills',     label: 'Skills' },
  { href: '#education',  label: 'Education' },
  { href: '#portfolio',  label: 'Portfolio' },
  { href: '#contact',    label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="container header-inner">
        <a href="#hero" className="header-logo" aria-label="Dwayne Davis — home">
          <div className="header-logo-img-wrap" aria-hidden="true">
            <img src="/logo.png" alt="" />
          </div>
          <span className="header-logo-text">Dwayne Davis</span>
        </a>

        <nav aria-label="Main navigation">
          <ul className={`nav-list${menuOpen ? ' open' : ''}`} role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="nav-link" onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="nav-list"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span className={`hamburger${menuOpen ? ' open' : ''}`} aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
