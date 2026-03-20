'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'

export default function Hero() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <section
      className="relative h-screen flex items-end overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Layered gradient — bottom heavy */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

      {/* Content — pinned to bottom left */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pb-20">
        <div className="max-w-2xl">
          <p className="text-gold/70 text-[11px] tracking-[0.35em] uppercase font-sans mb-5">
            {t.ui.locationLabel}
          </p>
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white leading-none mb-6">
            {t.hero.headline}
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed font-sans mb-10 max-w-lg">
            {t.hero.subline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/events"
              className="bg-gold text-black font-semibold px-8 py-3.5 text-sm tracking-wide uppercase hover:bg-gold/90 transition-colors"
            >
              {t.hero.ctaPrimary}
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 text-white font-semibold px-8 py-3.5 text-sm tracking-wide uppercase hover:border-white/60 hover:bg-white/5 transition-all"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-white animate-pulse" />
      </div>
    </section>
  )
}
