import { ArrowUpRight, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data/portfolio'
import { lazy, Suspense } from 'react'

const InterestNetwork = lazy(() => import('./three/InterestNetwork'))

export default function About() {
  return (
    <section className="section section-about" id="about" aria-labelledby="about-title">
      <div className="section-wrap">
        <Reveal className="section-heading-row">
          <div>
            <span className="eyebrow"><span className="section-number">01</span> A LITTLE ABOUT ME</span>
            <h2 id="about-title">Learning by making.<br /><span>Growing by asking.</span></h2>
          </div>
          <p className="heading-aside">A curious mind, always in progress.</p>
        </Reveal>

        <div className="about-layout">
          <Reveal className="about-copy">
            <div className="about-mark" aria-hidden="true"><Sparkles size={18} /></div>
            <p className="about-lead">
              I’m a Computer Science and Engineering student interested in the ideas that make technology useful, intelligent, and secure.
            </p>
            <p className="about-body">{profile.intro}</p>
            <p className="about-body">
              From front-end development to machine learning and ethical cybersecurity, I’m building a broader perspective one experiment at a time. The goal is simple: stay curious, strengthen the fundamentals, and create things that are thoughtful by design.
            </p>
            <a className="text-link" href="#contact">A project in mind? <ArrowUpRight size={15} /></a>
          </Reveal>

          <Reveal className="about-visual" delay={0.1}>
            <div className="network-caption"><span>AN OPEN ENDED PRACTICE</span><span>01 — 06</span></div>
            <div className="network-canvas">
              <Suspense fallback={<div className="network-loading" aria-hidden="true" />}>
                <InterestNetwork />
              </Suspense>
            </div>
            <div className="network-legend">
              <span><i /> Explore</span><span><i /> Connect</span><span><i /> Create</span>
            </div>
          </Reveal>
        </div>

        <Reveal className="stats-row">
          {[
            ['—', 'Projects shipped'],
            ['—', 'Years learning'],
            ['—', 'Things to explore'],
          ].map(([value, label]) => (
            <div className="stat-item" key={label}>
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}<small>ADD VERIFIED DETAIL</small></span>
            </div>
          ))}
          <p className="stats-note">Details intentionally left open until verified.</p>
        </Reveal>
      </div>
    </section>
  )
}
