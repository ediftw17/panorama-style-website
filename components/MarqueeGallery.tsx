'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'

const ROW1 = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
]

const ROW2 = [
  '/images/gallery-7.jpg',
  '/images/gallery-8.jpg',
  '/images/gallery-9.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-6.jpg',
]

function MarqueeRow({ images, reverse = false }: { images: string[]; reverse?: boolean }) {
  // Triple for seamless loop
  const tripled = [...images, ...images, ...images]

  return (
    <div className="gallery-marquee-wrap">
      <div
        className={`gallery-marquee-track ${reverse ? 'gallery-marquee-reverse' : ''}`}
      >
        {tripled.map((src, i) => (
          <div key={i} className="gallery-marquee-item">
            <Image src={src} alt="" fill className="object-cover" sizes="300px" unoptimized />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function MarqueeGallery() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <section className="bg-black border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-10">
        <div className="reveal flex items-end justify-between">
          <div>
            <p className="text-gold/60 text-[11px] tracking-[0.3em] uppercase font-sans mb-2">
              {t.ui.photosLabel}
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">
              {t.ui.galleryTitle}
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-white/50 hover:text-gold text-sm transition-colors font-sans tracking-wide"
          >
            {t.ui.seeAllPhotos}
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <MarqueeRow images={ROW1} />
        <MarqueeRow images={ROW2} reverse />
      </div>

      <div className="text-center mt-8">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-white/40 hover:text-gold text-sm transition-colors font-sans tracking-widest uppercase"
        >
          {t.ui.seeAllPhotos}
        </Link>
      </div>
    </section>
  )
}
