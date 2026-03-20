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

// Must match the CSS values below
const ITEM_W = 300
const GAP = 10
const LERP = 0.04
const BASE_SPEED = 0.28       // px per frame at 60fps — normal cruise
const HOVER_SPEED = 0.05      // slows to ~18% on hover, doesn't stop

function getSetWidth(count: number) {
  // Each item contributes ITEM_W + GAP (including virtual gap after last item)
  // This gives pixel-perfect seamless looping
  return count * (ITEM_W + GAP)
}

function MarqueeRow({ images, reverse = false }: { images: string[]; reverse?: boolean }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const xRef = useRef(0)
  const speedRef = useRef(BASE_SPEED)
  const targetRef = useRef(BASE_SPEED)
  const rafRef = useRef<number>()
  const setWidth = getSetWidth(images.length)

  // Direction multiplier: +1 = left scroll, -1 = right scroll
  const dir = reverse ? -1 : 1

  useEffect(() => {
    // Reverse row starts at -setWidth (mid-loop) so it scrolls toward 0 seamlessly
    xRef.current = reverse ? -setWidth : 0
    speedRef.current = BASE_SPEED
    targetRef.current = BASE_SPEED

    const track = trackRef.current
    if (!track) return

    const loop = () => {
      speedRef.current += (targetRef.current - speedRef.current) * LERP
      xRef.current -= speedRef.current * dir

      // Reset position for seamless loop
      if (!reverse && xRef.current <= -setWidth) xRef.current += setWidth
      if (reverse && xRef.current >= 0) xRef.current -= setWidth

      track.style.transform = `translateX(${xRef.current}px)`
      rafRef.current = requestAnimationFrame(loop)
    }

    // Set initial position before first frame
    track.style.transform = `translateX(${xRef.current}px)`
    rafRef.current = requestAnimationFrame(loop)

    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [reverse, setWidth, dir])

  const slowDown = () => { targetRef.current = HOVER_SPEED }
  const resume   = () => { targetRef.current = BASE_SPEED }

  const tripled = [...images, ...images, ...images]

  return (
    <div
      ref={wrapRef}
      className="gallery-marquee-wrap"
      onMouseEnter={slowDown}
      onMouseLeave={resume}
      onTouchStart={slowDown}
      onTouchEnd={resume}
    >
      <div ref={trackRef} className="gallery-marquee-track">
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
