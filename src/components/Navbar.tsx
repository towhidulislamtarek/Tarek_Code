import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { profile } from '../data/portfolio'

const links = [
  ['About', '#about'],
  ['Expertise', '#expertise'],
  ['Selected work', '#work'],
  ['Journey', '#journey'],
] as const

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label={`${profile.name}, home`} onClick={() => setOpen(false)}>
          <span className="wordmark-mark">T<span>.</span></span>
          <span className="wordmark-name">TOWHIDUL ISLAM TAREK</span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="primary-links"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
        <div id="primary-links" className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>
    </header>
  )
}
