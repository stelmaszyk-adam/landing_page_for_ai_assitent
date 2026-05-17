import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Button from './ui/Button'
import { useI18n } from '../i18n'

export default function Navbar() {
  const { lang, setLang, t } = useI18n()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { label: t('nav.howItWorks'), href: '#how-it-works' },
    { label: t('nav.features'), href: '#features' },
    { label: t('nav.industries'), href: '#industries' },
    { label: t('nav.testimonials'), href: '#testimonials' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleLang = () => setLang(lang === 'pl' ? 'en' : 'pl')

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-bold text-xl text-gray-900">
          <Phone className="w-6 h-6 text-primary-600" />
          AI Sekretarka
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
              {l.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="px-3 py-1.5 text-sm font-semibold border-2 border-gray-300 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors cursor-pointer"
          >
            {lang === 'pl' ? 'EN' : 'PL'}
          </button>
          <Button size="sm" href="#cta">{t('nav.cta')}</Button>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-gray-600 hover:text-primary-600 font-medium">
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={toggleLang}
              className="px-3 py-2 text-sm font-semibold border-2 border-gray-300 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors cursor-pointer"
            >
              {lang === 'pl' ? 'EN' : 'PL'}
            </button>
            <Button size="sm" href="#cta" className="flex-1">{t('nav.cta')}</Button>
          </div>
        </div>
      )}
    </nav>
  )
}
