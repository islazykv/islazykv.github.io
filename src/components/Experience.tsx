import Section from './Section'

const experiences = [
  {
    role: 'Postdoctoral Research Fellow',
    company: 'Hogskulen pa Vestlandet',
    location: 'Bergen, Norway',
    period: '01.2022 - currently',
    points: [
      'Development of ML models for data analysis in high-energy physics',
      'Design and implementation of scalable end-to-end ML pipelines',
      'Data preprocessing, feature engineering, model evaluation and optimization',
      'Data analysis and interpretation of results from ML-based physics searches',
      'Code maintenance, refactoring and automated testing',
      'Preparation of publications and presentation of ML results',
    ],
  },
  {
    role: 'Affiliated Researcher (ATLAS)',
    company: 'CERN',
    location: 'Geneve, Switzerland',
    period: '01.2022 - 03.2026',
    points: [
      'Software development within the ATLAS experiment framework (Athena)',
      'Development of TauCP software for tau particle reconstruction and identification',
      'Code optimization, refactoring and integration into large-scale workflows',
      'Evaluation and interpretation of physics analysis results',
      'Collaboration with developers, analysts and physicists on software and data tools',
    ],
  },
  {
    role: 'Affiliated Researcher (LHCb)',
    company: 'CERN',
    location: 'Geneve, Switzerland',
    period: '01.2018 - 03.2021',
    points: [
      'Software development for automated quality assurance of RICH detector modules',
      'Data analysis of quality assurance results for elementary detector cells',
      'Development of data processing scripts and tools for measurement workflows',
      'Hardware assembly, testing and quality control measurements',
      'Initial exploration of ML approaches for detector data analysis',
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'Freelance',
    location: 'Krakow, Poland',
    period: '10.2016 - 09.2017',
    points: [
      'Development of responsive websites using React.js',
      'Collaboration with back-end developers on feature integration and functionality',
    ],
  },
  {
    role: 'R&D Physics Intern',
    company: 'Camlin Technologies',
    location: 'Zurich, Switzerland',
    period: '04.2016 - 09.2016',
    points: [
      'Data analysis of optical and quantum measurements of semiconductor materials',
      'Data collection and processing for photoluminescence spectroscopy',
      'Collaboration with software developers and physicists on analysis workflows',
    ],
  },
]

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[5px] top-3 bottom-3 w-px bg-border" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 border-text-faint bg-bg" />

              {/* Role + Period */}
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-heading font-semibold text-base">{exp.role}</h3>
                <span className="text-sm text-heading shrink-0 tabular-nums">
                  {exp.period}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-border mt-1.5 mb-1.5" />

              {/* Company + Location */}
              <div className="flex items-baseline justify-between gap-4 mb-3">
                <span className="text-sm text-accent font-medium">{exp.company}</span>
                <span className="text-sm text-heading shrink-0">{exp.location}</span>
              </div>

              {/* Points */}
              <ul className="space-y-1.5">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-sm text-text-muted flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-faint mt-1.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
