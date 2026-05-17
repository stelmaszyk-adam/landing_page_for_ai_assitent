import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Button from './ui/Button'

const links = [
  { label: 'Jak to dziala', href: '#how-it-works' },
  { label: 'Funkcje', href: '#features' },
  { label: 'Branże', href: '#industries' },
  { label: 'Opinie', href: '#testimonials' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
          <Button size="sm" href="#cta">Wyprobuj za darmo</Button>
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
          <Button size="sm" href="#cta" className="w-full mt-2">Wyprobuj za darmo</Button>
        </div>
      )}
    </nav>
  )
}
