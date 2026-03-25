import './Education.css'

const EDUCATION = [
  {
    institution: 'ITIL\u00ae Foundation',
    credential: 'Certificate in IT Service Management',
    detail: 'Industry-standard framework for IT service management best practices.',
    type: 'Certification',
  },
  {
    institution: 'Udacity',
    credential: 'Front End Web Development Fundamentals',
    detail: 'Nano-Degree covering HTML, CSS, JavaScript, and responsive design principles.',
    type: 'Nano-Degree',
  },
  {
    institution: 'Assistive Technology Institute (ATI)',
    credential: 'Assistive Technology Certification',
    detail: 'Specialized certification in assistive technology assessment and training.',
    type: 'Certification',
  },
  {
    institution: 'National University (California)',
    credential: 'BS in Information Technology',
    detail: '25 units completed toward a Bachelor of Science in Information Technology.',
    type: 'In Progress',
  },
]

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading">
      <div className="container">
        <span className="section-label" aria-hidden="true">Learning</span>
        <h2 id="education-heading" className="section-title">Education &amp; Certifications</h2>
        <div className="divider" aria-hidden="true" />

        <div className="education-grid">
          {EDUCATION.map((item) => (
            <article key={item.credential} className="card education-card" aria-label={`${item.credential} from ${item.institution}`}>
              <div className="education-type-badge">
                <span className="badge">{item.type}</span>
              </div>
              <h3 className="education-credential">{item.credential}</h3>
              <p className="education-institution">{item.institution}</p>
              <p className="education-detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
