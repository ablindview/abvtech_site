import './About.css'
import BackToTop from './BackToTop'

const SPECIALTIES = [
  'Python Programming',
  'Client Communication',
  'Service Delivery',
  'Technical Writing',
  'Documentation Support',
  'Troubleshooting',
  'WAN Configuration',
  'Microsoft Office Suite',
  'VoiceOver (iOS/macOS)',
  'JAWS for Windows',
  'ZenDesk',
  'WCAG Compliance',
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading" className="section-title">About Me</h2>
        <div className="divider" aria-hidden="true" />

        <div className="about-grid">
          <div className="about-bio">
            <p>
              I am a highly motivated and goal-oriented professional with extensive
              experience in information technology, accessible technology, and staff
              management. I am skilled at analyzing and resolving IT issues to ensure
              high levels of customer satisfaction.
            </p>
            <p>
              With over 4 years of hands-on experience assessing the technology needs
              of blind and low-vision individuals, I provide solutions that meet real
              needs and train clients on technologies ranging from VoiceOver on iOS
              and macOS to JAWS for Windows.
            </p>
            <p>
              Currently seeking roles in <strong>QA testing</strong> and{' '}
              <strong>accessibility</strong> where I can apply my technical depth,
              advocacy mindset, and commitment to inclusive design.
            </p>
          </div>

          <div className="about-specialties">
            <h3 className="about-specialties-title">Specialties</h3>
            <ul className="specialties-list" aria-label="List of specialties">
              {SPECIALTIES.map(s => (
                <li key={s}>
                  <span className="badge">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <BackToTop />
      </div>
    </section>
  )
}
