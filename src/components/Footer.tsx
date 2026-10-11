import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="footer-monogram" href="#home" aria-label="Back to top">T<span>.</span></a>
        <p>Curiosity is a good<br />place to start.</p>
        <a className="back-top" href="#home">BACK TO TOP <ArrowUp size={13} /></a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>DESIGNED WITH INTENTION <i>·</i> BUILT TO KEEP LEARNING</span>
        <a href="#home">HOME <ArrowUpRight size={12} /></a>
      </div>
    </footer>
  )
}
