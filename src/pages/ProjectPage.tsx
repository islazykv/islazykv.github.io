import { useEffect, useState, type ReactNode } from 'react'
import { useParams, useNavigate } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, linkLabels, type StackGroup } from '../data/projects'
import { spacing, motion as m } from '../theme'

function renderInlineLinks(text: string): ReactNode[] {
  const parts: ReactNode[] = []
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    parts.push(
      <a
        key={key++}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-accent-hover underline-offset-2 hover:underline transition-colors"
      >
        {match[1]}
      </a>
    )
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  return parts
}

type Slide = string | string[] | { images: string[]; direction: 'row' | 'col' }

function ImageSlider({ images, title, delay }: { images: Slide[]; title: string; delay: number }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const go = (dir: number) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + images.length) % images.length)
  }

  const slide = images[current]
  const slideImages =
    typeof slide === 'string' ? [slide] : Array.isArray(slide) ? slide : slide.images
  const slideDirection: 'row' | 'col' =
    typeof slide === 'string' || Array.isArray(slide) ? 'row' : slide.direction
  const isPair = slideImages.length > 1
  const isVertical = isPair && slideDirection === 'col'
  const labelFor = (src: string) =>
    src.split('/').pop()?.replace(/\.\w+$/, '').replace(/_/g, ' ') ?? ''
  const label = slideImages.map(labelFor).join(' · ')

  return (
    <motion.div {...m.pageBlock(delay)}>
      <h2 className="font-serif text-xl font-semibold text-heading mb-4">Gallery</h2>
      <div className="relative rounded-xl border border-border overflow-hidden bg-bg-card">
        <div className="relative aspect-[2/1] overflow-hidden mx-auto max-w-4xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.25 }}
              className={`absolute inset-0 flex items-center justify-center gap-2 p-4 ${isVertical ? 'flex-col' : 'flex-row'}`}
            >
              {slideImages.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={`${title} - ${labelFor(src)}`}
                  className={
                    isVertical
                      ? 'max-w-full max-h-full object-contain flex-1 min-h-0'
                      : `max-w-full object-contain flex-1 min-w-0 ${isPair ? 'max-h-[85%]' : 'max-h-full'}`
                  }
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-bg/80 border border-border text-heading flex items-center justify-center hover:border-accent transition-colors cursor-pointer"
          >
            &#8249;
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-bg/80 border border-border text-heading flex items-center justify-center hover:border-accent transition-colors cursor-pointer"
          >
            &#8250;
          </button>
        </div>

        <div className="px-4 py-3 border-t border-border flex items-center justify-between">
          <span className="text-sm text-text-muted capitalize">{label}</span>
          <div className="flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                  i === current ? 'bg-accent' : 'bg-border hover:bg-text-faint'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const goBack = () => {
    navigate('/')
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="font-serif text-3xl font-bold text-heading mb-4">Project not found</h1>
        <button
          onClick={goBack}
          className="text-accent hover:text-accent-hover cursor-pointer"
        >
          &larr; Back to portfolio
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className={spacing.containerMd}>
        <motion.div {...m.pageBlock(0)}>
          <button
            onClick={goBack}
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover mb-10 cursor-pointer transition-colors"
          >
            &larr; Back to all projects
          </button>
        </motion.div>

        <motion.div {...m.pageBlock(0.1)}>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-heading mb-2">
            {project.title}
          </h1>
          <p className="text-accent/70 mb-6">{project.subtitle}</p>
        </motion.div>

        <motion.div {...m.pageBlock(0.2)} className="flex flex-wrap gap-4 mb-10">
          {!project.links.repository && !project.links.notebook && !project.links.publication && (
            <span className="px-4 py-2 text-sm border border-border text-text-faint rounded-lg">
              Internal Project
            </span>
          )}
          {Object.entries(project.links).map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm border border-border text-text-muted rounded-lg hover:border-accent hover:text-accent transition-colors"
            >
              {linkLabels[key] || key} &rarr;
            </a>
          ))}
        </motion.div>

        {project.points.length > 0 && (
          <motion.div {...m.pageBlock(0.25)} className="mb-10">
            <h2 className="font-serif text-xl font-semibold text-heading mb-4">Highlights</h2>
            <ul className="space-y-2">
              {project.points.map((point, i) => (
                <li key={i} className="text-text flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        <motion.div {...m.pageBlock(0.3)} className="mb-10">
          <h2 className="font-serif text-xl font-semibold text-heading mb-4">Overview</h2>
          <div className="space-y-4">
            {project.description.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-text leading-relaxed text-justify">
                {renderInlineLinks(paragraph)}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div {...m.pageBlock(0.4)} className="mb-10">
          <h2 className="font-serif text-xl font-semibold text-heading mb-4">Stack</h2>
          {typeof project.tags[0] === 'string' ? (
            <div className="flex flex-wrap gap-2">
              {(project.tags as string[]).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-md border border-border text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {(project.tags as StackGroup[]).map((group) => (
                <div key={group.category} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                  <div className="text-sm font-medium text-text sm:w-56 sm:shrink-0 sm:pt-1">
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-sm rounded-md border border-border text-text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {project.images.length > 0 && (
          <ImageSlider images={project.images} title={project.title} delay={0.5} />
        )}
      </div>
    </div>
  )
}
