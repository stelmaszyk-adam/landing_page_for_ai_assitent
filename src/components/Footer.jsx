import { Phone } from 'lucide-react'

const columns = [
  {
    title: 'Produkt',
    links: ['Funkcje', 'Cennik', 'Integracje', 'API'],
  },
  {
    title: 'Firma',
    links: ['O nas', 'Blog', 'Kariera', 'Kontakt'],
  },
  {
    title: 'Wsparcie',
    links: ['Centrum pomocy', 'Dokumentacja', 'Status', 'Regulamin'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <a href="#" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
            <Phone className="w-5 h-5 text-primary-400" />
            AI Sekretarka
          </a>
          <p className="text-sm leading-relaxed">
            Inteligentny asystent telefoniczny dla firm. Odbiera polaczenia 24/7, umawia wizyty i odpowiada na pytania klientow.
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
        &copy; 2026 AI Sekretarka. Wszelkie prawa zastrzezone.
      </div>
    </footer>
  )
}
