'use client'

import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'

const PerkIcon = () => (
  <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

export default function WhyUs() {
  const { lang } = useLang()
  const t = content[lang].whyUs

  return (
    <section className="py-20 px-5 sm:px-8 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-gold/60 text-[11px] tracking-[0.3em] uppercase font-sans mb-2">{t.label}</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-light text-white">{t.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden">
            {t.stats.map((stat) => (
              <div key={stat.value} className="bg-[#111] p-5 sm:p-7 text-center">
                <div className="font-playfair text-2xl sm:text-3xl font-light text-gold mb-2 leading-none">
                  {stat.value}
                </div>
                <div className="text-white/35 text-[11px] font-sans leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Perks list */}
          <div className="space-y-3">
            {t.perks.map((perk) => (
              <div key={perk} className="flex items-center gap-3 bg-white/[0.02] border border-white/6 rounded-lg px-4 py-3">
                <PerkIcon />
                <span className="text-white/70 text-sm font-sans">{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
