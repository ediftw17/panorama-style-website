'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'

const ROW1 = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
]

const ROW2 = [
  '/images/gallery-6.jpg',
  '/images/gallery-7.jpg',
  '/images/gallery-8.jpg',
  '/images/gallery-9.jpg',
  '/images/gallery-1.jpg',
  '/images/gallery-3.jpg',
]

const LERP = 0.06
const BASE_SPEED = 0.45
const ITEM_W = 320
const ITEM_H = 210
const GAP = 12 // matches mr-3 = 0.75rem = 12px

// singleWidth = one full set width (each item contributes itemW + gap, including after last)
function getSingleWidth(images: string[]) {
  return images.length * (ITEM_W + GAP)
}

function MarqueeRow({ images, reverse = false }: { images: string[]; reverse?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const xRef = useRef(reverse ? -getSingleWidth(images) : 0)
  const speedRef = useRef(reverse ? -BASE_SPEED : BASE_SPEED)
  const targetRef = useRef(reverse ? -BASE_SPEED : BASE_SPEED)
  const rafRef = useRef<number>()
  const singleWidth = getSingleWidth(images)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const loop = () => {
      speedRef.current += (targetRef.current - speedRef.current) * LERP
      xRef.current -= speedRef.current

      if (!reverse && xRef.current <= -singleWidth) {
        xRef.current += singleWidth
      } else if (reverse && xRef.current >= 0) {
        xRef.current -= singleWidth
      }

      track.style.transform = `translateX(${xRef.current}px)`
      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [reverse, singleWidth])

  const handleHoverIn = () => { targetRef.current = 0 }
  const handleHoverOut = () => { targetRef.current = reverse ? -BASE_SPEED : BASE_SPEED }

  const tripled = [...images, ...images, ...images]

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
      onTouchStart={handleHoverIn}
      onTouchEnd={handleHoverOut}
    >
      <div
        ref={trackRef}
        className="flex"
        style={{ willChange: 'transform' }}
      >
        {tripled.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 relative overflow-hidden"
            style={{ width: ITEM_W, height: ITEM_H, marginRight: GAP }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="320px"
              unoptimized
            />
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
    <section className="bg-black border-t border-white/5 py-16 overflow-hidden">
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
