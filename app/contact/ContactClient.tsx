'use client'

import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'

export default function ContactClient() {
  const { lang } = useLang()
  const t = content[lang].contact

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold/60 text-xs uppercase tracking-widest font-sans">
            {lang === 'he' ? 'בואו לבקר' : lang === 'en' ? 'Come Visit Us' : 'Приходите к нам'}
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-cream mt-2">
            {t.title}
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact cards */}
          <div className="space-y-4">
            {/* Address */}
            <div className="bg-darkcard border border-gold/10 rounded-sm p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gold/60 text-xs uppercase tracking-widest font-sans mb-1">
                    {lang === 'he' ? 'כתובת' : lang === 'en' ? 'Address' : 'Адрес'}
                  </div>
                  <p className="text-cream/80 font-sans text-sm">{t.address}</p>
                  <a
                    href="https://maps.google.com/maps?q=%D7%97%D7%9C%D7%95%D7%A6%D7%99+%D7%94%D7%AA%D7%A2%D7%A9%D7%99%D7%99%D7%94+19+%D7%97%D7%99%D7%A4%D7%94"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold/60 hover:text-gold text-xs font-sans mt-1 inline-block transition-colors"
                  >
                    {lang === 'he' ? 'פתח במפות ←' : 'Открыть в картах →'}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-darkcard border border-gold/10 rounded-sm p-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gold/60 text-xs uppercase tracking-widest font-sans mb-1">
                    {lang === 'he' ? 'טלפון' : lang === 'en' ? 'Phone' : 'Телефон'}
                  </div>
                  <a
                    href={`tel:${t.phone.replace(/[^+\d]/g, '')}`}
                    className="text-cream/80 hover:text-gold font-sans text-sm transition-colors"
                  >
                    {t.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-darkcard border border-gold/10 rounded-sm p-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#25D366]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gold/60 text-xs uppercase tracking-widest font-sans mb-1">
                    WhatsApp
                  </div>
                  <a
                    href="https://wa.me/972506461983"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/80 hover:text-gold font-sans text-sm transition-colors"
                  >
                    {t.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            {/* Facebook */}
            <div className="bg-darkcard border border-gold/10 rounded-sm p-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#1877F2]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gold/60 text-xs uppercase tracking-widest font-sans mb-1">
                    {t.facebookLabel}
                  </div>
                  <a
                    href="https://www.facebook.com/people/Panorama-Style/100041307526123/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/80 hover:text-gold font-sans text-sm transition-colors"
                  >
                    Panorama Style
                  </a>
                </div>
              </div>
            </div>

            {/* Hours note */}
            <div className="bg-gold/5 border border-gold/20 rounded-sm p-4">
              <p className="text-cream/50 text-sm font-sans">{t.hoursNote}</p>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-sm overflow-hidden border border-gold/20 h-[500px]">
            <iframe
              src="https://maps.google.com/maps?q=%D7%97%D7%9C%D7%95%D7%A6%D7%99+%D7%94%D7%AA%D7%A2%D7%A9%D7%99%D7%99%D7%94+19+%D7%97%D7%99%D7%A4%D7%94&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Panorama Style location"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
