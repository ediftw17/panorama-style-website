'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'

export default function Hero() {
  const { lang } = useLang()
  const t = content[lang].hero

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="inline-block text-gold/60 text-sm tracking-[0.3em] uppercase font-sans mb-4">
            חיפה, ישראל
          </span>
        </div>
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gold mb-6 leading-tight">
          {t.headline}
        </h1>
        <p className="text-cream/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-sans">
          {t.subline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/events"
            className="bg-gold text-background font-semibold px-8 py-4 rounded-sm hover:bg-gold/90 transition-colors text-base"
          >
            {t.ctaPrimary}
          </Link>
          <Link
            href="/contact"
            className="border border-gold text-gold font-semibold px-8 py-4 rounded-sm hover:bg-gold/10 transition-colors text-base"
          >
            {t.ctaSecondary}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <svg
          className="w-6 h-6 text-gold/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
