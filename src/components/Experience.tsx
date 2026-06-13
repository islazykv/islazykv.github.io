import Section from './Section'

const experiences = [
  {
    role: 'Postdoctoral Researcher',
    period: '01.2022 - 05.2026',
    orgs: [
      { name: 'Høgskulen på Vestlandet', location: 'Bergen, Norway' },
      { name: 'CERN · ATLAS Collaboration', location: 'Geneva, Switzerland' },
    ],
    points: [
      'Built end-to-end, multi-stage data and ML pipelines processing datasets of 10M+ events, from raw ingestion to model-ready outputs',
      'Trained and evaluated ML models (XGBoost, PyTorch) for classification, regression and anomaly detection, tracked with MLflow and W&B',
      'Developed data transformation software within a distributed processing framework (Athena) operating at petabyte scale',
      'Designed scalable ETL/ELT workflows for data preparation and feature engineering',
      'Optimized pipeline performance and refactored legacy code in a 4M-line collaborative codebase',
      'Implemented data validation and quality checks across pipeline stages',
      'Established automated testing and CI/CD pipelines for reliable, reproducible data and ML workflows',
      'Communicated analytical results to cross-functional teams of engineers, analysts and domain experts',
    ],
  },
  {
    role: 'Doctoral Researcher',
    period: '10.2017 - 07.2021',
    orgs: [
      { name: 'University of Ferrara', location: 'Ferrara, Italy' },
      { name: 'CERN · LHCb Collaboration', location: 'Geneva, Switzerland' },
    ],
    points: [
      'Built an automated data quality monitoring system (C++/Python/LabVIEW) for continuous QA of measurement outputs',
      'Developed data processing scripts and tooling for structured measurement pipelines',
      'Analyzed QA output data to detect anomalies and failure patterns across large datasets',
      'Explored ML-based anomaly detection for automated performance classification',
    ],
  },
  {
    role: 'Front-End Developer',
    period: '10.2016 - 09.2017',
    orgs: [
      { name: 'Freelance', location: 'Krakow, Poland' },
    ],
    points: [
      'Built responsive websites using React.js',
      'Collaborated with back-end developers on feature integration',
    ],
  },
  {
    role: 'R&D Physics Intern',
    period: '04.2016 - 09.2016',
    orgs: [
      { name: 'Camlin Technologies', location: 'Zurich, Switzerland' },
    ],
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

              <div className="space-y-0.5 mb-3">
                {exp.orgs.map((org, k) => (
                  <div key={k} className="flex items-baseline justify-between gap-4">
                    <span className="text-sm text-accent font-medium">{org.name}</span>
                    <span className="text-sm text-heading shrink-0">{org.location}</span>
                  </div>
                ))}
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
