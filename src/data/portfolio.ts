export const portfolioData = {
  hero: {
    badge: 'Open to full-time software engineering opportunities',
    title: 'Software Developer | Full Stack Engineer',
    description:
      'Software Developer with hands-on experience in full-stack web development using React.js, Node.js, and NestJS. Passionate about building performant products, exploring AI-driven solutions, and continuous learning.',
    focusTitle: 'Scalable systems, real-time architecture, and REST API delivery',
    location: 'Ghaziabad, Uttar Pradesh, India',
    ctaPrimary: {
      label: 'Contact me',
      href: '#contact',
    },
    ctaSecondary: {
      label: 'View projects',
      href: '#portfolio',
    },
    ctaTertiary: {
      label: 'Download CV',
      href: '/resume.pdf',
    },
  },
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ],
  stats: [
    { value: '1+', label: 'Years of professional experience' },
    { value: '4+', label: 'Full-stack projects delivered' },
    { value: 'Top 10', label: 'Intellia Hackathon rank (out of 50)' },
  ],
  about: {
    summary:
      'Proven track record in delivering scalable web applications, real-time systems, and RESTful APIs while collaborating in Agile teams.',
    details: [
      { label: 'Role', value: 'Software Developer' },
      { label: 'Company', value: 'W3Villa Technologies Pvt. Ltd.' },
      { label: 'Experience', value: 'May 2025 - Present' },
      { label: 'Education', value: 'B.Tech, ABES Engineering College (2021-2025)' },
    ],
    highlights: [
      'Reduced API response time from 5s to under 1s using Redis caching, query optimization, and indexing improvements.',
      'Built scalable backend systems with Node.js, Express.js, and NestJS using microservice-friendly architecture.',
      'Delivered real-time systems with WebSockets, Redis Pub/Sub, and BullMQ for reliable async workflows.',
    ],
    cards: [
      {
        kicker: 'Engineering focus',
        title: 'Performance, reliability, and scale',
        description:
          'Strong emphasis on backend performance optimization, asynchronous processing with BullMQ, and scalable architecture design.',
      },
      {
        kicker: 'Product mindset',
        title: 'Reusable and maintainable delivery',
        description:
          'Builds reusable React.js components and maintainable APIs with practical trade-offs, secure integrations, and measurable outcomes.',
      },
    ],
  },
  skills: [
    {
      title: 'Frontend',
      description: 'UI engineering for responsive and maintainable product interfaces.',
      items: ['React.js', 'Tailwind CSS', 'Bootstrap', 'Hooks', 'Context API', 'Responsive UI'],
    },
    {
      title: 'Backend',
      description: 'Scalable backend services and real-time communication.',
      items: ['Node.js', 'Express.js', 'NestJS', 'REST API Design', 'WebSockets', 'JWT Authentication'],
    },
    {
      title: 'Data and infra',
      description: 'Storage, caching, and tooling used in production systems.',
      items: ['MySQL', 'MongoDB', 'Redis', 'Prisma', 'Sequelize', 'Docker'],
    },
    {
      title: 'Core practices',
      description: 'Patterns for performance, reliability, and scale.',
      items: ['BullMQ', 'Async Processing', 'Redis Caching', 'Scalable API Design', 'Real-time Systems', 'Git'],
    },
  ],
  experience: [
    {
      role: 'Software Developer',
      company: 'W3Villa Technologies Pvt. Ltd.',
      location: 'Noida, India',
      period: 'May 2025 - Present',
      highlights: [
        'Reduced API response time from 5 seconds to under 1 second through Redis caching, N+1 query resolution, and indexing optimization.',
        'Architected and developed scalable backend systems using NestJS, Node.js, and Express.js with REST APIs and real-time WebSocket communication.',
        'Built and scaled products including a real-time Tambola platform, a food recommendation platform, and AI-powered CRM modules.',
        'Engineered asynchronous workflows using BullMQ and Redis for timers, event-driven processing, and background jobs.',
        'Delivered reusable React.js components and responsive interfaces integrated with secure APIs.',
      ],
    },
  ],
  certifications: [
    {
      year: '2025',
      title: 'Intellia Society Hackathon - Top 10',
      description: 'Ranked among top 10 out of 50 participants for problem-solving and rapid prototyping.',
    },
    {
      year: '2022-2025',
      title: 'SAC Committee, ABES Engineering College - Active Member',
      description: 'Contributed to student activity planning and execution, coordinating events and engagement initiatives.',
    },
    {
      year: '2025',
      title: 'B.Tech in Electronics Engineering',
      description: 'ABES Engineering College, Ghaziabad (2021-2025).',
    },
  ],
  projects: [
    {
      title: 'Tambola Multiplayer Game',
      type: 'Real-time backend platform',
      status: 'Production-grade architecture',
      summary:
        'Engineered a real-time multiplayer Tambola backend with concurrent rooms and live state synchronization.',
      tech: ['NestJS', 'WebSockets', 'Redis', 'BullMQ', 'Prisma', 'MySQL'],
      points: [
        'Designed live room synchronization using Redis Pub/Sub and WebSocket events.',
        'Implemented BullMQ jobs for number draws, timers, and winner validation.',
        'Added Prisma + MySQL data handling with auto-ticket generation and claim checks.',
      ],
    },
    {
      title: 'Butter App',
      type: 'Food recommendation platform',
      status: 'API performance optimized',
      summary:
        'Built backend services with modular REST APIs for recommendation logic, including pagination, filtering, and sorting.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'REST APIs'],
      points: [
        'Built modular recommendation APIs for users, restaurants, and preference logic.',
        'Integrated Redis caching to reduce response times and backend load.',
        'Improved query and indexing strategy for growing data volumes.',
      ],
    },
    {
      title: 'Kivo.ai',
      type: 'AI-powered CRM platform',
      status: 'Responsive UI delivery',
      summary:
        'Built reusable and accessible CRM UI components with robust async API integration patterns.',
      tech: ['React.js', 'Tailwind CSS', 'REST APIs', 'React Context'],
      points: [
        'Delivered responsive layouts across desktop, tablet, and mobile.',
        'Handled async states, loading, and error scenarios for API-driven modules.',
        'Used context and custom hooks for reusable dashboard and form flows.',
      ],
    },
    {
      title: 'Contact Sharing App',
      type: 'QR + AI automation platform',
      status: 'Scalable and secure',
      summary:
        'Developed a contact-sharing platform with QR exchange, JWT-secured APIs, and AI extraction from visiting card images.',
      tech: ['Node.js', 'Express.js', 'Google Gemini API', 'Redis', 'MySQL', 'JWT'],
      points: [
        'Implemented JWT-secured APIs and QR-based contact exchange flow.',
        'Built AI extraction pipeline to structure data from visiting card images.',
        'Added role-based admin panel and analytics with Redis-backed performance improvements.',
      ],
    },
  ],
  contactLinks: [
    { label: 'Email', value: 'akshat160403@gmail.com', href: 'mailto:akshat160403@gmail.com' },
    { label: 'Phone', value: '+91 7455966189', href: 'tel:+917455966189' },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/akshat-agrawal-53a6b2283',
      href: 'https://www.linkedin.com/in/akshat-agrawal-53a6b2283',
    },
    { label: 'GitHub', value: 'github.com/Akshat1643', href: 'https://github.com/Akshat1643' },
  ],
} as const
