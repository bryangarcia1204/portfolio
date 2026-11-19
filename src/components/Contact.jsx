import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-slate-900/30">
      <div className="container-x max-w-3xl text-center">
        <h2 className="section-title">Hablemos</h2>
        <p className="section-sub mx-auto">
          ¿Tienes un proyecto, una automatización pendiente o necesitas reforzar tu equipo?
          Estoy disponible para trabajo remoto.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            ✉️ {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            GitHub ↗
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              LinkedIn ↗
            </a>
          )}
        </div>

        <p className="text-sm text-slate-500">
          Respondo normalmente en menos de 24 horas.
        </p>
      </div>
    </section>
  )
}