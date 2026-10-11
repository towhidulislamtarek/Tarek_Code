import { useState } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { ArrowUpRight, Check, Copy, Mail, Send } from 'lucide-react'
import { emailJsConfig, isContactConfigured, profile } from '../data/portfolio'
import Reveal from './Reveal'

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [state, setState] = useState<FormState>('idle')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('')
    if (!isContactConfigured) {
      setState('error')
      setMessage('The contact form is not connected yet. Add your EmailJS settings to the local environment to enable delivery.')
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    setState('sending')
    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: formData.get('name'),
          reply_to: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        },
        { publicKey: emailJsConfig.publicKey },
      )
      setState('success')
      setMessage('Thanks for reaching out. Your message has been sent.')
      form.reset()
    } catch {
      setState('error')
      setMessage('Your message could not be sent. Please try again or get in touch another way.')
    }
  }

  async function copyEmail() {
    if (!profile.email) return
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setState('error')
      setMessage('Could not copy the email address. Please copy it manually.')
    }
  }

  return (
    <section className="section section-contact" id="contact" aria-labelledby="contact-title">
      <div className="section-wrap">
        <Reveal className="contact-heading">
          <span className="eyebrow"><span className="section-number">05</span> OPEN THE CONVERSATION</span>
          <h2 id="contact-title">Have a good<br /><span>one in mind?</span></h2>
          <p>Ideas, questions, collaborations — I’m always glad to hear what you’re working on.</p>
        </Reveal>
        <div className="contact-layout">
          <Reveal className="contact-aside">
            <p className="contact-aside-lead">Let’s build a connection before we build anything else.</p>
            <div className="contact-direct">
              <Mail size={17} />
              <div><span>DROP ME A LINE</span><strong>{profile.email || 'Email not added yet'}</strong></div>
            </div>
            <button
              className="copy-email"
              type="button"
              onClick={copyEmail}
              disabled={!profile.email}
              aria-label={copied ? 'Email address copied' : 'Copy email address'}
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? 'Copied to clipboard' : profile.email ? 'Copy email address' : 'Add an email address in the profile settings'}
            </button>
            <div className="contact-socials">
              {profile.socials.filter((social) => social.label !== 'Email').map((social) => (
                social.href
                  ? <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} <ArrowUpRight size={13} /></a>
                  : <span key={social.label}>{social.label} · link not added</span>
              ))}
            </div>
          </Reveal>

          <Reveal className="contact-form-wrap" delay={0.1}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>Your name<input name="name" type="text" autoComplete="name" placeholder="How should I address you?" required maxLength={100} /></label>
                <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label>
              </div>
              <label>Subject<input name="subject" type="text" placeholder="What’s this about?" required maxLength={150} /></label>
              <label>Your message<textarea name="message" placeholder="A little context goes a long way…" rows={5} required maxLength={5000} /></label>
              <div className="form-submit-row">
                <button className="button button-primary" type="submit" disabled={state === 'sending'}>
                  {state === 'sending' ? 'Sending…' : state === 'success' ? 'Message sent' : 'Send a message'}
                  {state === 'sending' ? <span className="button-spinner" /> : <Send size={14} />}
                </button>
                <span>NO SPAM, JUST A REAL CONVERSATION.</span>
              </div>
              <p className={`form-feedback ${state}`} role="status" aria-live="polite">{message}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
