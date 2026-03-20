'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useMotionValue, useAnimationFrame } from 'motion/react'
import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'

type Img = { src: string; portrait: boolean }

// Strict alternating portrait/landscape order
const ROW1: Img[] = [
  { src: '/images/gallery-3.jpg', portrait: true },
  { src: '/images/gallery-1.jpg', portrait: false },
  { src: '/images/gallery-4.jpg', portrait: true },
  { src: '/images/gallery-2.jpg', portrait: false },
  { src: '/images/gallery-5.jpg', portrait: true },
  { src: '/images/gallery-7.jpg', portrait: false },
]

const ROW2: Img[] = [
  { src: '/images/gallery-8.jpg', portrait: false },
  { src: '/images/gallery-6.jpg', portrait: true },
  { src: '/images/gallery-1.jpg', portrait: false },
  { src: '/images/gallery-9.jpg', portrait: true },
  { src: '/images/gallery-2.jpg', portrait: false },
  { src: '/images/gallery-4.jpg', portrait: true },
]

const ITEM_H = 220
const GAP = 4
const LANDSCAPE_W = 330   // 220 × (1600/1066)
const PORTRAIT_W = 147    // 220 × (1066/1600)
const BASE_SPEED = 18     // px/s normal
const SLOW_SPEED = 5      // px/s on hover

function itemW(portrait: boolean) {
  return portrait ? PORTRAIT_W : LANDSCAPE_W
}

// Include one GAP after every item (even last) for seamless loop reset
function setWidth(images: Img[]) {
  return images.reduce((sum, img) => sum + itemW(img.portrait) + GAP, 0)
}

function MarqueeRow({ images, reverse = false }: { images: Img[]; reverse?: boolean }) {
  const sw = setWidth(images)
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

  const tripled = [...images, ...images, ...images]

  return (
    <div
      className="gallery-marquee-wrap"
      onMouseEnter={() => { targetSpeed.current = SLOW_SPEED }}
      onMouseLeave={() => { targetSpeed.current = BASE_SPEED }}
      onTouchStart={() => { targetSpeed.current = SLOW_SPEED }}
      onTouchEnd={() => { targetSpeed.current = BASE_SPEED }}
    >
      <motion.div className="gallery-marquee-track" style={{ x }}>
        {tripled.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 relative overflow-hidden"
            style={{ width: itemW(img.portrait), height: ITEM_H, marginRight: GAP, flexShrink: 0 }}
          >
            <Image
              src={img.src}
              alt=""
              fill
              className="object-cover object-center"
              sizes={img.portrait ? '147px' : '330px'}
              unoptimized
            />
          </div>
        ))}
      </motion.div>
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
          <Link href="/gallery" className="text-white/50 hover:text-gold text-sm transition-colors font-sans tracking-wide">
            {t.ui.seeAllPhotos}
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <MarqueeRow images={ROW1} />
        <MarqueeRow images={ROW2} reverse />
      </div>

      <div className="text-center mt-8">
        <Link href="/gallery" className="text-white/40 hover:text-gold text-sm transition-colors font-sans tracking-widest uppercase">
          {t.ui.seeAllPhotos}
        </Link>
      </div>
    </section>
  )
}
