import { milestones } from '../data/portfolio'
import Reveal from './Reveal'

export default function Journey() {
  if (milestones.length === 0) return null

  return (
    <section className="section section-journey" id="journey" aria-labelledby="journey-title">
      <div className="section-wrap">
        <Reveal className="section-heading-row">
          <div>
            <span className="eyebrow"><span className="section-number">04</span> THE JOURNEY SO FAR</span>
            <h2 id="journey-title">A work in<br /><span>progress.</span></h2>
          </div>
          <p className="heading-aside">A few real starting points.<br />The rest is still being written.</p>
        </Reveal>
        <div className="journey-list">
          {milestones.map((item, index) => (
            <Reveal key={`${item.category}-${item.title}`} delay={index * 0.08}>
              <article className="journey-item">
                <span className="journey-index">0{index + 1}</span>
                <span className="journey-dot" aria-hidden="true" />
                <div className="journey-content">
                  <span className="eyebrow">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}{item.organization ? ` · ${item.organization}` : ''}</p>
                </div>
                {item.date && <span className="journey-date">{item.date}</span>}
              </article>
            </Reveal>
          ))}
        </div>
        <p className="journey-note">More milestones will appear here as verified details are added.</p>
      </div>
    </section>
  )
}
