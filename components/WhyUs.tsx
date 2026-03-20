'use client'

import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'

const Check = () => (
  <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
)

export default function WhyUs() {
  const { lang } = useLang()
  const t = content[lang].whyUs

  return (
    <section className="py-20 px-5 sm:px-8 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-14">
          <p className="text-gold/60 text-[11px] tracking-[0.3em] uppercase font-sans mb-2">{t.label}</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-light text-white">{t.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Stats — no box, just stacked with gold accent */}
          <div className="reveal reveal-delay-1 flex flex-col gap-0">
            {t.stats.map((stat, i) => (
              <div
                key={stat.value}
                className={`flex items-center gap-6 py-6 ${i < t.stats.length - 1 ? 'border-b border-white/6' : ''}`}
              >
                <div className="w-1 h-10 bg-gold/50 rounded-full flex-shrink-0" />
                <div className="font-playfair text-3xl sm:text-4xl font-light text-gold leading-none whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="text-white/45 text-sm font-sans leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Perks list */}
          <div className="reveal reveal-delay-2 flex flex-col gap-2.5">
            {t.perks.map((perk) => (
              <div
                key={perk}
                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/5 bg-white/[0.02]"
              >
                <Check />
                <span className="text-white/65 text-sm font-sans">{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
