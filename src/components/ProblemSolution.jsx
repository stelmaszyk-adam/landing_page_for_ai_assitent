import { PhoneOff, Clock, TrendingDown, Bot, CalendarCheck, HeadphonesIcon } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'

const problems = [
  { icon: PhoneOff, text: '67% polaczen do gabinetow lekarskich pozostaje bez odpowiedzi' },
  { icon: Clock, text: 'Recepcja przeciazona — pacjenci czekaja lub sie rozlaczaja' },
  { icon: TrendingDown, text: 'Kazde nieodebrane polaczenie to stracony klient i przychod' },
]

const solutions = [
  { icon: Bot, text: 'AI odbiera kazde polaczenie natychmiast, 24 godziny na dobe' },
  { icon: CalendarCheck, text: 'Automatyczne umawianie wizyt i synchronizacja z kalendarzem' },
  { icon: HeadphonesIcon, text: 'Profesjonalna obsluga bez dodatkowego personelu' },
]

export default function ProblemSolution() {
  return (
    <SectionWrapper id="problem">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Problem, ktory kosztuje Cie klientow
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-red-600 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-sm">!</span>
            Bez AI Sekretarki
          </h3>
          {problems.map((p, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-red-50 border border-red-100">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                <p.icon className="w-5 h-5 text-red-600" />
              </div>
              <p className="text-gray-700">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-green-600 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-sm">&#10003;</span>
            Z AI Sekretarka
          </h3>
          {solutions.map((s, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-100">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                <s.icon className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-gray-700">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
