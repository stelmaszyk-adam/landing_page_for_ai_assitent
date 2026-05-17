import { motion } from 'framer-motion'
import { Play, ArrowRight, Bot } from 'lucide-react'
import Button from './ui/Button'
import { useI18n } from '../i18n'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-6">
            {t('hero.badge')}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            {t('hero.titleLine1')}{' '}
            <span className="text-primary-600">{t('hero.titleHighlight')}</span>
            <br />
            {t('hero.titleLine2')}
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" href="#cta">
              {t('hero.ctaPrimary')} <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="secondary" size="lg" href="#how-it-works">
              <Play className="w-5 h-5 mr-2" /> {t('hero.ctaSecondary')}
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              {t('hero.setupTime')}
            </span>
            <span>{t('hero.noCard')}</span>
            <span>{t('hero.freeTrial')}</span>
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
                <p className="font-semibold text-gray-900">{t('hero.botName')}</p>
                <p className="text-sm text-green-600">{t('hero.botStatus')}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-4 max-w-[80%]">
                <p className="text-sm text-gray-700">{t('hero.chatMsg1')}</p>
              </div>
              <div className="bg-primary-600 rounded-2xl p-4 max-w-[80%] ml-auto">
                <p className="text-sm text-white">{t('hero.chatMsg2')}</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 max-w-[80%]">
                <p className="text-sm text-gray-700">{t('hero.chatMsg3')}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-gray-400">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {t('hero.chatLive')}
            </div>
          </div>
          <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-primary-200/40 rounded-3xl" />
        </motion.div>
      </div>
    </section>
  )
}
