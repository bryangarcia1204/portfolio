import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="proyectos" className="py-24">
      <div className="container-x">
        <h2 className="section-title">Proyectos destacados</h2>
        <p className="section-sub">
          Casos reales donde la automatización y el backend resuelven problemas concretos.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="card flex flex-col">
              <h3 className="text-xl font-bold text-white mb-1">{p.title}</h3>
              <p className="text-sm text-emerald-300 mb-4">{p.subtitle}</p>

              <div className="space-y-3 text-sm text-slate-400 flex-1">
                <p>
                  <span className="text-slate-200 font-semibold">Problema: </span>
                  {p.problem}
                </p>
                <p>
                  <span className="text-slate-200 font-semibold">Solución: </span>
                  {p.solution}
                </p>
                <p>
                  <span className="text-slate-200 font-semibold">Resultado: </span>
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
                    Código ↗
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-sm"
                  >
                    Demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}