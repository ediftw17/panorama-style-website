'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useAnimationFrame } from 'motion/react'
import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'
import { seededShuffle, buildMediaList, getDailySeed } from '@/lib/facebook'
import type { MediaItem, FBPhoto, FBVideo } from '@/lib/facebook'

const ITEM_H = 220
const GAP = 4
const LANDSCAPE_W = 330
const PORTRAIT_W = 147
const BASE_SPEED = 18
const SLOW_SPEED = 5

// Static fallback while loading
const FALLBACK: MediaItem[] = [
  { id: 'f1', type: 'photo', src: '/images/gallery-1.jpg', isPortrait: false },
  { id: 'f2', type: 'photo', src: '/images/gallery-2.jpg', isPortrait: true },
  { id: 'f3', type: 'photo', src: '/images/gallery-3.jpg', isPortrait: false },
  { id: 'f4', type: 'photo', src: '/images/gallery-4.jpg', isPortrait: true },
  { id: 'f5', type: 'photo', src: '/images/gallery-5.jpg', isPortrait: false },
  { id: 'f6', type: 'photo', src: '/images/gallery-6.jpg', isPortrait: true },
  { id: 'f7', type: 'photo', src: '/images/gallery-7.jpg', isPortrait: false },
  { id: 'f8', type: 'photo', src: '/images/gallery-8.jpg', isPortrait: false },
  { id: 'f9', type: 'photo', src: '/images/gallery-9.jpg', isPortrait: true },
]

function itemW(isPortrait: boolean) { return isPortrait ? PORTRAIT_W : LANDSCAPE_W }
function rowWidth(items: MediaItem[]) { return items.reduce((sum, item) => sum + itemW(item.isPortrait) + GAP, 0) }

function MarqueeRow({ items, reverse = false }: { items: MediaItem[]; reverse?: boolean }) {
  const sw = rowWidth(items)
  const x = useMotionValue(reverse ? -sw : 0)
  const speed = useRef(BASE_SPEED)
  const targetSpeed = useRef(BASE_SPEED)

  useAnimationFrame((_, delta) => {
    speed.current += (targetSpeed.current - speed.current) * 0.05
    const dir = reverse ? -1 : 1
    const next = x.get() - (speed.current * delta / 1000) * dir
    if (!reverse && next <= -sw) x.set(next + sw)
    else if (reverse && next >= 0) x.set(next - sw)
    else x.set(next)
  })

  const tripled = [...items, ...items, ...items]

  return (
    <div
      dir="ltr"
      className="gallery-marquee-wrap"
      onMouseEnter={() => { targetSpeed.current = SLOW_SPEED }}
      onMouseLeave={() => { targetSpeed.current = BASE_SPEED }}
      onTouchStart={() => { targetSpeed.current = SLOW_SPEED }}
      onTouchEnd={() => { targetSpeed.current = BASE_SPEED }}
    >
      <motion.div className="gallery-marquee-track" style={{ x }}>
        {tripled.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="flex-shrink-0 relative overflow-hidden"
            style={{ width: itemW(item.isPortrait), height: ITEM_H, marginRight: GAP }}
          >
            {item.type === 'video' && item.videoSrc ? (
              <video
                src={item.videoSrc}
                className="absolute inset-0 w-full h-full object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <Image
                src={item.src}
                alt=""
                fill
                className={`object-cover ${item.isPortrait ? 'object-top' : 'object-center'}`}
                sizes={item.isPortrait ? '147px' : '330px'}
                unoptimized
              />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function splitRows(items: MediaItem[]): [MediaItem[], MediaItem[]] {
  const landscapes = items.filter(i => !i.isPortrait)
  const portraits = items.filter(i => i.isPortrait)
  // Interleave: landscape, portrait, landscape, portrait...
  const interleaved: MediaItem[] = []
  const len = Math.max(landscapes.length, portraits.length)
  for (let i = 0; i < len; i++) {
    if (i < landscapes.length) interleaved.push(landscapes[i])
    if (i < portraits.length) interleaved.push(portraits[i])
  }
  const half = Math.ceil(interleaved.length / 2)
  const r1 = interleaved.slice(0, half)
  const r2 = interleaved.slice(half)
  return [r1.length ? r1 : FALLBACK, r2.length ? r2 : FALLBACK]
}

export default function MarqueeGallery() {
  const { lang } = useLang()
  const t = content[lang]
  const [row1, setRow1] = useState<MediaItem[]>(FALLBACK.filter(i => i.isPortrait || !i.isPortrait).slice(0, 5))
  const [row2, setRow2] = useState<MediaItem[]>(FALLBACK.slice(4))

  useEffect(() => {
    Promise.all([
      fetch('/api/gallery?type=photos&limit=40').then(r => r.json()),
      fetch('/api/gallery?type=videos&limit=15').then(r => r.json()),
    ]).then(([photosRes, videosRes]) => {
      const photos: FBPhoto[] = photosRes.photos || []
      const videos: FBVideo[] = videosRes.videos || []
      if (!photos.length && !videos.length) return
      const seed = getDailySeed()
      const all = buildMediaList(photos, videos, seed)
      const [r1, r2] = splitRows(all)
      setRow1(r1)
      setRow2(r2)
    }).catch(() => {/* keep fallback */})
  }, [])

  return (
    <section className="bg-black border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-10">
        <div className="reveal flex items-end justify-between">
          <div>
            <p className="text-gold/60 text-[11px] tracking-[0.3em] uppercase font-sans mb-2">{t.ui.photosLabel}</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">{t.ui.galleryTitle}</h2>
          </div>
          <Link href="/gallery" className="text-white/50 hover:text-gold text-sm transition-colors font-sans tracking-wide">
            {t.ui.seeAllPhotos}
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>

      <div className="text-center mt-8">
        <Link href="/gallery" className="inline-block border border-white/25 text-white/70 px-8 py-2.5 text-sm font-sans tracking-wide hover:border-gold/50 hover:text-gold transition-all">
          {lang === 'ru' ? 'Смотреть все фото' : lang === 'he' ? 'ראה את כל התמונות' : 'View Full Gallery'}
        </Link>
      </div>
    </section>
  )
}
