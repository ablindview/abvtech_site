import './Portfolio.css'
import BackToTop from './BackToTop'

const PROJECTS = [
  {
    id: 'cpacc-study-guide',
    title: 'CPACC Study Guide',
    description: 'Comprehensive review of all three CPACC domains: Disabilities, Accessibility Standards, and Accessibility Management.',
    url: 'https://iaap.abvtech.net/CPACC_Study_Guide.html',
    urlLabel: 'Open Study Guide',
    tags: ['Accessibility', 'IAAP', 'HTML', 'CSS'],
    isLive: true,
  },
  {
    id: 'cpacc-practice-quiz',
    title: 'CPACC Practice Quiz',
    description: 'Test your knowledge with practice questions covering WCAG, disability models, assistive technology, and more.',
    url: 'https://iaap.abvtech.net/CPACC_Practice_Quiz.html',
    urlLabel: 'Start Quiz',
    tags: ['Accessibility', 'IAAP', 'HTML', 'JavaScript'],
    isLive: true,
  },
  {
    id: 'cpacc-flashcards',
    title: 'CPACC Flashcards',
    description: '100 advanced flashcards organized by domain. Pick a stack, flip each card, and drill the terms you need to know.',
    url: 'https://iaap.abvtech.net/CPACC_Flashcards.html',
    urlLabel: 'Study Flashcards',
    tags: ['Accessibility', 'IAAP', 'HTML', 'JavaScript'],
    isLive: true,
  },
  {
    id: 'audacity-importer',
    title: 'Audacity Raw Importer',
    description: 'A macOS desktop app (AppleScript + Python) that automates importing RAW audio files into Audacity — normalizing, amplifying, setting metadata, and saving the project — with no Terminal required. Fully VoiceOver-accessible.',
    url: 'https://github.com/ablindview/audacity-raw-importer',
    urlLabel: 'View on GitHub',
    tags: ['macOS', 'AppleScript', 'Python', 'Accessibility', 'Audacity'],
    isLive: false,
  },
  {
    id: 'maccessibility-site',
    title: 'Maccessibility Website',
    description: 'Front-end site for the Maccessibility podcast — news and commentary on Apple products and accessibility for blind and visually impaired users, on the air since 2007.',
    url: 'https://github.com/ablindview/maccessibility-site',
    urlLabel: 'View on GitHub',
    tags: ['React', 'Vite', 'Accessibility', 'Podcast'],
    isLive: false,
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-heading">
      <div className="container">
        <h2 id="portfolio-heading" className="section-title">Portfolio</h2>
        <div className="divider" aria-hidden="true" />

        <div className="portfolio-grid">
          {PROJECTS.map(project => (
            <article key={project.id} className="card portfolio-card" aria-label={project.title}>
              <div className="portfolio-card-body">
                <h3 className="portfolio-card-title">{project.title}</h3>
                <p className="portfolio-card-desc">{project.description}</p>
                <ul className="portfolio-tags" aria-label="Technologies">
                  {project.tags.map(tag => (
                    <li key={tag}><span className="badge">{tag}</span></li>
                  ))}
                </ul>
              </div>
              <div className="portfolio-card-footer">
                <a
                  href={project.url}
                  className={`portfolio-link${project.isLive ? ' portfolio-link--live' : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.urlLabel} — ${project.title} (opens in new tab)`}
                >
                  {project.isLive ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  )}
                  {project.urlLabel}
                </a>
              </div>
            </article>
          ))}
        </div>

        <BackToTop />
      </div>
    </section>
  )
}
