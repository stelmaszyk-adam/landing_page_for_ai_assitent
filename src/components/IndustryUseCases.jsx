import { motion } from 'framer-motion'
import { Stethoscope, SmilePlus, Scale, Wrench } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'

const industries = [
  {
    icon: Stethoscope,
    name: 'Gabinety lekarskie',
    scenario: 'Pacjent dzwoni o 22:00 z pytaniem o wyniki badania.',
    example: 'AI informuje o godzinach odbioru wynikow, oferuje umowienie wizyty kontrolnej i zapisuje prosbe o kontakt od lekarza.',
  },
  {
    icon: SmilePlus,
    name: 'Gabinety stomatologiczne',
    scenario: 'Klient chce przeniesc wizyte na inny termin.',
    example: 'AI sprawdza kalendarz, proponuje 3 najblizsze wolne terminy i potwierdza zmiane SMS-em.',
  },
  {
    icon: Scale,
    name: 'Kancelarie prawne',
    scenario: 'Potencjalny klient dzwoni z pytaniem o konsultacje.',
    example: 'AI zbiera informacje o sprawie, proponuje wolny termin konsultacji i wysyla potwierdzenie mailowe.',
  },
  {
    icon: Wrench,
    name: 'Uslugi domowe',
    scenario: 'Klient potrzebuje pilnej naprawy hydraulicznej.',
    example: 'AI okresla pilnosc, zbiera adres i dane kontaktowe, powiadamia technika i potwierdza ETA klientowi.',
  },
]

export default function IndustryUseCases() {
  return (
    <SectionWrapper id="industries" className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Sprawdzone w roznych branzach
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          AI Sekretarka dostosowuje sie do specyfiki Twojej dzialalnosci.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {industries.map((ind, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-lg bg-primary-50 flex items-center justify-center">
                <ind.icon className="w-5 h-5 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{ind.name}</h3>
            </div>
            <p className="text-sm font-medium text-gray-900 mb-2">Scenariusz: {ind.scenario}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{ind.example}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
