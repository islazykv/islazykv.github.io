import Section from './Section'

const experiences = [
  {
    role: 'Postdoctoral Researcher in ML',
    company: 'Hogskulen pa Vestlandet',
    location: 'Bergen, Norway',
    period: '01.2022 - 05.2026',
    points: [
      'Built end-to-end, multi-stage data pipelines processing high-volume physics datasets, from raw ingestion to model-ready outputs',
      'Designed scalable ETL/ELT workflows for data transformation and feature engineering',
      'Implemented data validation and quality checks across pipeline stages',
      'Tracked data versions, experiments and model artifacts using MLflow and W&B for full pipeline observability',
      'Maintained well-tested, maintainable code with automated testing, refactoring and CI/CD via GitHub Actions',
      'Communicated analytical results to cross-functional teams of engineers, analysts and domain experts',
    ],
  },
  {
    role: 'Affiliated Researcher (ATLAS)',
    company: 'CERN',
    location: 'Geneva, Switzerland',
    period: '01.2022 - 12.2025',
    points: [
      'Developed data transformation software within a distributed processing framework (Athena) operating at large scale',
      'Built and maintained modular data processing components integrated into high-throughput workflows',
      'Optimized pipeline performance and refactored legacy code within a large collaborative codebase',
      'Validated output data quality and interpreted results to confirm pipeline correctness',
      'Collaborated with developers, analysts and domain experts on shared data tooling and infrastructure',
    ],
  },
  {
    role: 'Affiliated Researcher (LHCb)',
    company: 'CERN',
    location: 'Geneva, Switzerland',
    period: '12.2017 - 03.2021',
    points: [
      'Built an automated data quality monitoring system (C++/Python/LabVIEW) for continuous QA of measurement outputs',
      'Developed data processing scripts and tooling for structured measurement pipelines',
      'Analyzed QA output data to detect anomalies and failure patterns across large datasets',
      'Explored ML-based anomaly detection for automated performance classification',
    ],
  },
  {
    role: 'R&D Physics Intern',
    company: 'Camlin Technologies',
    location: 'Zurich, Switzerland',
    period: '04.2016 - 09.2016',
    points: [
      'Built data collection and processing workflows for semiconductor measurement data',
      'Analyzed experimental measurement data to extract and compare material properties',
      'Collaborated with software developers and physicists on shared analysis workflows',
    ],
  },
]

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative">
        <div className="absolute left-[5px] top-3 bottom-3 w-px bg-border" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8">
              <div className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 border-text-faint bg-bg" />

              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-heading font-semibold text-base">{exp.role}</h3>
                <span className="text-sm text-heading shrink-0 tabular-nums">
                  {exp.period}
                </span>
              </div>

              <div className="h-px bg-border mt-1.5 mb-1.5" />

              <div className="flex items-baseline justify-between gap-4 mb-3">
                <span className="text-sm text-accent font-medium">{exp.company}</span>
                <span className="text-sm text-heading shrink-0">{exp.location}</span>
              </div>

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
