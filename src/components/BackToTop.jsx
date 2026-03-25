import './BackToTop.css'

export default function BackToTop() {
  return (
    <div className="back-to-top-wrap">
      <a href="#hero" className="back-to-top" aria-label="Return to top of page">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 15l-6-6-6 6" />
        </svg>
        Return to top
      </a>
    </div>
  )
}
