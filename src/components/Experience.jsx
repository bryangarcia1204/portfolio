import { experience, education } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experiencia" className="py-24">
      <div className="container-x">
        <h2 className="section-title">Experiencia</h2>
        <p className="section-sub">Trayectoria profesional y formación.</p>

        <div className="relative border-l border-slate-800 pl-8 space-y-10 mb-16">
          {experience.map((e) => (
            <div key={e.role} className="relative">
              <span className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-slate-950" />
              <p className="text-sm font-mono text-emerald-300 mb-1">{e.period}</p>
              <h3 className="text-lg font-semibold text-white">{e.role}</h3>
              <p className="text-sm text-slate-500 mb-3">{e.company}</p>
              <ul className="space-y-2 text-sm text-slate-400">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-accent mt-1">▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-white mb-6">Educación</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {education.map((ed) => (
            <div key={ed.title} className="card">
              <p className="text-sm font-mono text-emerald-300 mb-1">{ed.period}</p>
              <h4 className="font-semibold text-white">{ed.title}</h4>
              <p className="text-sm text-slate-500">{ed.place}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}