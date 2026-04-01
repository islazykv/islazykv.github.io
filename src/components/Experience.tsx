import Section from './Section'

const experiences = [
  {
    role: 'ML Engineer',
    company: 'Company Name',
    period: '2024 - Present',
    description: 'Description of your role and key achievements.',
  },
  {
    role: 'Data Scientist',
    company: 'Company Name',
    period: '2022 - 2024',
    description: 'Description of your role and key achievements.',
  },
]

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="p-6 bg-dark-light border border-dark-lighter rounded-xl hover:border-primary/30 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-white font-semibold text-lg">
                {exp.role}{' '}
                <span className="text-primary-light">@ {exp.company}</span>
              </h3>
              <span className="text-sm text-slate-500">{exp.period}</span>
            </div>
            <p className="text-slate-400">{exp.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
