import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="space-y-8 md:w-1/2">
          <div className="text-text space-y-4 leading-relaxed text-justify">
            <p>
              ML engineer with <strong className="text-heading font-semibold">8 years of experience</strong> in
              data science, including 4 years focused on machine learning. Passionate about turning data into
              valuable insights and impactful solutions. Driven to produce high-quality, scalable code and
              models. Collaborative team player, eager to contribute to projects at the intersection
              of <strong className="text-heading font-semibold">software and AI</strong>.
            </p>
          </div>
          <div className="text-text space-y-4 leading-relaxed text-justify">
            <p>
              ML engineer with <strong className="text-heading font-semibold">8 years of experience</strong> in
              data science, including 4 years focused on machine learning. Passionate about turning data into
              valuable insights and impactful solutions. Driven to produce high-quality, scalable code and
              models. Collaborative team player, eager to contribute to projects at the intersection
              of <strong className="text-heading font-semibold">software and AI</strong>.
            </p>
          </div>
          <div className="text-text space-y-4 leading-relaxed text-justify">
            <p>
              ML engineer with <strong className="text-heading font-semibold">8 years of experience</strong> in
              data science, including 4 years focused on machine learning. Passionate about turning data into
              valuable insights and impactful solutions. Driven to produce high-quality, scalable code and
              models. Collaborative team player, eager to contribute to projects at the intersection
              of <strong className="text-heading font-semibold">software and AI</strong>.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/me.png"
            alt="Profile photo"
            className="rounded-2xl max-w-sm w-full border border-border"
          />
        </div>
      </div>
    </Section>
  )
}
