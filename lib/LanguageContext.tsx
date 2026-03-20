'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Lang = 'ru' | 'he' | 'en'

const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'ru',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ru')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null
    if (stored && ['ru', 'he', 'en'].includes(stored)) {
      setLangState(stored)
    }
    setMounted(true)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  if (!mounted) return null

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
