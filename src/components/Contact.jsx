import { useState } from 'react'
import { Send, Calendar, Mail, MessageSquare } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'
import Button from './ui/Button'
import { useI18n } from '../i18n'

export default function Contact() {
  const { t } = useI18n()
  const [formData, setFormData] = useState({ email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <SectionWrapper id="kontakt">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          {t('contact.title')}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{t('contact.formTitle')}</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.emailLabel')}
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t('contact.emailPlaceholder')}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.messageLabel')}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t('contact.messagePlaceholder')}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
              />
            </div>
            <Button type="submit" className="w-full" disabled={status === 'sending'}>
              {status === 'sending' ? t('contact.sending') : t('contact.send')}
              <Send className="w-4 h-4 ml-2" />
            </Button>
            {status === 'success' && (
              <p className="text-green-600 text-sm text-center">{t('contact.success')}</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-sm text-center">{t('contact.error')}</p>
            )}
          </form>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{t('contact.meetingTitle')}</h3>
          </div>

          <p className="text-gray-600 mb-6">
            {t('contact.meetingDescription')}
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <p className="text-sm text-gray-600">{t('contact.meetingNote')}</p>
            </div>
          </div>

          <div className="mt-8">
            <Button
              href="https://cal.com/YOUR_COMPANY/konsultacja"
              variant="secondary"
              className="w-full"
            >
              <Calendar className="w-4 h-4 mr-2" />
              {t('contact.bookBtn')}
            </Button>
          </div>

          <p className="text-xs text-gray-400 mt-4 text-center">
            {t('contact.calNote')}
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
