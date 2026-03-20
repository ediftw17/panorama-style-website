'use client'

import GalleryGrid from '@/components/GalleryGrid'
import { useLang } from '@/lib/LanguageContext'

const allGalleryImages = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
  '/images/gallery-7.jpg',
  '/images/gallery-8.jpg',
  '/images/gallery-9.jpg',
  '/images/venue-interior.jpg',
]

export default function GalleryPage() {
  const { lang } = useLang()

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold/60 text-xs uppercase tracking-widest font-sans">
            {lang === 'he' ? 'צילומים' : 'Фотографии'}
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-cream mt-2">
            {lang === 'he' ? 'גלריה' : 'Галерея'}
          </h1>
        </div>

        <GalleryGrid images={allGalleryImages} preview={false} />

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-cream/50 text-sm font-sans mb-4">
            {lang === 'he'
              ? 'רוצים לערוך אירוע במקום? '
              : 'Хотите провести мероприятие? '}
          </p>
          <a
            href="https://wa.me/972506461983"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3 rounded-sm hover:bg-[#22c05e] transition-colors"
          >
            {lang === 'he' ? 'צרו קשר בוואטסאפ' : 'Написать в WhatsApp'}
          </a>
        </div>
      </div>
    </div>
  )
}
