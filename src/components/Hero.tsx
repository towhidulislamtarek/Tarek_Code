import { Suspense, lazy } from 'react'
import { ArrowDown, ArrowDownToLine, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/portfolio'
const HeroScene = lazy(() => import('./three/HeroScene'))

function SocialIcon({ label }: { label: string }) {
  if (label === 'GitHub') return <Github size={16} />
  if (label === 'LinkedIn') return <Linkedin size={16} />
  return <Mail size={16} />
}

export default function Hero() {
  const reduceMotion = useReducedMotion()

  function downloadProfile() {
    const content = [
      profile.name,
      profile.role,
      '',
      profile.intro,
      '',
      'AREAS OF INTEREST',
      'Web development · Artificial intelligence · Machine learning · Cybersecurity',
      '',
      'EDUCATION',
      'Computer Science and Engineering — Student',
      '',
      'Note: This is a profile draft. Add verified contact, education, and project details before using it as a formal CV.',
    ].join('\n')
    const url = URL.createObjectURL(new Blob([content], { type: 'text/plain;charset=utf-8' }))
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'towhidul-islam-tarek-cv-draft.txt'
    anchor.click()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-copy">
        <motion.div
          className="eyebrow hero-eyebrow"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.7 }}
        >
          <span className="status-pip" /> INDEPENDENTLY CURIOUS
        </motion.div>
        <motion.h1
          id="hero-title"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          Hi, I’m
          <span className="hero-name">Towhidul Islam<br /><span className="name-accent">Tarek.</span></span>
        </motion.h1>
        <motion.p
          className="hero-role"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {profile.role}
        </motion.p>
        <motion.p
          className="hero-intro"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.63, duration: 0.7 }}
        >
          Curious about how technology works — and how to make it work better. I explore software, AI, and ethical security through learning and building.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.74, duration: 0.7 }}
        >
          <a className="button button-primary inline-flex items-center" href="#work">
            Explore my work <ArrowDown size={15} />
          </a>
          <button className="button button-quiet inline-flex items-center" type="button" onClick={downloadProfile}>
            Download CV <ArrowDownToLine size={15} />
          </button>
        </motion.div>
        <div className="hero-socials" aria-label="Social profiles">
          {profile.socials.map(({ label, href }) => (
            <a
              key={label}
              href={href || undefined}
              className={`social-link ${href ? '' : 'is-unconfigured'}`}
              aria-label={href ? label : `${label} link not configured`}
              aria-disabled={!href}
              onClick={href ? undefined : (event) => event.preventDefault()}
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noreferrer' : undefined}
              title={href ? label : `Add your ${label} link in src/data/portfolio.ts`}
            >
              <SocialIcon label={label} />
              <span>{label}</span>
              {href && <ArrowUpRight size={12} />}
            </a>
          ))}
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="scene-stage" role="presentation">
          <div className="scene-glow" />
          <Suspense fallback={<div className="scene-fallback-art"><span className="fallback-orbit" /><span className="fallback-core" /></div>}>
            <HeroScene />
          </Suspense>
          <span className="scene-label scene-label-top">FIG. 01 <i /> SYSTEMS IN MOTION</span>
          <span className="scene-label scene-label-bottom"><span>SIGNAL / ACTIVE</span><span>01—∞</span></span>
        </div>
      </div>
      <a className="scroll-indicator" href="#about" aria-label="Scroll to about">
        <span>SCROLL TO EXPLORE</span><span className="scroll-line" />
      </a>
      <div className="hero-index" aria-hidden="true">01 / 05</div>
    </section>
  )
}
