export type SocialLink = {
  label: string
  href: string
}

export type Project = {
  number: string
  title: string
  category: string
  description: string
  stack: string[]
  repoUrl?: string
  demoUrl?: string
  visual: 'compiler' | 'plant' | 'portfolio'
}

export const profile = {
  name: 'Towhidul Islam Tarek',
  shortName: 'Tarek',
  role: 'Computer Science Student · Developer · Cybersecurity Enthusiast',
  intro:
    'I’m drawn to the places where thoughtful software, artificial intelligence, and security meet. I like learning how things work, then building useful experiences that feel considered from the first interaction to the last.',
  email: 'tarektowhidulislam@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/towhidulislamtarek' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/towhidulislamtarek' },
    { label: 'Email', href: 'mailto:tarektowhidulislam@gmail.com' },
  ] satisfies SocialLink[],
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Mathematical Expression Compiler',
    category: 'LANGUAGES & SYSTEMS',
    description:
      'An editable project entry for exploring how mathematical expressions can be parsed, understood, and evaluated.',
    stack: ['Compiler design', 'Parsing', 'Mathematics'],
    visual: 'compiler',
  },
  {
    number: '02',
    title: 'Plant Disease Detection Using Deep Learning',
    category: 'AI & MACHINE LEARNING',
    description:
      'An editable project entry exploring deep-learning approaches to identifying disease patterns in plant imagery.',
    stack: ['Deep learning', 'Computer vision', 'Python'],
    visual: 'plant',
  },
  {
    number: '03',
    title: 'Interactive 3D Portfolio',
    category: 'CREATIVE DEVELOPMENT',
    description:
      'A living portfolio concept bringing together an interactive real-time 3D scene and an accessible, responsive interface.',
    stack: ['React', 'Three.js', 'TypeScript'],
    visual: 'portfolio',
  },
]

export const skillGroups = [
  {
    number: '01',
    title: 'Programming',
    description: 'Languages for reasoning, building, and experimenting.',
    skills: ['C', 'C++', 'Java', 'JavaScript', 'Python'],
  },
  {
    number: '02',
    title: 'Frontend',
    description: 'Turning ideas into clear, responsive experiences.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    number: '03',
    title: 'Backend',
    description: 'Learning how applications work behind the interface.',
    skills: ['PHP'],
  },
  {
    number: '04',
    title: 'AI & machine learning',
    description: 'An interest in intelligent systems and computer vision.',
    skills: ['Artificial intelligence', 'Machine learning', 'Deep learning'],
  },
  {
    number: '05',
    title: 'Security',
    description: 'Ethical security, careful thinking, and safer software.',
    skills: ['Cybersecurity', 'Ethical hacking'],
  },
  {
    number: '06',
    title: 'Tools',
    description: 'The everyday tools behind a thoughtful workflow.',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
]

export const milestones = [
  {
    category: 'EDUCATION',
    title: 'Computer Science and Engineering',
    description: 'Student',
    date: '',
    organization: '',
  },
]

export const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
}

export const isContactConfigured = Object.values(emailJsConfig).every(Boolean)
