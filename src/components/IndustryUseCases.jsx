import { motion } from 'framer-motion'
import { Stethoscope, SmilePlus, Scale, Wrench } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'
import { useI18n } from '../i18n'

const icons = [Stethoscope, SmilePlus, Scale, Wrench]

export default function IndustryUseCases() {
  const { t } = useI18n()
  const items = t('industries.items')

  return (
    <SectionWrapper id="industries" className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {t('industries.title')}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('industries.subtitle')}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((ind, i) => {
          const Icon = icons[i]
          return (
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
                  <Icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{ind.name}</h3>
              </div>
              <p className="text-sm font-medium text-gray-900 mb-2">{t('industries.scenarioLabel')} {ind.scenario}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{ind.example}</p>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
