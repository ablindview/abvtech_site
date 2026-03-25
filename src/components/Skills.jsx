import './Skills.css'
import BackToTop from './BackToTop'

const SKILL_GROUPS = [
  {
    category: 'Accessibility & Assistive Tech',
    icon: '♿',
    skills: ['VoiceOver (iOS)', 'VoiceOver (macOS)', 'JAWS for Windows', 'WCAG 2.1 AA', 'Braille Display Support', 'Accessibility Assessments', 'Inclusive Design'],
  },
  {
    category: 'Quality Assurance',
    icon: '✔',
    skills: ['Bug Reporting', 'Beta Testing', 'Incident Triage', 'Test Documentation', 'Product Feedback Cycles', 'Regression Testing'],
  },
  {
    category: 'Technical Support',
    icon: '🖥',
    skills: ['macOS', 'Windows', 'iOS', 'Hardware Troubleshooting', 'WAN Configuration', 'ZenDesk', 'Radar', 'Quip', 'Slack'],
  },
  {
    category: 'Programming & Tools',
    icon: '{ }',
    skills: ['Python', 'Microsoft Office Suite', 'Technical Writing', 'Documentation', 'Front-End Web Basics'],
  },
  {
    category: 'Soft Skills',
    icon: '★',
    skills: ['Client Communication', 'Service Delivery', 'Staff Management', 'Interpersonal Skills', 'Problem Solving', 'Data Analysis'],
  },
]

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <h2 id="skills-heading" className="section-title">Skills</h2>
        <div className="divider" aria-hidden="true" />

        <div className="skills-grid">
          {SKILL_GROUPS.map(group => (
            <div key={group.category} className="card skill-card">
              <div className="skill-category-header">
                <span className="skill-icon" aria-hidden="true">{group.icon}</span>
                <h3 className="skill-category">{group.category}</h3>
              </div>
              <ul className="skill-list" aria-label={`${group.category} skills`}>
                {group.skills.map(skill => (
                  <li key={skill}>
                    <span className="badge">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <BackToTop />
      </div>
    </section>
  )
}
