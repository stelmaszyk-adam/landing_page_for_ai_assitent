import { Star } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'

const testimonials = [
  {
    quote: 'Od kiedy wlaczylismy AI Sekretarke, nie tracimy juz polaczen. Liczba umowionych wizyt wzrosla o 35% w pierwszym miesiacu.',
    name: 'Dr Anna Kowalska',
    role: 'Wlascicielka gabinetu stomatologicznego',
    stars: 5,
  },
  {
    quote: 'Nasi klienci sa zachwyceni, ze moga sie dodzwonic o kazdej porze. A my oszczedzamy na dodatkowej recepcjonistce.',
    name: 'Marek Wisniewski',
    role: 'Kierownik kancelarii prawnej',
    stars: 5,
  },
  {
    quote: 'Konfiguracja zajela mi 10 minut. Nastepnego dnia AI juz odbierala polaczenia i umawiala klientow. To dziala!',
    name: 'Joanna Nowak',
    role: 'Wlascicielka salonu beauty',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Zaufali nam wlasciciele firm
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-gray-700 leading-relaxed mb-6">"{t.quote}"</blockquote>
            <div>
              <p className="font-semibold text-gray-900">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
