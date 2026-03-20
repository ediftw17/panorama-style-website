'use client'

import { useState } from 'react'
import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'
import EventsCTA from '@/components/EventsCTA'
import { WA_NUMBER } from '@/lib/wa'

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
)

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`w-4 h-4 text-gold/60 transition-transform duration-200 flex-shrink-0 ${open ? 'rotate-180' : ''}`}
    fill="none" stroke="currentColor" viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

interface FormData {
  hall: string
  eventType: string
  name: string
  phone: string
  date: string
  guests: string
  notes: string
}

export default function EventsClient() {
  const { lang } = useLang()
  const t = content[lang]
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [checkDate, setCheckDate] = useState('')
  const [form, setForm] = useState<FormData>({
    hall: '',
    eventType: '',
    name: '',
    phone: '',
    date: '',
    guests: '',
    notes: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const eventLabel = form.eventType ? `${form.eventType}, ` : ''
    const hallLabel = form.hall ? `${form.hall}, ` : ''
    const msg =
      lang === 'he'
        ? `שלום, אני ${form.name}. ${hallLabel}${eventLabel}תאריך: ${form.date}, כ-${form.guests} אורחים.${form.notes ? ' ' + form.notes : ''} טלפון: ${form.phone}`
        : lang === 'en'
        ? `Hello, my name is ${form.name}. ${hallLabel}${eventLabel}Date: ${form.date}, ~${form.guests} guests.${form.notes ? ' ' + form.notes : ''} Phone: ${form.phone}`
        : `Здравствуйте, меня зовут ${form.name}. ${hallLabel}${eventLabel}Дата: ${form.date}, ~${form.guests} гостей.${form.notes ? ' ' + form.notes : ''} Телефон: ${form.phone}`
    window.open(`https://wa.me/972506461983?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const labels = {
    packagesTitle: lang === 'he' ? 'חבילות אירוע' : lang === 'en' ? 'Event Packages' : 'Пакеты мероприятий',
    faqTitle: lang === 'he' ? 'שאלות נפוצות' : lang === 'en' ? 'FAQ' : 'Часто задаваемые вопросы',
    formTitle: lang === 'he' ? 'שלחו פרטים לתיאום' : lang === 'en' ? 'Send Inquiry' : 'Отправьте запрос',
    formLabel: lang === 'he' ? 'השאירו פרטים' : lang === 'en' ? 'Get in Touch' : 'Оставьте заявку',
    responseTime: lang === 'he' ? 'עונים תוך 2 שעות' : lang === 'en' ? 'We respond within 2 hours' : 'Отвечаем в течение 2 часов',
    hall: lang === 'he' ? 'בחירת אולם' : lang === 'en' ? 'Select Hall' : 'Выбор зала',
    hallPlaceholder: lang === 'he' ? 'בחרו אולם...' : lang === 'en' ? 'Choose hall...' : 'Выберите зал...',
    eventType: lang === 'he' ? 'סוג האירוע' : lang === 'en' ? 'Event Type' : 'Тип мероприятия',
    eventTypePlaceholder: lang === 'he' ? 'בחרו...' : lang === 'en' ? 'Select...' : 'Выберите...',
    name: lang === 'he' ? 'שם מלא' : lang === 'en' ? 'Full Name' : 'Имя',
    phone: lang === 'he' ? 'טלפון' : lang === 'en' ? 'Phone' : 'Телефон',
    date: lang === 'he' ? 'תאריך האירוע' : lang === 'en' ? 'Event Date' : 'Дата мероприятия',
    guests: lang === 'he' ? 'מספר אורחים' : lang === 'en' ? 'Guest Count' : 'Количество гостей',
    notes: lang === 'he' ? 'הערות (אופציונלי)' : lang === 'en' ? 'Notes (optional)' : 'Примечания (необязательно)',
    submit: lang === 'he' ? 'שלח בוואטסאפ' : lang === 'en' ? 'Send via WhatsApp' : 'Отправить в WhatsApp',
  }

  const eventTypes = t.events.types

  const checkDateMsg =
    lang === 'he'
      ? `שלום! רוצה לבדוק אם התאריך ${checkDate} פנוי לאירוע`
      : lang === 'en'
      ? `Hi! I'd like to check if ${checkDate} is available for an event`
      : `Здравствуйте! Хочу узнать, свободна ли дата ${checkDate} для мероприятия`

  return (
    <div className="min-h-screen bg-background pt-20">
      <EventsCTA />

      {/* Date availability checker */}
      <section className="py-10 px-4 sm:px-8 bg-[#0d0d0d] border-b border-white/5">
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-white/50 text-xs uppercase tracking-[0.25em] font-sans mb-4">
            {lang === 'he' ? 'בדקו את התאריך שלכם' : lang === 'en' ? 'Check your date' : 'Проверьте свою дату'}
          </p>
          <div className="flex gap-2">
            <input
              type="date"
              value={checkDate}
              onChange={e => setCheckDate(e.target.value)}
              className="flex-1 bg-background border border-gold/20 text-cream rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/50 transition-colors"
            />
            <a
              href={checkDate ? `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(checkDateMsg)}` : '#'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => { if (!checkDate) e.preventDefault() }}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-sm transition-all ${
                checkDate
                  ? 'bg-gold text-black hover:bg-gold/90'
                  : 'bg-white/10 text-white/30 cursor-not-allowed'
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {lang === 'he' ? 'בדוק' : lang === 'en' ? 'Check' : 'Проверить'}
            </a>
          </div>
          <p className="text-center text-white/25 text-[11px] font-sans mt-3">
            {lang === 'he' ? 'נענה תוך שעתיים' : lang === 'en' ? 'We reply within 2 hours' : 'Ответим в течение 2 часов'}
          </p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 px-4 sm:px-8 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold/60 text-xs uppercase tracking-[0.25em] font-sans">
              {labels.packagesTitle}
            </span>
            <h2 className="font-playfair text-4xl font-light text-white mt-2">
              {lang === 'he' ? 'בחרו את החבילה המתאימה' : lang === 'en' ? 'Choose Your Package' : 'Выберите пакет'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {t.packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-xl p-6 border flex flex-col ${
                  pkg.highlight
                    ? 'bg-gold/8 border-gold/40 ring-1 ring-gold/20'
                    : pkg.name === 'VIP'
                    ? 'bg-white/[0.03] border-gold/20 shadow-[0_0_40px_rgba(201,168,76,0.06)]'
                    : 'bg-white/[0.02] border-white/8'
                }`}
              >
                {pkg.tag && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-black text-[10px] font-semibold px-3 py-1 rounded-full tracking-wide uppercase">
                      {pkg.tag}
                    </span>
                  </div>
                )}
                <div className="mb-5">
                  <h3 className="font-playfair text-xl text-white mb-1">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className={`font-playfair text-3xl font-light ${pkg.highlight || pkg.name === 'VIP' ? 'text-gold' : 'text-white'}`}>
                      {pkg.price}
                    </span>
                    <span className="text-white/30 text-xs font-sans">{pkg.perPerson}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckIcon />
                      <span className="text-white/65 text-xs font-sans leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/972506461983?text=${encodeURIComponent(
                    lang === 'he'
                      ? `שלום, מעוניין/ת בחבילת ${pkg.name} (${pkg.price} לאדם)`
                      : lang === 'en'
                      ? `Hello, I'm interested in the ${pkg.name} package (${pkg.price} ${pkg.perPerson})`
                      : `Здравствуйте, интересует пакет ${pkg.name} (${pkg.price} ${pkg.perPerson})`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center text-xs font-semibold py-3 rounded-lg transition-all ${
                    pkg.highlight
                      ? 'bg-gold text-black hover:bg-gold/90'
                      : 'border border-white/15 text-white/60 hover:border-gold/40 hover:text-gold'
                  }`}
                >
                  {lang === 'he' ? 'בחרו חבילה זו' : lang === 'en' ? 'Select Package' : 'Выбрать пакет'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-8 bg-[#0e0e0e]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-gold/60 text-xs uppercase tracking-[0.25em] font-sans">
              {labels.faqTitle}
            </span>
          </div>

          <div className="space-y-2">
            {t.faq.map((item, i) => (
              <div
                key={i}
                className="border border-white/7 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white/80 text-sm font-sans">{item.q}</span>
                  <ChevronIcon open={openFaq === i} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-white/45 text-sm font-sans leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-4 bg-[#111]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-gold/60 text-xs uppercase tracking-[0.25em] font-sans">
              {labels.formLabel}
            </span>
            <h2 className="font-playfair text-4xl font-light text-cream mt-2">
              {labels.formTitle}
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-darkcard border border-white/6 rounded-xl p-8 space-y-5"
          >
            {/* Hall selector */}
            <div>
              <label className="block text-white/40 text-[10px] uppercase tracking-widest font-sans mb-2">
                {labels.hall}
              </label>
              <select
                name="hall"
                value={form.hall}
                onChange={handleChange}
                className="w-full bg-background border border-gold/15 text-cream/80 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/40 transition-colors appearance-none"
              >
                <option value="">{labels.hallPlaceholder}</option>
                {t.halls.map((h) => (
                  <option key={h.key} value={h.name}>{h.name} ({h.capacity} {lang === 'he' ? 'אורחים' : lang === 'en' ? 'guests' : 'гостей'})</option>
                ))}
              </select>
            </div>

            {/* Event type */}
            <div>
              <label className="block text-white/40 text-[10px] uppercase tracking-widest font-sans mb-2">
                {labels.eventType}
              </label>
              <select
                name="eventType"
                value={form.eventType}
                onChange={handleChange}
                className="w-full bg-background border border-gold/15 text-cream/80 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/40 transition-colors appearance-none"
              >
                <option value="">{labels.eventTypePlaceholder}</option>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Name + Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white/40 text-[10px] uppercase tracking-widest font-sans mb-2">
                  {labels.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-gold/15 text-cream placeholder-white/20 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/40 text-[10px] uppercase tracking-widest font-sans mb-2">
                  {labels.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+972-50-..."
                  className="w-full bg-background border border-gold/15 text-cream placeholder-white/20 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
            </div>

            {/* Date + Guests */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white/40 text-[10px] uppercase tracking-widest font-sans mb-2">
                  {labels.date}
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-gold/15 text-cream rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/40 text-[10px] uppercase tracking-widest font-sans mb-2">
                  {labels.guests}
                </label>
                <input
                  type="number"
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  min="40"
                  max="350"
                  required
                  placeholder="40–350"
                  className="w-full bg-background border border-gold/15 text-cream placeholder-white/20 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-white/40 text-[10px] uppercase tracking-widest font-sans mb-2">
                {labels.notes}
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={3}
                className="w-full bg-background border border-gold/15 text-cream placeholder-white/20 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/40 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gold text-black font-semibold py-4 rounded-sm hover:bg-gold/90 transition-colors"
            >
              <svg className="w-5 h-5 text-black/80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {labels.submit}
            </button>

            <p className="text-center text-white/25 text-xs font-sans">{labels.responseTime}</p>
          </form>
        </div>
      </section>
    </div>
  )
}
