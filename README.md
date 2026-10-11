# Towhidul Islam Tarek — Portfolio

A responsive, single-page portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber. The 3D visuals are procedural and do not require external models or image assets.

## Development

```sh
npm install
npm run dev
```

Create a production build with `npm run build`, then preview it locally with `npm run preview`. The static output is written to `dist/` and can be deployed to any static host.

## Personalize the content

Edit `src/data/portfolio.ts` to add verified contact and social links, project descriptions and real repository/demo URLs, skill groups, and education or experience milestones. Empty milestone sections are not rendered. Skill levels and personal statistics are intentionally not fabricated.

The hero’s **Download CV** button currently produces a clearly labeled text draft from the supplied profile details. Replace this with a reviewed, complete CV before sharing it as a formal resume.

## Enable the contact form

The contact form validates its fields in the browser. Email delivery is disabled until a valid EmailJS service ID, template ID, and **public** key are configured:

1. Copy `.env.example` to `.env.local`.
2. Add the three EmailJS values to `.env.local`.
3. Configure the EmailJS template to accept `from_name`, `reply_to`, `subject`, and `message`.
4. Restart the Vite development server or rebuild the site.

Only the EmailJS public key belongs in this frontend configuration. Never put private credentials or secret API keys in `VITE_*` variables. Without configuration, the form shows an explicit setup message rather than pretending to send.

## Accessibility and performance

The page supports keyboard navigation, visible focus, reduced-motion preferences, semantic section landmarks, and a mobile navigation menu. Procedural 3D scenes use capped device pixel ratios and lightweight geometry; content remains available if WebGL cannot render.
