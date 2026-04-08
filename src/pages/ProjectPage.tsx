import { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, linkLabels } from '../data/projects'
import { spacing, motion as m } from '../theme'

function ImageSlider({ images, title, delay }: { images: string[]; title: string; delay: number }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const go = (dir: number) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + images.length) % images.length)
  }

  const label = images[current].split('/').pop()?.replace(/\.\w+$/, '').replace(/_/g, ' ')

  return (
    <motion.div {...m.pageBlock(delay)}>
      <h2 className="font-serif text-xl font-semibold text-heading mb-4">Gallery</h2>
      <div className="relative rounded-xl border border-border overflow-hidden bg-bg-card">
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden max-w-2xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={current}
              src={images[current]}
              alt={`${title} - ${label}`}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 w-full h-full object-contain p-4"
            />
          </AnimatePresence>

          {/* Arrows */}
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

        {/* Caption + dots */}
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
        {/* Back link */}
        <motion.div {...m.pageBlock(0)}>
          <button
            onClick={goBack}
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover mb-10 cursor-pointer transition-colors"
          >
            &larr; Back to all projects
          </button>
        </motion.div>

        {/* Header */}
        <motion.div {...m.pageBlock(0.1)}>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-heading mb-2">
            {project.title}
          </h1>
          <p className="text-accent/70 mb-6">{project.subtitle}</p>
        </motion.div>

        {/* Links */}
        {Object.keys(project.links).length > 0 && (
          <motion.div {...m.pageBlock(0.2)} className="flex flex-wrap gap-4 mb-10">
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
        )}

        {/* Description */}
        <motion.div {...m.pageBlock(0.3)} className="mb-10">
          <h2 className="font-serif text-xl font-semibold text-heading mb-4">Overview</h2>
          <p className="text-text leading-relaxed text-justify">{project.description}</p>
        </motion.div>

        {/* Stack */}
        <motion.div {...m.pageBlock(0.4)} className="mb-10">
          <h2 className="font-serif text-xl font-semibold text-heading mb-4">Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-md border border-border text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Images */}
        {project.images.length > 0 ? (
          <ImageSlider images={project.images} title={project.title} delay={0.5} />
        ) : (
          <motion.div
            {...m.pageBlock(0.5)}
            className="p-8 border border-dashed border-border rounded-xl text-center text-text-faint"
          >
            Images and visualizations coming soon.
          </motion.div>
        )}
      </div>
    </div>
  )
}
