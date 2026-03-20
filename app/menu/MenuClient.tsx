'use client'

import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'

export default function MenuClient() {
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
              href="tel:+972508005606"
              className="inline-flex flex-col items-center justify-center gap-0.5 border border-white/25 text-white/75 px-8 py-3 rounded-sm hover:border-white/50 hover:text-white transition-colors"
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                {lang === 'he' ? 'התקשר' : lang === 'en' ? 'Call' : 'Позвонить'}
              </span>
              <span className="text-[11px] font-normal opacity-60">+972-50-800-5606</span>
            </a>
            <a
              href="https://wa.me/972506461983"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center justify-center gap-0.5 bg-gold text-black px-8 py-3 rounded-sm hover:bg-gold/90 transition-colors"
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp
              </span>
              <span className="text-[11px] font-normal opacity-70">+972-50-646-1983</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
