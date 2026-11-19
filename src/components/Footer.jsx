import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const { profile, footer } = t

  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono">
          {footer.madeWith} <span className="text-accent">React</span> +{' '}
          <span className="text-accent">Tailwind</span> +{' '}
          <span className="text-accent">Framer Motion</span>
        </p>
      </div>
    </footer>
  )
}