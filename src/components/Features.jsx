import { MessageSquare, CalendarCheck, Filter, BarChart3, Globe, Moon } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'
import Card from './ui/Card'
import { useI18n } from '../i18n'

const icons = [MessageSquare, CalendarCheck, Filter, BarChart3, Globe, Moon]

export default function Features() {
  const { t } = useI18n()
  const items = t('features.items')

  return (
    <SectionWrapper id="features">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {t('features.title')}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('features.subtitle')}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((f, i) => (
          <Card key={i} icon={icons[i]} title={f.title} description={f.description} />
        ))}
      </div>
    </SectionWrapper>
  )
}
