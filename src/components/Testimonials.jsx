import { Star } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'
import { useI18n } from '../i18n'

export default function Testimonials() {
  const { t } = useI18n()
  const items = t('testimonials.items')

  return (
    <SectionWrapper id="testimonials">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {t('testimonials.title')}
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-gray-700 leading-relaxed mb-6">"{item.quote}"</blockquote>
            <div>
              <p className="font-semibold text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
