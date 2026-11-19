import { about, profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="sobre-mi" className="py-24">
      <div className="container-x grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3">
          <h2 className="section-title">Sobre mí</h2>
          <p className="text-slate-400 leading-relaxed text-lg">{about}</p>
        </div>
        <div className="md:col-span-2 card">
          <h3 className="font-semibold text-white mb-4">Datos rápidos</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between gap-4">
              <span className="text-slate-500">Ubicación</span>
              <span className="text-slate-200 text-right">Camagüey, Cuba</span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="text-slate-500">Modalidad</span>
              <span className="text-slate-200 text-right">Remoto</span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="text-slate-500">Idiomas</span>
              <span className="text-slate-200 text-right">Español · Inglés B1</span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="text-slate-500">Email</span>
              <a
                href={`mailto:${profile.email}`}
                className="text-accent hover:underline text-right break-all"
              >
                {profile.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}