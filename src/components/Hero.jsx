import { motion } from 'framer-motion'
import { Play, ArrowRight, Bot } from 'lucide-react'
import Button from './ui/Button'

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-6">
            Nowa era obslugi telefonicznej
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Nigdy wiecej nieodebranych{' '}
            <span className="text-primary-600">polaczen.</span>
            <br />
            AI odbiera 24/7.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
            Inteligentny asystent telefoniczny, ktory odbiera polaczenia, odpowiada na pytania pacjentow i klientow, umawia wizyty i synchronizuje kalendarz — non-stop, bez przerw i urlopow.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" href="#cta">
              Rozpocznij za darmo <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="secondary" size="lg" href="#how-it-works">
              <Play className="w-5 h-5 mr-2" /> Posluchaj AI
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Konfiguracja w 5 minut
            </span>
            <span>Bez karty kredytowej</span>
            <span>14 dni za darmo</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">AI Sekretarka</p>
                <p className="text-sm text-green-600">Aktywna — odbiera polaczenia</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-4 max-w-[80%]">
                <p className="text-sm text-gray-700">Dzien dobry, tu gabinet stomatologiczny SmileDent. W czym moge pomoc?</p>
              </div>
              <div className="bg-primary-600 rounded-2xl p-4 max-w-[80%] ml-auto">
                <p className="text-sm text-white">Chcialbym umowic wizyte na przeglad w przyszlym tygodniu.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 max-w-[80%]">
                <p className="text-sm text-gray-700">Oczywiscie! Mam wolne terminy w srode o 10:00 i w czwartek o 14:30. Ktory termin Panu odpowiada?</p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-gray-400">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              AI rozmawia w czasie rzeczywistym...
            </div>
          </div>
          <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-primary-200/40 rounded-3xl" />
        </motion.div>
      </div>
    </section>
  )
}
