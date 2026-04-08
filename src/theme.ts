// =============================================================================
// Design Tokens — layout, spacing, and motion
// Colors are handled via CSS custom properties in index.css
// =============================================================================

export const spacing = {
  section: 'py-20 md:py-28 px-6',
  container: 'max-w-5xl mx-auto',
  containerMd: 'max-w-4xl mx-auto',
  containerLg: 'max-w-6xl mx-auto',
  navbarPad: 'px-6 py-4',
} as const

export const layout = {
  navbarHeight: 72,
  navbarZ: 'z-50',
} as const

// Framer Motion presets
export const motion = {
  stagger: {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  },
  sectionEnter: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.15 },
  },
  headingEnter: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  },
  pageBlock: (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay },
  }),
  navbar: {
    initial: { y: -72 },
    animate: { y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  mobileMenu: {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: 'auto' as const },
    exit: { opacity: 0, height: 0 },
  },
  expandItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  },
} as const
