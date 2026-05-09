import { ContactForm } from './components/ContactForm'
import { Reveal } from './components/Reveal'
import { SectionHeading } from './components/SectionHeading'
import { ThemeToggle } from './components/ThemeToggle'
import { portfolioData } from './data/portfolio'
import { useTheme } from './hooks/useTheme'
import { useState } from 'react'

function App() {
  const { isDark, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { about, certifications, contactLinks, hero, navItems, projects, skills, stats } =
    portfolioData

  const contactEmail =
    contactLinks.find((link) => link.href.startsWith('mailto:'))?.href.replace('mailto:', '') ??
    contactLinks[0]?.value ??
    'hello@example.com'

  function scrollToSection(sectionId: string) {
    const sectionElement = document.getElementById(sectionId)

    sectionElement?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', `#${sectionId}`)
  }

  const palette = isDark
    ? {
        page: 'text-slate-100',
        header: 'border-white/10 bg-slate-950/70 backdrop-blur-xl',
        navLink: 'text-slate-300 hover:bg-white/5 hover:text-white',
        primaryAction:
          'border-cyan-400/30 bg-cyan-400/10 text-cyan-100 hover:bg-cyan-400/20',
        heroBadge: 'border-white/10 bg-white/5 text-slate-300',
        heroPanel: 'border-white/10 bg-slate-900/80 text-slate-100',
        panel: 'border-white/10 bg-white/5',
        panelMuted: 'border-white/10 bg-slate-950/50',
        chip: 'border-white/10 bg-slate-950/60 text-slate-200',
        techChip: 'bg-cyan-400/10 text-cyan-100',
        projectCard: 'border-white/10 bg-slate-950/60',
        contactWrap: 'border-white/10 bg-gradient-to-br from-cyan-400/12 via-white/5 to-emerald-400/12',
        subtle: 'text-slate-400',
        body: 'text-slate-300',
        heading: 'text-white',
        cardKicker: 'text-cyan-200/80',
        stat: 'border-white/10 bg-white/5',
        pageGlow: 'bg-[radial-gradient(circle_at_top,_rgba(72,187,255,0.24),_transparent_52%)]',
      }
    : {
        page: 'text-slate-900',
        header: 'border-slate-200 bg-white/95 backdrop-blur-xl',
        navLink: 'text-slate-700 hover:bg-slate-100 hover:text-slate-950 font-500',
        primaryAction: 'border-cyan-600 bg-cyan-600 text-white hover:bg-cyan-700 hover:border-cyan-700',
        secondaryAction: 'border-slate-300 bg-slate-100 text-slate-900 hover:bg-slate-200',
        heroBadge: 'border-slate-200 bg-white/80 text-slate-700',
        heroPanel: 'border-slate-200 bg-white/85 text-slate-900',
        panel: 'border-slate-200 bg-slate-50/80',
        panelMuted: 'border-slate-200 bg-slate-50/60',
        chip: 'border-slate-300 bg-slate-100 text-slate-700',
        techChip: 'bg-cyan-100 text-cyan-800',
        projectCard: 'border-slate-200 bg-white/85',
        contactWrap: 'border-slate-200 bg-gradient-to-br from-cyan-100 via-white to-emerald-100',
        subtle: 'text-slate-500',
        body: 'text-slate-700',
        heading: 'text-slate-950',
        cardKicker: 'text-cyan-700/90',
        stat: 'border-slate-200 bg-white/80',
        pageGlow: 'bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_52%)]',
      }

  return (
    <div className={`relative overflow-hidden ${palette.page}`}>
      <div className={`absolute inset-x-0 top-0 -z-10 h-136 ${palette.pageGlow}`} />
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute left-0 top-144 -z-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

      <header className={`sticky top-0 z-40 border-b ${palette.header}`}>
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <button type="button" onClick={() => scrollToSection('home')} className="flex shrink-0 items-center gap-2 text-left">
            <span
              className={`grid h-10 w-10 place-items-center rounded-2xl border text-xs font-bold tracking-[0.28em] ${isDark ? 'border-white/15 bg-white/5 text-cyan-200' : 'border-cyan-600 bg-cyan-50 text-cyan-600'}`}
            >
              PF
            </span>
            <div className="hidden sm:block">
              <p className={`text-xs font-semibold tracking-[0.26em] uppercase ${palette.cardKicker}`}>
                Portfolio
              </p>
              <p className={`text-xs ${palette.subtle}`}>React</p>
            </div>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.label}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className={`rounded-md px-3 py-1.5 text-xs sm:text-sm transition ${palette.navLink}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
              className={`lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border p-1.5 ${palette.panel}`}
            >
              {!mobileOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <a
              href={hero.ctaTertiary.href}
              download
                className={`hidden lg:inline-block rounded-full border px-3 py-1.5 text-xs sm:text-sm font-semibold transition ${palette.primaryAction}`}
            >
              Resume
            </a>
            <a
              href={hero.ctaPrimary.href}
              className={`hidden lg:inline-block rounded-full border px-3 py-1.5 text-xs sm:text-sm font-semibold transition ${palette.primaryAction}`}
            >
              Contact
            </a>
          </div>
        </div>

        {mobileOpen && (
          <div className={`lg:hidden border-t ${palette.header}`}>
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => {
                      setMobileOpen(false)
                      scrollToSection(item.href.replace('#', ''))
                    }}
                    className={`w-full text-left rounded-md px-4 py-3 text-sm transition ${palette.navLink}`}
                  >
                    {item.label}
                  </button>
                ))}

                <div className="mt-3 flex gap-2">
                  <a href={hero.ctaPrimary.href} className={`flex-1 text-center rounded-full border px-4 py-2 text-sm font-semibold transition ${palette.primaryAction}`}>{hero.ctaPrimary.label}</a>
                  <a href={hero.ctaTertiary.href} download className={`flex-1 text-center rounded-full border px-4 py-2 text-sm font-semibold transition ${palette.primaryAction}`}>{hero.ctaTertiary.label}</a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
          <Reveal className="flex flex-col justify-center">
            <p className={`mb-4 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm ${palette.heroBadge}`}>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              {hero.badge}
            </p>
            <h1
              className={`max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${isDark ? 'text-white' : 'text-slate-950'}`}
            >
              {hero.title}
            </h1>
            <p className={`mt-6 max-w-2xl text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed ${palette.body}`}>
              {hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition ${palette.primaryAction}`}
              >
                {hero.ctaPrimary.label}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('portfolio')}
                className={`inline-flex items-center justify-center rounded-full border px-6 py-3 font-semibold transition ${palette.secondaryAction}`}
              >
                {hero.ctaSecondary.label}
              </button>
              <a
                href={hero.ctaTertiary.href}
                download
                className={`inline-flex items-center justify-center rounded-full border px-6 py-3 font-semibold transition ${palette.secondaryAction}`}
              >
                {hero.ctaTertiary.label}
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <Reveal
                  as="article"
                  key={stat.label}
                  delayMs={120}
                  className={`rounded-3xl border p-5 shadow-2xl shadow-slate-950/20 backdrop-blur ${palette.stat}`}
                >
                  <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    {stat.value}
                  </p>
                  <p className={`mt-1 text-sm ${palette.subtle}`}>{stat.label}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="absolute inset-x-8 top-8 h-56 rounded-full bg-cyan-400/20 blur-3xl" />
            <div
              className={`relative overflow-hidden rounded-4xl border p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl ${palette.heroPanel}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className={`text-xs sm:text-sm uppercase tracking-[0.28em] ${palette.cardKicker}`}>Focus</p>
                  <h2 className={`mt-2 text-lg sm:text-xl md:text-2xl font-bold ${palette.heading}`}>{hero.focusTitle}</h2>
                </div>
                <div className={`rounded-2xl border px-4 py-3 text-right ${palette.panel}`}>
                  <p className={`text-xs uppercase tracking-[0.3em] ${palette.subtle}`}>Based in</p>
                  <p className={`mt-1 text-sm font-semibold ${palette.heading}`}>{hero.location}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                {about.highlights.map((highlight) => (
                  <div key={highlight} className={`rounded-2xl border px-4 py-4 text-sm ${palette.panel} ${palette.body}`}>
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {contactLinks.slice(0, 2).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`rounded-2xl border px-4 py-4 text-sm transition ${palette.panelMuted} ${palette.body}`}
                  >
                    <span className={`block text-xs uppercase tracking-[0.24em] ${palette.subtle}`}>
                      {link.label}
                    </span>
                    <span className={`mt-1 block font-medium ${palette.heading}`}>{link.value}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <Reveal as="section" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16 scroll-mt-28" id="about">
          <SectionHeading
            eyebrow="About"
            title="A portfolio layout that feels polished from the first screen"
            description={about.summary}
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className={`rounded-4xl border p-6 shadow-2xl shadow-slate-950/20 ${palette.panel}`}>
              <dl className="grid gap-4 sm:grid-cols-2">
                {about.details.map((detail) => (
                  <div key={detail.label} className={`rounded-2xl border p-4 ${palette.panelMuted}`}>
                    <dt className={`text-xs uppercase tracking-[0.28em] ${palette.subtle}`}>{detail.label}</dt>
                    <dd className={`mt-2 text-base font-semibold ${palette.heading}`}>{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {about.cards.map((card, index) => (
                <Reveal
                  as="article"
                  key={card.title}
                  delayMs={index * 100}
                  className={`rounded-4xl border p-6 shadow-xl shadow-slate-950/15 ${palette.panelMuted}`}
                >
                  <p className={`text-xs sm:text-sm uppercase tracking-[0.28em] ${palette.cardKicker}`}>{card.kicker}</p>
                  <h3 className={`mt-3 text-lg sm:text-xl font-bold ${palette.heading}`}>{card.title}</h3>
                  <p className={`mt-3 text-sm leading-7 ${palette.body}`}>{card.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16 scroll-mt-28" id="skills">
          <SectionHeading
            eyebrow="Skills"
            title="A clear breakdown of the tools and systems used most often"
            description="Organized into focused groups so the page reads like a real technical portfolio, not a random pile of keywords."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {skills.map((group, index) => (
              <Reveal
                as="article"
                key={group.title}
                delayMs={index * 100}
                className={`rounded-4xl border p-6 shadow-2xl shadow-slate-950/15 ${palette.panel}`}
              >
                <h3 className={`text-lg sm:text-xl font-bold ${palette.heading}`}>{group.title}</h3>
                <p className={`mt-2 text-sm ${palette.subtle}`}>{group.description}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span key={item} className={`rounded-full border px-4 py-2 text-sm ${palette.chip}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16 scroll-mt-28" id="certifications">
          <SectionHeading
            eyebrow="Certifications"
            title="A compact credentials block that still feels premium"
            description="Keep the certifications visible without overwhelming the rest of the page."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((certification, index) => (
              <Reveal
                as="article"
                key={certification.title}
                delayMs={index * 100}
                className={`rounded-[1.75rem] border p-5 shadow-xl shadow-slate-950/15 ${palette.panel}`}
              >
                <p className={`text-xs sm:text-sm uppercase tracking-[0.3em] ${palette.subtle}`}>{certification.year}</p>
                <h3 className={`mt-3 text-sm sm:text-base md:text-lg font-bold ${palette.heading}`}>{certification.title}</h3>
                <p className={`mt-2 text-sm leading-7 ${palette.body}`}>{certification.description}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16 scroll-mt-28" id="portfolio">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work presented as reusable project cards"
            description="Each card can be swapped with your own projects later without changing the layout."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal
                as="article"
                key={project.title}
                delayMs={index * 100}
                className={`group rounded-4xl border p-6 shadow-2xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-300/30 ${palette.projectCard}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className={`text-xs sm:text-sm uppercase tracking-[0.28em] ${palette.cardKicker}`}>{project.type}</p>
                    <h3 className={`mt-2 text-lg sm:text-xl md:text-2xl font-bold ${palette.heading}`}>{project.title}</h3>
                  </div>
                  <span className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.28em] ${palette.chip}`}>
                    {project.status}
                  </span>
                </div>

                <p className={`mt-4 text-sm leading-7 ${palette.body}`}>{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${palette.techChip}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <ul className={`mt-5 grid gap-3 text-sm leading-7 ${palette.body}`}>
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="mx-auto w-full max-w-7xl px-4 py-8 pb-20 sm:px-6 lg:px-8 lg:py-16 scroll-mt-28" id="contact">
          <div className={`rounded-[2.25rem] border p-8 shadow-2xl shadow-cyan-950/20 sm:p-10 ${palette.contactWrap}`}>
            <SectionHeading
              eyebrow="Contact"
              title="A final section that makes next steps obvious"
              description="Use the form below to open the recipient email client, or use the links beside it."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="grid gap-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`rounded-3xl border p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/30 ${palette.panelMuted}`}
                  >
                    <p className={`text-xs uppercase tracking-[0.3em] ${palette.subtle}`}>{link.label}</p>
                    <p className={`mt-3 text-base font-semibold ${palette.heading}`}>{link.value}</p>
                  </a>
                ))}
              </div>

              <ContactForm recipientEmail={contactEmail} isDark={isDark} />
            </div>
          </div>
        </Reveal>
      </main>
    </div>
  )
}

export default App
