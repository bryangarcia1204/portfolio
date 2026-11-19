import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'
import SpotlightCard from './SpotlightCard'
import { stagger, item, viewport } from '../lib/animations'

export default function Projects() {
  const { t } = useLanguage()
  const { sections, projects } = t

  return (
    <section id="proyectos" className="py-24">
      <div className="container-x">
        <SectionHeading
          title={sections.projects.title}
          subtitle={sections.projects.subtitle}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.list.map((p, i) => (
            <motion.div key={i} variants={item}>
              <SpotlightCard className="card flex flex-col group h-full">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-amber-300 mb-4">{p.subtitle}</p>

                <div className="space-y-3 text-sm text-slate-400 flex-1">
                  <p>
                    <span className="text-slate-200 font-semibold">
                      {projects.labels.problem}{' '}
                    </span>
                    {p.problem}
                  </p>
                  <p>
                    <span className="text-slate-200 font-semibold">
                      {projects.labels.solution}{' '}
                    </span>
                    {p.solution}
                  </p>
                  <p>
                    <span className="text-slate-200 font-semibold">
                      {projects.labels.result}{' '}
                    </span>
                    {p.result}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-5">
                  {p.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost text-sm"
                    >
                      {projects.labels.code} ↗
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary text-sm"
                    >
                      {projects.labels.demo} ↗
                    </a>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}