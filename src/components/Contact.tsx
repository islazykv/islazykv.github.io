import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-text-muted mb-8">
          I'm currently open to new opportunities. Whether you have a question
          or just want to say hi, feel free to reach out!
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:islazykv@gmail.com"
            className="flex-1 max-w-40 px-6 py-3 bg-accent rounded-lg hover:bg-accent-hover transition-colors text-sm font-medium text-center"
            style={{ color: 'var(--theme-btn-text)' }}
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/igor-slazyk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 max-w-40 px-6 py-3 bg-accent rounded-lg hover:bg-accent-hover transition-colors text-sm font-medium text-center"
            style={{ color: 'var(--theme-btn-text)' }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/islazykv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 max-w-40 px-6 py-3 bg-accent rounded-lg hover:bg-accent-hover transition-colors text-sm font-medium text-center"
            style={{ color: 'var(--theme-btn-text)' }}
          >
            GitHub
          </a>
        </div>
      </div>
    </Section>
  )
}
