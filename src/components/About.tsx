import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="space-y-4 md:w-1/2 text-text leading-relaxed text-justify">
          <p>
            First of all, I would like to thank you for visiting my website!
          </p>
          <p>
            My name is <span className="text-accent font-semibold">Igor</span> and my passion for programming and science started at an early age.
            I truly enjoyed my studies, where math, physics and coding naturally came together to provide a strong analytical foundation.
            This academic path led me to a joint Ph.D. in high-energy physics in sunny Italy and research at CERN, 
            where a vast world of large-scale data analysis and complex problems opened up to me.
          </p>
          <p>
            While data science was my main focus for quite some time, I eagerly transitioned into machine learning as the field began gaining traction.
            That shift landed me in rainy but beautiful Bergen in Norway, where I could dedicate my work entirely to implementing machine learning solutions.
          </p>
          <p>
            Today, my expertise revolves around designing scalable, end-to-end ML pipelines and MLOps workflows - 
            from data ingestion and feature engineering to model training, evaluation and deployment.
            Bringing together <strong className="text-heading font-semibold">8 years of data science</strong> experience,
            including <strong className="text-heading font-semibold">4 years focused strictly on machine learning</strong>,
            I am now looking to take these skills into industry and tackle real-world problems at scale.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/me.png"
            alt="Profile photo"
            className="rounded-2xl max-w-sm w-full border border-border"
          />
        </div>
      </div>
    </Section>
  )
}
