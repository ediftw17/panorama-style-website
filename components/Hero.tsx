'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'
import { waUrl } from '@/lib/wa'

export default function Hero() {
  const { lang } = useLang()
  const t = content[lang]
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const bgRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden"
      style={{ height: '100svh' }}
    >
      {/* Background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')", willChange: 'transform' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />
      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
      {/* Radial vignette behind text for extra contrast */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(0,0,0,0.45) 0%, transparent 100%)' }} />
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-5xl mx-auto">
        {/* Location eyebrow */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-8" style={{ animationDelay: '200ms' }}>
          <div className="w-1 h-1 rounded-full bg-gold" />
          <span className="text-white/60 text-[11px] font-sans tracking-[0.3em] uppercase">
            {t.ui.locationLabel}
          </span>
        </div>

        {/* Venue name */}
        <p className="animate-fade-in-up font-playfair text-white text-2xl sm:text-3xl font-light tracking-[0.15em] mb-3" style={{ animationDelay: '300ms' }}>
          Panorama Style
        </p>

        {/* Main headline */}
        <h1
          className="animate-fade-in-up font-playfair font-light text-white leading-tight tracking-tight mb-5"
          style={{ fontSize: 'clamp(28px, 4.5vw, 58px)', animationDelay: '400ms' }}
        >
          {t.hero.headline}
        </h1>

        {/* Gold rule */}
        <div className="animate-fade-in-up w-10 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-5" style={{ animationDelay: '550ms' }} />

        {/* Subline — key facts as a scannable line */}
        <p className="animate-fade-in-up text-white/75 text-sm sm:text-base font-sans tracking-wide max-w-lg mx-auto mb-8" style={{ animationDelay: '650ms' }}>
          {t.hero.subline}
        </p>

        {/* Social proof */}
        <div className="animate-fade-in-up flex items-center justify-center gap-1.5 mb-6" style={{ animationDelay: '750ms' }}>
          <div className="flex">
            {[1,2,3,4].map(i => (
              <svg key={i} className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 20 20">
              <defs><linearGradient id="hg"><stop offset="20%" stopColor="#c9a84c"/><stop offset="20%" stopColor="rgba(255,255,255,0.15)"/></linearGradient></defs>
              <path fill="url(#hg)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <span className="text-gold text-sm font-semibold font-sans">4.2</span>
          <span className="text-white/35 text-xs font-sans">·</span>
          <span className="text-white/50 text-xs font-sans">386 {lang === 'he' ? 'ביקורות' : lang === 'en' ? 'reviews' : 'отзывов'}</span>
          <span className="text-white/35 text-xs font-sans">·</span>
          <span className="text-white/40 text-[11px] font-sans">#111 {lang === 'he' ? 'בחיפה' : lang === 'en' ? 'in Haifa' : 'в Хайфе'}</span>
        </div>

        {/* CTAs */}
        <div className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-3 mb-4" style={{ animationDelay: '800ms' }}>
          <a
            href={waUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-black text-sm font-semibold px-7 py-3.5 tracking-wide hover:bg-gold/90 transition-all hover:-translate-y-px"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t.hero.ctaPrimary}
          </a>
          <a
            href="/events"
            className="inline-flex items-center gap-2 border border-white/25 text-white/75 text-sm px-7 py-3.5 tracking-wide hover:border-white/50 hover:text-white transition-all"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Urgency + response time */}
        <div className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-3 text-[11px] font-sans tracking-wide" style={{ animationDelay: '950ms' }}>
          <span className="text-gold/70">⚡ {t.hero.urgency}</span>
          <span className="hidden sm:block text-white/20">·</span>
          <span className="text-white/40">{lang === 'he' ? 'מגיבים תוך שעתיים' : lang === 'en' ? 'We reply within 2 hours' : 'Отвечаем в течение 2 часов'}</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/60" />
        <span className="text-white/50 text-[9px] font-sans tracking-[0.3em] uppercase">Scroll</span>
      </div>
    </section>
  )
}
