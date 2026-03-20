'use client'

import { MapPin } from 'lucide-react'
import Link from 'next/link'
import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'

export default function Hero() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
      </div>

      {/* Film Grain */}
      <svg className="absolute inset-0 w-full h-full opacity-40 mix-blend-overlay pointer-events-none">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* Content — pinned bottom left */}
      <div className="relative z-10 h-full flex items-end">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-16 md:pb-24 lg:pb-32">
          <div className="max-w-3xl space-y-6 md:space-y-8">

            {/* Location badge */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/20 border border-amber-600/40 rounded-full backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-[#c9a84c]" />
                <span className="text-[#c9a84c] text-sm font-medium tracking-wider uppercase">
                  {t.ui.locationLabel}
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-in-up font-playfair text-5xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tight"
              style={{ animationDelay: '0.4s' }}
            >
              {t.hero.headline}
            </h1>

            {/* Subline */}
            <p
              className="animate-fade-in-up text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl font-sans"
              style={{ animationDelay: '0.6s' }}
            >
              {t.hero.subline}
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-in-up flex flex-col sm:flex-row gap-4 pt-2"
              style={{ animationDelay: '0.8s' }}
            >
              <Link
                href="/events"
                className="inline-flex items-center justify-center bg-[#c9a84c] hover:bg-[#b8973b] text-black px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-105"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
