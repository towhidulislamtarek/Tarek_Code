import { ArrowUpRight } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section className="section section-skills" id="expertise" aria-labelledby="skills-title">
      <div className="section-wrap">
        <Reveal className="section-heading-row">
          <div>
            <span className="eyebrow"><span className="section-number">02</span> CURRENT TOOLKIT</span>
            <h2 id="skills-title">A toolkit in<br /><span>the making.</span></h2>
          </div>
          <p className="heading-aside">Interests and technologies I’m exploring.<br />No invented scores. Just room to grow.</p>
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.number} delay={(index % 3) * 0.07}>
              <article className="skill-card">
                <div className="skill-card-top"><span>{group.number} / 06</span><ArrowUpRight size={15} /></div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul className="skill-tags">
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
