import './Experience.css'
import BackToTop from './BackToTop'

const JOBS = [
  {
    company: 'Apple, Inc.',
    role: 'Tier 1 to Carpe Facto Advisor',
    dates: 'August 2019 — Present',
    bullets: [
      'Support products from iPhones to Macs, addressing 50+ technical incidents daily.',
      'Assist customers and Tier 1 Advisers in finding solutions and escalating to engineering.',
      'Work with beta feedback cycles to identify and report issues for upcoming software releases.',
    ],
  },
  {
    company: 'Apple, Inc.',
    role: 'Product Insights Seed Analyst',
    dates: 'April 2024 — October 2024',
    bullets: [
      'Support stakeholders by providing usable cases across iPhone, Mac, and other Apple products.',
      'Assist customers and Tier 1 Advisers in finding solutions and escalating to engineering.',
      'Gather and analyze data to inform product decision-making and software releases.',
    ],
  },
  {
    company: 'Apple, Inc.',
    role: 'Learning Coach Specialist',
    dates: 'February 2022 — July 2022',
    bullets: [
      'Facilitated training sessions, office hours, and program kickoffs to support learning outcomes across teams.',
      'Managed and resolved incoming support tickets, ensuring timely and accurate responses.',
      'Audited course materials and documentation, identifying and escalating accessibility gaps for remediation.',
      'Delivered a live VoiceOver demonstration for Global Accessibility Awareness Day, highlighting inclusive design practices.',
    ],
  },
  {
    company: 'IFB Solutions / Health Net',
    role: 'Logistics Coordinator',
    dates: 'November 2016 — August 2019',
    bullets: [
      'Monitored incoming ticketing queues and resolved up to 50 tickets per day via email, phone, and screen sharing.',
      'Coordinated transportation and lodging for non-military staff deployed to military bases worldwide.',
      'Used data to inform logistics decisions and improve service delivery for healthcare clients.',
    ],
  },
  {
    company: 'BOSS Church',
    role: 'Sound and Video Engineer',
    dates: 'January 2014 — June 2018',
    bullets: [
      'Operated and maintained audio/visual systems for live events and broadcasts.',
    ],
  },
  {
    company: 'Society for the Blind',
    role: 'Assistive Technology Instructor / Youth Coordinator',
    dates: 'February 2012 — August 2015',
    bullets: [
      'Performed assessments to determine the technology needs of blind and low-vision clients.',
      'Recommended and configured appropriate equipment: computers, tablets, mobile devices, braille displays.',
      'Provided training on VoiceOver (iOS/macOS), JAWS for Windows, and other assistive technologies.',
      'Coordinated youth programs as Youth Coordinator (Feb 2012 — Oct 2012).',
    ],
  },
  {
    company: 'Sierra Workforce Solutions',
    role: 'Software / Hardware Support',
    dates: 'October 2008 — March 2010',
    bullets: [
      'Provided hardware and software support on both Windows and Mac platforms.',
      'Diagnosed issues through probing questions and delivered client-appropriate solutions.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <h2 id="experience-heading" className="section-title">Experience</h2>
        <div className="divider" aria-hidden="true" />

        <ol className="timeline" aria-label="Work history in reverse chronological order">
          {JOBS.map((job, i) => (
            <li key={i} className="timeline-item">
              <div className="timeline-marker" aria-hidden="true" />
              <div className="card timeline-card">
                <div className="timeline-header">
                  <div>
                    <p className="timeline-role">{job.role}</p>
                    <p className="timeline-company">{job.company}</p>
                  </div>
                  <time className="timeline-dates">{job.dates}</time>
                </div>
                <ul className="timeline-bullets" aria-label={`Responsibilities at ${job.company}`}>
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <BackToTop />
      </div>
    </section>
  )
}
