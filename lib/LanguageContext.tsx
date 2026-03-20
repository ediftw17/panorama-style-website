'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Lang = 'ru' | 'he' | 'en'

const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'ru',
  setLang: () => {},
})

const PAGE_TITLES: Record<Lang, string> = {
  ru: 'Panorama Style — Русский ресторан и банкетный зал, Хайфа',
  he: 'Panorama Style — מסעדה רוסית ואולם אירועים, חיפה',
  en: 'Panorama Style — Russian Restaurant & Event Hall, Haifa',
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ru')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    document.title = PAGE_TITLES[lang]
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
    document.documentElement.dir = l === 'he' ? 'rtl' : 'ltr'
    document.documentElement.lang = l
  }

  if (!mounted) return null

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
