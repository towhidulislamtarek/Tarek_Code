import { ArrowUpRight, Code2, Leaf, Orbit } from 'lucide-react'
import { projects } from '../data/portfolio'
import type { Project } from '../data/portfolio'
import Reveal from './Reveal'

const visuals = {
  compiler: Code2,
  plant: Leaf,
  portfolio: Orbit,
}

function ProjectVisual({ project }: { project: Project }) {
  const Icon = visuals[project.visual]
  return (
    <div className={`project-visual visual-${project.visual}`} aria-hidden="true">
      <div className="visual-noise" />
      <div className="visual-orbit visual-orbit-one" />
      <div className="visual-orbit visual-orbit-two" />
      <div className="visual-object"><Icon size={46} strokeWidth={1} /></div>
      {project.visual === 'compiler' && <span className="visual-code">∑(x) → f(x)</span>}
      {project.visual === 'plant' && <span className="visual-code">LEAF / 01</span>}
      {project.visual === 'portfolio' && <span className="visual-code">01—∞</span>}
      <span className="visual-index">{project.number}</span>
      <span className="visual-caption">{project.category}</span>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="section section-projects" id="work" aria-labelledby="projects-title">
      <div className="section-wrap">
        <Reveal className="section-heading-row">
          <div>
            <span className="eyebrow"><span className="section-number">03</span> SELECTED WORK</span>
            <h2 id="projects-title">Ideas, in<br /><span>the works.</span></h2>
          </div>
          <p className="heading-aside">A few directions I’m curious about.<br />Project details are ready to personalize.</p>
        </Reveal>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.09}>
              <article className="project-card">
                <ProjectVisual project={project} />
                <div className="project-details">
                  <div className="project-meta"><span>PROJECT {project.number}</span><span className="project-status">EDITABLE ENTRY</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="project-stack">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                  <div className="project-links">
                    {project.demoUrl ? (
                      <a href={project.demoUrl} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={14} /></a>
                    ) : <span className="project-link-muted">Demo not added</span>}
                    {project.repoUrl ? (
                      <a href={project.repoUrl} target="_blank" rel="noreferrer">Source <ArrowUpRight size={14} /></a>
                    ) : <span className="project-link-muted">Repository not added</span>}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
