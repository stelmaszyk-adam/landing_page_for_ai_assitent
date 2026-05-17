import { useState } from 'react'
import { Send, Calendar, Mail, MessageSquare } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'
import Button from './ui/Button'

export default function Contact() {
  const [formData, setFormData] = useState({ email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // Replace with your actual form endpoint (e.g. Formspree, Web3Forms, etc.)
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
          Skontaktuj sie z nami
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Masz pytania? Napisz do nas lub umow bezplatna konsultacje.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Napisz do nas</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Twoj email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jan@firma.pl"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Wiadomosc
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="W czym mozemy Ci pomoc?"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
              />
            </div>
            <Button type="submit" className="w-full" disabled={status === 'sending'}>
              {status === 'sending' ? 'Wysylanie...' : 'Wyslij wiadomosc'}
              <Send className="w-4 h-4 ml-2" />
            </Button>
            {status === 'success' && (
              <p className="text-green-600 text-sm text-center">Wiadomosc wyslana! Odpowiemy w ciagu 24h.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-sm text-center">Blad wysylania. Sprobuj ponownie.</p>
            )}
          </form>
        </div>

        {/* Schedule Meeting */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Umow spotkanie</h3>
          </div>

          <p className="text-gray-600 mb-6">
            Wybierz wygodny termin na bezplatna 15-minutowa konsultacje. Pokarzemy Ci jak AI Sekretarka moze dzialac w Twojej firmie.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <p className="text-sm text-gray-600">Bez zobowiazan — porozmawiamy o Twoich potrzebach i dopasujemy rozwiazanie.</p>
            </div>
          </div>

          {/* Replace YOUR_CAL_LINK with your actual Cal.com or Calendly link */}
          <div className="mt-8">
            <Button
              href="https://cal.com/YOUR_COMPANY/konsultacja"
              variant="secondary"
              className="w-full"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Zarezerwuj termin
            </Button>
          </div>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Powered by Cal.com — wybierz termin z kalendarza
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
