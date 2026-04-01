import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="text-slate-300 space-y-4">
          <p>
            Brief introduction about yourself, your background, and what drives
            you as a Machine Learning Engineer.
          </p>
          <p>
            Mention your key areas of interest and expertise here.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Docker', 'AWS', 'SQL', 'Git'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-dark-light border border-dark-lighter rounded-md text-primary-light"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
