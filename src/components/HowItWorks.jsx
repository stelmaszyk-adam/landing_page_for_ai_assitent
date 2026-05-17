import { motion } from 'framer-motion'
import { Phone, CalendarSync, Sparkles } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'
import { useI18n } from '../i18n'

const icons = [Phone, CalendarSync, Sparkles]

export default function HowItWorks() {
  const { t } = useI18n()
  const steps = t('howItWorks.steps')

  return (
    <SectionWrapper id="how-it-works" className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {t('howItWorks.title')}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('howItWorks.subtitle')}
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 relative">
        <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-primary-200" />
        {steps.map((step, i) => {
          const Icon = icons[i]
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-600 flex items-center justify-center mx-auto mb-6 relative z-10">
                <Icon className="w-7 h-7 text-white" />
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-primary-600 rounded-full flex items-center justify-center text-xs font-bold text-primary-600">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
