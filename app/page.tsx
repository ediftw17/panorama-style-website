'use client'

import Link from 'next/link'
import Hero from '@/components/Hero'
import GalleryGrid from '@/components/GalleryGrid'
import ReviewsStrip from '@/components/ReviewsStrip'
import EventsCTA from '@/components/EventsCTA'
import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'

const galleryImages = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
  '/images/gallery-7.jpg',
  '/images/gallery-8.jpg',
  '/images/gallery-9.jpg',
]

export default function HomePage() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* About */}
      <section id="about" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold/60 text-xs uppercase tracking-widest font-sans">
                {lang === 'he' ? 'מי אנחנו' : 'О нас'}
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mt-2 mb-6">
                {t.about.title}
              </h2>
              <p className="text-cream/70 text-lg leading-relaxed font-sans">{t.about.text}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-darkcard border border-gold/20 rounded-sm p-6 text-center hover:border-gold/40 transition-colors">
                <div className="font-playfair text-4xl font-bold text-gold mb-2">
                  {t.about.stat1Value}
                </div>
                <div className="text-cream/50 text-sm font-sans">{t.about.stat1Label}</div>
              </div>
              <div className="bg-darkcard border border-gold/20 rounded-sm p-6 text-center hover:border-gold/40 transition-colors">
                <div className="font-playfair text-2xl font-bold text-gold mb-2">
                  {t.about.stat2Value}
                </div>
                <div className="text-cream/50 text-sm font-sans">{t.about.stat2Label}</div>
              </div>
              <div className="bg-darkcard border border-gold/20 rounded-sm p-6 text-center hover:border-gold/40 transition-colors">
                <div className="font-playfair text-4xl font-bold text-gold mb-2">
                  {t.about.stat3Value}
                </div>
                <div className="text-cream/50 text-sm font-sans">{t.about.stat3Label}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section id="gallery-preview" className="py-16 px-4 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-gold/60 text-xs uppercase tracking-widest font-sans">
                {lang === 'he' ? 'צילומים' : 'Фотографии'}
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cream mt-1">
                {lang === 'he' ? 'גלריה' : 'Галерея'}
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-gold text-sm hover:text-gold/80 transition-colors font-sans border-b border-gold/30 hover:border-gold pb-0.5"
            >
              {lang === 'he' ? 'לכל התמונות ←' : 'Все фото →'}
            </Link>
          </div>
          <GalleryGrid images={galleryImages} preview={true} />
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="text-gold/60 text-xs uppercase tracking-widest font-sans">
              {lang === 'he' ? 'מה אומרים עלינו' : 'Отзывы'}
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cream mt-1">
              {lang === 'he' ? 'ביקורות' : 'Что о нас говорят'}
            </h2>
          </div>
          <ReviewsStrip />
        </div>
      </section>

      {/* Events CTA */}
      <EventsCTA />

      {/* Contact snippet */}
      <section id="contact-snippet" className="py-16 px-4 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-gold/60 text-xs uppercase tracking-widest font-sans">
                {lang === 'he' ? 'איפה אנחנו' : 'Как нас найти'}
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cream mt-1 mb-6">
                {t.contact.title}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-cream/70 font-sans text-sm">{t.contact.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${t.contact.phone.replace(/[^+\d]/g, '')}`} className="text-cream/70 hover:text-gold transition-colors font-sans text-sm">
                    {t.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#25D366] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <a href="https://wa.me/972506461983" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-gold transition-colors font-sans text-sm">
                    {t.contact.whatsapp}
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-block border border-gold text-gold text-sm px-6 py-3 hover:bg-gold/10 transition-colors"
                >
                  {lang === 'he' ? 'לדף יצירת קשר' : 'Страница контактов'}
                </Link>
              </div>
            </div>

            {/* Map link card */}
            <a
              href="https://maps.google.com/maps?q=חלוצי+התעשייה+19+חיפה"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-darkcard border border-gold/20 rounded-sm p-8 text-center hover:border-gold/40 transition-colors group"
            >
              <svg className="w-12 h-12 text-gold/40 group-hover:text-gold/70 transition-colors mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-cream/60 text-sm font-sans">
                {lang === 'he' ? 'פתח במפות Google' : 'Открыть в Google Maps'}
              </p>
              <p className="text-gold/60 text-xs mt-1 font-sans">{t.contact.address}</p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
