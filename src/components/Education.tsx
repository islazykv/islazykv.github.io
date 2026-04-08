import Section from './Section'

const education = [
  {
    level: 'Ph.D.',
    degrees: [
      {
        field: 'Particle Physics',
        schools: [
          { name: 'University of Ferrara', location: 'Ferrara, Italy' },
          { name: 'Institute of Nuclear Physics of the Polish Academy of Sciences', location: 'Krakow, Poland' },
        ],
        period: '10.2017 - 07.2021',
      },
    ],
  },
  {
    level: "Master's",
    degrees: [
      {
        field: 'Applied Physics',
        schools: [{ name: 'Krakow University of Technology', location: 'Krakow, Poland' }],
        period: '02.2016 - 05.2017',
      },
    ],
  },
  {
    level: "Bachelor's",
    degrees: [
      {
        field: 'Applied Physics',
        schools: [{ name: 'Krakow University of Technology', location: 'Krakow, Poland' }],
        period: '09.2012 - 02.2016',
      },
      {
        field: 'Civil Engineering',
        schools: [{ name: 'Krakow University of Technology', location: 'Krakow, Poland' }],
        period: '09.2011 - 02.2015',
      },
    ],
  },
]

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[5px] top-3 bottom-3 w-px bg-border" />

        <div className="space-y-8">
          {education.map((group, i) => (
            <div key={i} className="relative pl-8">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 border-text-faint bg-bg" />

              {/* Degree level heading */}
              <h3 className="text-heading font-semibold text-lg mb-4">{group.level}</h3>

              {/* Individual degrees */}
              <div className="space-y-5">
                {group.degrees.map((deg, j) => (
                  <div key={j}>
                    {/* Field + Period */}
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-accent font-semibold text-base">{deg.field}</span>
                      <span className="text-sm text-heading shrink-0 tabular-nums">
                        {deg.period}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-border mt-1.5 mb-1.5" />

                    {/* School(s) + Location(s) */}
                    {deg.schools.map((s, k) => (
                      <div key={k} className="flex items-baseline justify-between gap-4">
                        <span className="text-sm text-text-muted font-medium">{s.name}</span>
                        <span className="text-sm text-text-muted shrink-0">{s.location}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
