export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left — contact CTA */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-heading mb-3">
              Let's connect
            </h3>
            <p className="text-text-muted text-sm max-w-sm mb-4">
              I'm currently open to new opportunities. Whether you have a question
              or just want to say hi, feel free to reach out.
            </p>
            <a
              href="mailto:islazykv@gmail.com"
              className="text-accent hover:text-accent-hover text-sm font-medium transition-colors"
            >
              islazykv@gmail.com &rarr;
            </a>
          </div>

          {/* Right — links */}
          <div className="flex gap-8">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-text-faint font-semibold mb-3">Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://github.com/islazykv" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/igor-slazyk/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="/Resume_ISlazyk.pdf" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-xs text-text-faint">
          Built with React, TypeScript & Tailwind CSS
        </div>
      </div>
    </footer>
  )
}
