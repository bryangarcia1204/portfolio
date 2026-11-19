import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'
import SpotlightCard from './SpotlightCard'
import { fadeUp, scaleIn, viewport } from '../lib/animations'

export default function About() {
  const { t } = useLanguage()
  const { about, contact, sections } = t

  return (
    <section id="sobre-mi" className="py-24">
      <div className="container-x grid md:grid-cols-5 gap-12 items-start">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="md:col-span-3"
        >
          <SectionHeading title={sections.about.title} />
          <p className="text-slate-400 leading-relaxed text-lg">{about.bio}</p>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          whileHover={{ y: -4 }}
          className="md:col-span-2"
        >
          <SpotlightCard className="card">
            <h3 className="font-semibold text-white mb-4">{about.quickFacts}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between gap-4">
                <span className="text-slate-500">{about.locationLabel}</span>
                <span className="text-slate-200 text-right">{about.locationValue}</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-slate-500">{about.modalityLabel}</span>
                <span className="text-slate-200 text-right">{about.modalityValue}</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-slate-500">{about.languagesLabel}</span>
                <span className="text-slate-200 text-right">{about.languagesValue}</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-slate-500">{about.emailLabel}</span>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-accent hover:underline text-right break-all"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  )
}