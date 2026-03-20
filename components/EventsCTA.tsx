'use client'

import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'

const eventIcons: Record<string, string> = {
  // Hebrew
  'חתונות': '💍',
  'בר/בת מצווה': '✡',
  'ימי הולדת': '🎂',
  'אירועי חברה': '🏢',
  'ימי נישואין': '🥂',
  'מסיבות פרטיות': '🎉',
  // Russian
  'Свадьбы': '💍',
  'Бар/Бат-мицвы': '✡',
  'Дни рождения': '🎂',
  'Корпоративы': '🏢',
  'Годовщины': '🥂',
  'Частные вечеринки': '🎉',
  // English
  'Weddings': '💍',
  'Bar/Bat Mitzvahs': '✡',
  'Birthdays': '🎂',
  'Corporate events': '🏢',
  'Anniversaries': '🥂',
  'Private parties': '🎉',
}

export default function EventsCTA() {
  const { lang } = useLang()
  const t = content[lang].events

  const phone = '+972508005606'
  const whatsapp = '972506461983'

  const whatsappMsg = encodeURIComponent(
    lang === 'he'
      ? 'שלום, אני מעוניין/ת לברר פרטים על אירוע בפנורמה סטייל'
      : lang === 'en'
      ? 'Hello, I would like to inquire about hosting an event at Panorama Style'
      : 'Здравствуйте, хочу узнать подробности о мероприятии в Panorama Style'
  )

  return (
    <section className="relative bg-background border-t-2 border-gold/40 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Full-width header */}
        <div className="mb-12">
          <h2 className="reveal font-playfair text-4xl md:text-5xl font-bold text-gold mb-4">
            {t.title}
          </h2>
          <p className="text-cream/70 text-lg font-sans leading-relaxed max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        {/* Two equal-height columns */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Left: details */}
          <div className="flex flex-col border border-white/[0.06] rounded-xl p-8">
            {/* Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-gold/10 border border-gold/30 rounded-sm px-4 py-2">
                <div className="text-gold/60 text-xs font-sans">{t.capacityLabel}</div>
                <div className="text-cream font-semibold text-sm font-sans">{t.capacity}</div>
              </div>
              <div className="bg-gold/10 border border-gold/30 rounded-sm px-4 py-2">
                <div className="text-gold/60 text-xs font-sans">{t.priceLabel}</div>
                <div className="text-cream font-semibold text-sm font-sans">{t.price}</div>
              </div>
            </div>

            {/* Includes */}
            <div className="mb-6 flex-1">
              <h3 className="text-gold/80 text-xs uppercase tracking-widest font-sans mb-4">
                {lang === 'he' ? 'כלול במחיר' : lang === 'en' ? 'Included in price' : 'Включено в стоимость'}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {t.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-cream/80 text-sm font-sans">
                    <span className="text-gold text-xs flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Add-ons */}
            <div>
              <h3 className="text-gold/60 text-xs uppercase tracking-widest font-sans mb-3">
                {lang === 'he' ? 'תוספות (בתשלום נפרד)' : lang === 'en' ? 'Add-ons (extra charge)' : 'Дополнительно (за доп. плату)'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {t.addons.map((addon, i) => (
                  <span key={i} className="text-cream/50 text-xs border border-cream/10 rounded px-2 py-1 font-sans">
                    {addon}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: event types + note + CTAs */}
          <div className="flex flex-col border border-white/[0.06] rounded-xl p-8">
            <h3 className="text-gold/80 text-xs uppercase tracking-widest font-sans mb-5">
              {lang === 'he' ? 'סוגי אירועים' : lang === 'en' ? 'Event types' : 'Типы мероприятий'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 flex-1">
              {t.types.map((type, i) => (
                <div
                  key={i}
                  className="bg-darkcard border border-gold/10 rounded-sm p-4 text-center hover:border-gold/30 transition-colors"
                >
                  <div className="text-2xl mb-2">{eventIcons[type] || '★'}</div>
                  <div className="text-cream/80 text-xs font-sans">{type}</div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="bg-gold/5 border border-gold/20 rounded-sm p-4 mb-6">
              <p className="text-cream/60 text-sm font-sans leading-relaxed">
                {lang === 'he'
                  ? 'פתוחים בשבת · אפשר להביא אלכוהול · לא כשר'
                  : lang === 'en'
                  ? 'Open on Shabbat · Bring your own alcohol · Not kosher'
                  : 'Работаем в Шаббат · Можно со своим алкоголем · Не кошерно'}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${whatsapp}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-4 rounded-sm hover:bg-[#22c05e] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t.ctaWhatsapp}
              </a>
              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 border border-gold text-gold font-semibold px-6 py-4 rounded-sm hover:bg-gold/10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t.ctaPhone}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
