import './Portfolio.css'

export default function Portfolio() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-heading">
      <div className="container">
        <span className="section-label" aria-hidden="true">Work</span>
        <h2 id="portfolio-heading" className="section-title">Portfolio</h2>
        <div className="divider" aria-hidden="true" />

        <div className="portfolio-coming-soon" role="status" aria-live="polite">
          <div className="portfolio-icon" aria-hidden="true">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </div>
          <h3 className="portfolio-cs-title">Projects Coming Soon</h3>
          <p className="portfolio-cs-text">
            I'm currently documenting and preparing projects for showcase here.
            Check back soon, or follow my{' '}
            <a href="https://github.com/ablindview" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in new tab)">
              GitHub
            </a>{' '}
            for updates.
          </p>
        </div>
      </div>
    </section>
  )
}
