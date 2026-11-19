import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-x py-20">
        <p className="font-mono text-accent mb-4 text-sm">$ whoami</p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          {profile.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-emerald-300 font-semibold mb-6">
          {profile.role}
        </h2>
        <p className="text-slate-400 max-w-2xl mb-8 text-lg leading-relaxed">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {['Python', 'Django', 'FastAPI', 'Node.js', 'PostgreSQL', 'Docker', 'Git'].map(
            (t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ),
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="#proyectos" className="btn-primary">
            Ver proyectos →
          </a>
          <a href="#contacto" className="btn-ghost">
            Contactarme
          </a>
        </div>

        <p className="mt-10 text-sm text-slate-500">📍 {profile.location}</p>
      </div>
    </section>
  )
}