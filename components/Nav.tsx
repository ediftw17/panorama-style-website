'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/lib/LanguageContext'
import { content, Lang } from '@/lib/content'
import { WA_PHONE_DISPLAY, WA_PHONE_TEL } from '@/lib/wa'

const langs: { code: Lang; label: string }[] = [
  { code: 'ru', label: 'RU' },
  { code: 'he', label: 'HE' },
  { code: 'en', label: 'EN' },
]

export default function Nav() {
  const { lang, setLang } = useLang()
  const t = content[lang].nav
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: t.home, href: '/' },
    { label: t.menu, href: '/menu' },
    { label: t.events, href: '/events' },
    { label: t.contact, href: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-[0_1px_0_rgba(201,168,76,0.15)]'
          : 'bg-gradient-to-b from-black/70 to-transparent backdrop-blur-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-18 py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className={`font-playfair leading-none transition-all duration-700 ${
                scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'
              }`}
            >
              <span className="block text-base font-light tracking-[0.2em] text-white uppercase">Panorama</span>
              <span className="block text-[10px] font-light tracking-[0.5em] text-gold/80 uppercase mt-0.5">Style</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-cream/60 hover:text-cream text-[13px] font-medium tracking-widest uppercase transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right side: phone + lang selector + hamburger */}
          <div className="flex items-center gap-4">
            {/* Phone — desktop only */}
            <a
              href={`tel:${WA_PHONE_TEL}`}
              className="hidden md:flex items-center gap-1.5 text-cream/50 hover:text-cream text-[12px] font-sans tracking-wide transition-colors"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span dir="ltr">{WA_PHONE_DISPLAY}</span>
            </a>
            {/* Language pill selector */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 gap-0.5">
              {langs.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`text-[11px] font-semibold tracking-widest px-3 py-1 rounded-full transition-all duration-200 ${
                    lang === code
                      ? 'bg-gold text-black'
                      : 'text-cream/50 hover:text-cream'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>

    </nav>
  )
}
