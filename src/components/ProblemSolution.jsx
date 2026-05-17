import { PhoneOff, Clock, TrendingDown, Bot, CalendarCheck, HeadphonesIcon } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'
import { useI18n } from '../i18n'

const problemIcons = [PhoneOff, Clock, TrendingDown]
const solutionIcons = [Bot, CalendarCheck, HeadphonesIcon]

export default function ProblemSolution() {
  const { t } = useI18n()
  const problems = t('problem.problems')
  const solutions = t('problem.solutions')

  return (
    <SectionWrapper id="problem">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          {t('problem.title')}
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-red-600 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-sm">!</span>
            {t('problem.without')}
          </h3>
          {problems.map((text, i) => {
            const Icon = problemIcons[i]
            return (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-red-50 border border-red-100">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-gray-700">{text}</p>
              </div>
            )
          })}
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-green-600 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-sm">&#10003;</span>
            {t('problem.with')}
          </h3>
          {solutions.map((text, i) => {
            const Icon = solutionIcons[i]
            return (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-100">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-gray-700">{text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
