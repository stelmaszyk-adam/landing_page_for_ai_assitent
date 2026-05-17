import { createContext, useContext, useState, useEffect } from 'react'
import pl from './translations/pl'
import en from './translations/en'

const translations = { pl, en }

const I18nContext = createContext()

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(() => localStorage.getItem('lang') || 'pl')
  const setLang = (l) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  const t = (key) => {
    const keys = key.split('.')
    let val = translations[lang]
    for (const k of keys) {
      val = val?.[k]
    }
    return val ?? key
  }
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
