'use client'

import { useState } from 'react'
import GalleryGrid, { type GalleryImage } from '@/components/GalleryGrid'
import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'

const allGalleryImages: GalleryImage[] = [
  { src: '/images/gallery-1.jpg', category: 'venue' },
  { src: '/images/gallery-2.jpg', category: 'venue' },
  { src: '/images/gallery-3.jpg', category: 'venue' },
  { src: '/images/gallery-4.jpg', category: 'venue' },
  { src: '/images/gallery-5.jpg', category: 'venue' },
  { src: '/images/gallery-6.jpg', category: 'venue' },
  { src: '/images/gallery-7.jpg', category: 'venue' },
  { src: '/images/gallery-8.jpg', category: 'venue' },
  { src: '/images/gallery-9.jpg', category: 'venue' },
]

const CATEGORIES = [
  { key: 'all', he: 'הכל', ru: 'Все', en: 'All' },
  { key: 'weddings', he: 'חתונות', ru: 'Свадьбы', en: 'Weddings' },
  { key: 'birthdays', he: 'ימי הולדת', ru: 'Дни рождения', en: 'Birthdays' },
  { key: 'corporate', he: 'אירועי חברה', ru: 'Корпоративы', en: 'Corporate' },
  { key: 'venue', he: 'האולם', ru: 'Зал', en: 'Venue' },
]

export default function GalleryClient() {
  const { lang } = useLang()
  const t = content[lang]
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-gold/60 text-xs uppercase tracking-widest font-sans">
            {t.ui.photosLabel}
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl font-light text-cream mt-2">
            {t.ui.galleryTitle}
          </h1>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all duration-200 ${
                activeCategory === cat.key
                  ? 'bg-gold text-black font-medium'
                  : 'border border-white/15 text-white/50 hover:border-gold/40 hover:text-white/75'
              }`}
            >
              {cat[lang]}
            </button>
          ))}
        </div>

        <GalleryGrid images={allGalleryImages} activeCategory={activeCategory} />

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-cream/40 text-sm font-sans mb-4">
            {lang === 'he' ? 'רוצים לערוך אירוע במקום?' : lang === 'en' ? 'Want to host an event here?' : 'Хотите провести мероприятие?'}
          </p>
          <a
            href="https://wa.me/972506461983"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3 rounded-sm hover:bg-[#22c05e] transition-colors"
          >
            {t.events.ctaWhatsapp}
          </a>
        </div>
      </div>
    </div>
  )
}
