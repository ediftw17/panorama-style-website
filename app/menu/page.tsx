'use client'

import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'

export default function MenuPage() {
  const { lang } = useLang()
  const t = content[lang].menu

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold/60 text-xs uppercase tracking-widest font-sans">
            {lang === 'he' ? 'מה יש לנו' : 'Что мы предлагаем'}
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-cream mt-2 mb-4">
            {t.title}
          </h1>
          <p className="text-cream/40 text-sm font-sans">{t.priceNote}</p>
        </div>

        {/* Categories */}
        <div className="space-y-10">
          {t.categories.map((category, ci) => (
            <div key={ci}>
              {/* Gold divider */}
              {ci > 0 && (
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-px bg-gold/20" />
                  <div className="w-2 h-2 bg-gold/40 rotate-45" />
                  <div className="flex-1 h-px bg-gold/20" />
                </div>
              )}

              <div className="bg-darkcard border border-gold/10 rounded-sm p-6 md:p-8">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gold mb-6">
                  {category.name}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.items.map((item, ii) => (
                    <li
                      key={ii}
                      className="flex items-center gap-3 text-cream/80 font-sans"
                    >
                      <span className="text-gold/40 text-xs flex-shrink-0">◆</span>
                      <span className="text-base">{item}</span>
                      {/* TODO: add price when available */}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Contact note */}
        <div className="mt-16 text-center bg-gold/5 border border-gold/20 rounded-sm p-8">
          <p className="text-cream/60 font-sans text-sm mb-4">
            {lang === 'he'
              ? 'לפרטים על תפריט ועל אירועים — צרו קשר ישירות'
              : 'Для уточнения меню и деталей мероприятий — свяжитесь с нами напрямую'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/972506461983"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3 rounded-sm hover:bg-[#22c05e] transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="tel:+972508005606"
              className="inline-flex items-center justify-center gap-2 border border-gold text-gold text-sm font-semibold px-6 py-3 rounded-sm hover:bg-gold/10 transition-colors"
            >
              +972-50-800-5606
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
