import { Link } from 'react-router'
import Section from './Section'
import { projects, linkLabels } from '../data/projects'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="group block p-6 rounded-xl border border-border bg-bg-card hover:border-border-hover transition-colors no-underline"
          >
            <h3 className="text-heading font-semibold text-lg group-hover:text-accent transition-colors mb-1">
              {project.title}
            </h3>
            <p className="text-xs text-accent/70 mb-3">
              {project.subtitle}
            </p>

            <ul className="space-y-1.5 mb-4">
              {project.points.map((point, j) => (
                <li key={j} className="text-sm text-text-muted flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded border border-border text-text-faint"
                >
                  {tag}
                </span>
              ))}
            </div>

            {Object.keys(project.links).length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
                {Object.entries(project.links).map(([key, url]) => (
                  <span
                    key={key}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      window.open(url, '_blank')
                    }}
                    className="text-xs text-accent hover:text-accent-hover cursor-pointer"
                  >
                    {linkLabels[key] || key} &rarr;
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </Section>
  )
}
