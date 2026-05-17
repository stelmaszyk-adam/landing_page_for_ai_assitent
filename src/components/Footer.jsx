import { Phone } from 'lucide-react'
import { useI18n } from '../i18n'

export default function Footer() {
  const { t } = useI18n()
  const columns = t('footer.columns')

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <a href="#" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
            <Phone className="w-5 h-5 text-primary-400" />
            AI Sekretarka
          </a>
          <p className="text-sm leading-relaxed">
            {t('footer.description')}
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-white mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-sm text-center">
        {t('footer.copyright')}
      </div>
    </footer>
  )
}
