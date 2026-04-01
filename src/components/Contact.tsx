import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-slate-300 mb-8">
          I'm currently open to new opportunities. Whether you have a question
          or just want to say hi, feel free to reach out!
        </p>
        <a
          href="mailto:your@email.com"
          className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
        >
          Say Hello
        </a>
      </div>
    </Section>
  )
}
