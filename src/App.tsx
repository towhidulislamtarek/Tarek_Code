import { Component, lazy, Suspense } from 'react'
import type { ErrorInfo, ReactNode } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Footer from './components/Footer'
import { profile } from './data/portfolio'

const Contact = lazy(() => import('./components/Contact'))

class ContactBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Contact section failed to load.', error, info.componentStack)
  }

  render() {
    if (this.state.failed) {
      return <section className="section section-contact"><div className="section-wrap"><h2>Let’s talk</h2><p>The contact form is unavailable right now. Please try again later.</p></div></section>
    }
    return this.props.children
  }
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <ContactBoundary>
          <Suspense fallback={<section className="section section-contact" aria-label="Loading contact section" />}>
            <Contact />
          </Suspense>
        </ContactBoundary>
      </main>
      <Footer />
      <span className="sr-only">Portfolio for {profile.name}</span>
    </>
  )
}
