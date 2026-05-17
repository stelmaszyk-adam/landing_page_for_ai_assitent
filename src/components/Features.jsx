import { MessageSquare, CalendarCheck, Filter, BarChart3, Globe, Moon } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'
import Card from './ui/Card'

const features = [
  {
    icon: MessageSquare,
    title: 'Odpowiedzi na pytania',
    description: 'AI zna Twoja oferte, cennik, godziny otwarcia i odpowiada na najczestsze pytania klientow.',
  },
  {
    icon: CalendarCheck,
    title: 'Inteligentne rezerwacje',
    description: 'Automatycznie umawia wizyty, sprawdzajac dostepnosc w kalendarzu w czasie rzeczywistym.',
  },
  {
    icon: Filter,
    title: 'Triaz i priorytetyzacja',
    description: 'Rozpoznaje pilne sprawy i przekierowuje je bezposrednio do wlasciwej osoby.',
  },
  {
    icon: BarChart3,
    title: 'Panel analityczny',
    description: 'Pelny wglad w statystyki polaczen, najczestsze pytania i konwersje.',
  },
  {
    icon: Globe,
    title: 'Obsluga wielojezyczna',
    description: 'Rozmawia po polsku, angielsku, ukrainsku i w innych jezykach — automatycznie rozpoznaje jezyk.',
  },
  {
    icon: Moon,
    title: 'Obsluga po godzinach',
    description: 'Dziala rowniez w nocy, weekendy i swieta — klienci zawsze uzyskaja informacje.',
  },
]

export default function Features() {
  return (
    <SectionWrapper id="features">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Wszystko, czego potrzebuje Twoja recepcja
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Kompletny zestaw funkcji, ktory zastepuje tradycyjna recepcje telefoniczna.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <Card key={i} icon={f.icon} title={f.title} description={f.description} />
        ))}
      </div>
    </SectionWrapper>
  )
}
