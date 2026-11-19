import { services } from '../data/portfolio'

const icons = {
  server: '🖥️',
  zap: '⚡',
  layout: '🎨',
  database: '🗄️',
}

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-slate-900/30">
      <div className="container-x">
        <h2 className="section-title">Qué puedo aportar</h2>
        <p className="section-sub">
          Servicios enfocados en resolver problemas reales de negocio con tecnología.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="card">
              <div className="text-3xl mb-4">{icons[s.icon]}</div>
              <h3 className="font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}