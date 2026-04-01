import Section from './Section'

const projects = [
  {
    title: 'Project One',
    description: 'Short description of the project and what problem it solves.',
    tags: ['Python', 'PyTorch', 'NLP'],
    github: '#',
  },
  {
    title: 'Project Two',
    description: 'Short description of the project and what problem it solves.',
    tags: ['TensorFlow', 'Computer Vision', 'Docker'],
    github: '#',
  },
  {
    title: 'Project Three',
    description: 'Short description of the project and what problem it solves.',
    tags: ['Scikit-learn', 'FastAPI', 'AWS'],
    github: '#',
  },
]

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="p-6 bg-dark-light border border-dark-lighter rounded-xl hover:border-primary/30 transition-colors group"
          >
            <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-primary-light transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-dark border border-dark-lighter rounded text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              className="text-sm text-primary-light hover:text-white transition-colors"
            >
              GitHub &rarr;
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}
