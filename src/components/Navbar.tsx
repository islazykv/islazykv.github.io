import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { spacing, layout, motion as m } from '../theme'

const navItems = ['About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact']

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const handleNav = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToSection(sectionId), 100)
    } else {
      scrollToSection(sectionId)
    }
  }

  const handleHome = () => {
    if (location.pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      {...m.navbar}
      className={`fixed top-0 left-0 right-0 px-6 ${layout.navbarZ} backdrop-blur-md bg-bg/80 border-b border-border`}
    >
      <div className={`${spacing.container} py-4 flex items-center justify-between`}>
        <button onClick={handleHome} className="font-serif text-xl font-bold text-heading cursor-pointer">
          Igor Slazyk
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNav(item.toLowerCase())}
              className="text-sm text-text-muted hover:text-accent transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}
          <a
            href="/Resume_ISlazyk.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-accent transition-colors"
          >
            Resume
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-bg-card transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-text-muted hover:text-accent cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
          <button
            className="p-1 text-text-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            {...m.mobileMenu}
            className="md:hidden border-t border-border bg-bg/95 backdrop-blur-md overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => { handleNav(item.toLowerCase()); setMobileOpen(false) }}
                    className="text-sm text-text-muted hover:text-accent transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="/Resume_ISlazyk.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-accent transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
