export const portfolioData = {
  hero: {
    badge: 'Available for freelance, full-time, and contract work',
    title: 'Full-stack developer building clean products with strong front-end systems.',
    description:
      'A polished, responsive portfolio starter inspired by a modern software engineer profile. Use this as a base for your own content, links, and case studies.',
    focusTitle: 'React, Node.js, and product-focused delivery',
    location: 'Noida, India',
    ctaPrimary: {
      label: 'Contact us',
      href: '#contact',
    },
    ctaSecondary: {
      label: 'View projects',
      href: '#portfolio',
    },
    ctaTertiary: {
      label: 'Download resume',
      href: '/resume.pdf',
    },
  },
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Contact us', href: '#contact' },
  ],
  stats: [
    { value: '2+', label: 'Years building production apps' },
    { value: '10+', label: 'Projects shipped or supported' },
    { value: '4', label: 'Primary product areas' },
  ],
  about: {
    summary:
      'This layout follows the structure of a professional developer portfolio: a strong introduction, concise proof points, detailed skills, work history, certifications, projects, and a clear contact path.',
    details: [
      { label: 'Role', value: 'Software Developer' },
      { label: 'Experience', value: '2+ years' },
      { label: 'Specialty', value: 'React + Node.js' },
      { label: 'Working style', value: 'Fast iterations and clean UI systems' },
    ],
    highlights: [
      'Responsive, card-based layout with strong hierarchy and plenty of whitespace.',
      'Content is centralized in a single data file so you can swap text without touching layout code.',
      'Reusable sections keep the page maintainable as you add more projects or testimonials later.',
    ],
    cards: [
      {
        kicker: 'Design direction',
        title: 'Premium and restrained',
        description:
          'The palette leans into deep navy, cyan, and emerald accents to create a more editorial feel than a typical portfolio template.',
      },
      {
        kicker: 'Content strategy',
        title: 'Similar structure, original copy',
        description:
          'The section order and density are inspired by the reference site, but the wording is paraphrased so the project can stand on its own.',
      },
    ],
  },
  skills: [
    {
      title: 'Frontend',
      description: 'The UI stack and patterns used to build fast, maintainable interfaces.',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI', 'Context API', 'Performance tuning'],
    },
    {
      title: 'Backend',
      description: 'The API and realtime tools that support product delivery.',
      items: ['Node.js', 'REST APIs', 'Socket.io', 'JWT', 'OAuth', 'Microservices'],
    },
    {
      title: 'Data and platforms',
      description: 'Storage, message handling, and deployment-friendly tooling.',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'AWS S3', 'Git'],
    },
    {
      title: 'Engineering practices',
      description: 'Patterns that improve reliability, speed, and collaboration.',
      items: ['System design', 'Load handling', 'Caching', 'Async flows', 'Role-based routing', 'Agile delivery'],
    },
  ],
  experience: [
    {
      role: 'Software Developer',
      company: 'W3villa Technologies Pvt. Ltd.',
      location: 'Noida, India',
      period: 'Apr 2024 - Present',
      highlights: [
        'Built modular React interfaces for internal dashboards and admin workflows.',
        'Developed and scaled REST APIs with a focus on maintainability and response-time consistency.',
        'Worked on realtime and microservice-based products with a product mindset.',
      ],
    },
  ],
  certifications: [
    {
      year: '2024',
      title: 'Software Development Track - Flipkart GRiD 5.0',
      description: 'Participation certificate for the Level 1.1 quiz track in the e-commerce and tech challenge.',
    },
    {
      year: '2022',
      title: 'Introduction to Web Development',
      description: 'Course covering HTML, CSS, and JavaScript fundamentals.',
    },
    {
      year: '2022',
      title: 'Programming Fundamentals in Python',
      description: 'Foundational programming certification split across two course parts.',
    },
  ],
  projects: [
    {
      title: 'MedRisk',
      type: 'AI risk management platform',
      status: 'Featured project',
      summary:
        'A workflow-heavy platform for structured risk management, document generation, and fast review cycles.',
      tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'AWS'],
      points: [
        'Built an admin-style dashboard with multi-step workflows and status tracking.',
        'Supported document ingestion and structured output for traceability.',
        'Designed for async processing and large-file handling.',
      ],
    },
    {
      title: 'EduCraft',
      type: 'Learning platform',
      status: 'Professional project',
      summary:
        'A course platform with secure authentication, payments, and enrollment flows for premium content.',
      tech: ['MERN', 'JWT', 'OAuth', 'Stripe', 'REST API'],
      points: [
        'Implemented secure auth and plan-based access control.',
        'Added payment flow integration for premium course access.',
        'Created course and progress APIs for structured learning journeys.',
      ],
    },
    {
      title: 'Affiliate Admin Panel',
      type: 'Operations dashboard',
      status: 'Built from scratch',
      summary:
        'A modular internal dashboard with routing, reporting, and realtime data surfaces for operations teams.',
      tech: ['React', 'Node.js', 'Microservices', 'Dashboards'],
      points: [
        'Used reusable components to keep the admin system maintainable.',
        'Added role-based navigation and dynamic views for multiple user types.',
        'Optimized the interface for fast scanning and frequent action-taking.',
      ],
    },
    {
      title: 'Real-time QnA Game',
      type: 'Realtime product',
      status: 'Performance-focused',
      summary:
        'A socket-driven multiplayer experience built around low-latency communication and scalable backend design.',
      tech: ['Socket.io', 'Node.js', 'Microservices', 'Realtime'],
      points: [
        'Structured the game flow to support live sessions and rapid state updates.',
        'Focused on efficient socket handling and predictable latency.',
        'Built for independent scaling and cleaner service boundaries.',
      ],
    },
  ],
  contactLinks: [
    { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/your-handle', href: 'https://linkedin.com' },
    { label: 'GitHub', value: 'github.com/your-handle', href: 'https://github.com' },
    { label: 'Location', value: 'Noida, India', href: '#home' },
  ],
} as const