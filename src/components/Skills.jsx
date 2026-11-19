import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 bg-slate-900/30">
      <div className="container-x">
        <h2 className="section-title">Stack técnico</h2>
        <p className="section-sub">Tecnologías que uso a diario en proyectos reales.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="card">
              <h3 className="font-mono text-sm text-emerald-300 mb-4">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}