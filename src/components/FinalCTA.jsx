import { ArrowRight } from 'lucide-react'
import Button from './ui/Button'

export default function FinalCTA() {
  return (
    <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-900 via-primary-800 to-indigo-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
          Zacznij odbierac kazde polaczenie juz dzisiaj
        </h2>
        <p className="text-lg text-primary-100 mb-10 max-w-2xl mx-auto">
          Dolacz do setek firm, ktore przestaly tracic klientow. 14 dni bezplatnego testu, bez zobowiazan.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="ghost" href="#" className="!bg-white !text-primary-900 hover:!bg-primary-50 !border-0">
            Rozpocznij darmowy test <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="ghost" href="#">
            Umow prezentacje
          </Button>
        </div>
        <p className="mt-6 text-sm text-primary-200">
          Bez karty kredytowej &bull; Konfiguracja w 5 minut &bull; Wsparcie techniczne w cenie
        </p>
      </div>
    </section>
  )
}
