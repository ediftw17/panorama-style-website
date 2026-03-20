'use client'

import { useState } from 'react'
import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'
import EventsCTA from '@/components/EventsCTA'

interface FormData {
  name: string
  phone: string
  date: string
  guests: string
  message: string
}

export default function EventsPage() {
  const { lang } = useLang()
  const t = content[lang].events

  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    date: '',
    guests: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg =
      lang === 'he'
        ? `שלום, אני ${form.name}. מעוניין/ת לברר לגבי אירוע בתאריך ${form.date}, לכ-${form.guests} אורחים. ${form.message ? 'הודעה: ' + form.message : ''} טלפון: ${form.phone}`
        : `Здравствуйте, меня зовут ${form.name}. Хочу узнать о мероприятии на ${form.date}, ~${form.guests} гостей. ${form.message ? 'Сообщение: ' + form.message : ''} Телефон: ${form.phone}`

    const waUrl = `https://wa.me/972506461983?text=${encodeURIComponent(msg)}`
    window.open(waUrl, '_blank')
  }

  const labels =
    lang === 'he'
      ? {
          formTitle: 'שלחו פרטים לתיאום',
          name: 'שם מלא',
          phone: 'טלפון',
          date: 'תאריך האירוע',
          guests: 'מספר אורחים',
          message: 'הודעה (אופציונלי)',
          submit: 'שלח בוואטסאפ',
        }
      : {
          formTitle: 'Отправьте запрос',
          name: 'Имя',
          phone: 'Телефон',
          date: 'Дата мероприятия',
          guests: 'Количество гостей',
          message: 'Сообщение (необязательно)',
          submit: 'Отправить в WhatsApp',
        }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Events CTA section */}
      <EventsCTA />

      {/* Booking form */}
      <section className="py-20 px-4 bg-[#111]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-gold/60 text-xs uppercase tracking-widest font-sans">
              {lang === 'he' ? 'השאירו פרטים' : 'Оставьте заявку'}
            </span>
            <h2 className="font-playfair text-4xl font-bold text-cream mt-2">
              {labels.formTitle}
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-darkcard border border-gold/10 rounded-sm p-8 space-y-5"
          >
            {/* Name */}
            <div>
              <label className="block text-cream/60 text-xs uppercase tracking-widest font-sans mb-2">
                {labels.name}
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-background border border-gold/20 text-cream placeholder-cream/20 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/50 transition-colors"
                placeholder={labels.name}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-cream/60 text-xs uppercase tracking-widest font-sans mb-2">
                {labels.phone}
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full bg-background border border-gold/20 text-cream placeholder-cream/20 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="+972-50-..."
              />
            </div>

            {/* Date + Guests side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-cream/60 text-xs uppercase tracking-widest font-sans mb-2">
                  {labels.date}
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-gold/20 text-cream placeholder-cream/20 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-cream/60 text-xs uppercase tracking-widest font-sans mb-2">
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
                  className="w-full bg-background border border-gold/20 text-cream placeholder-cream/20 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/50 transition-colors"
                  placeholder="40–350"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-cream/60 text-xs uppercase tracking-widest font-sans mb-2">
                {labels.message}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-background border border-gold/20 text-cream placeholder-cream/20 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
                placeholder={lang === 'he' ? 'סוג האירוע, בקשות מיוחדות...' : 'Тип мероприятия, особые пожелания...'}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-4 rounded-sm hover:bg-[#22c05e] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {labels.submit}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
