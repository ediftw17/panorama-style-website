'use client'

import { useState } from 'react'
import Image from 'next/image'

export interface GalleryImage {
  src: string
  category: string
  caption?: string
}

interface GalleryGridProps {
  images: GalleryImage[]
  preview?: boolean
  activeCategory?: string
}

const CameraIcon = () => (
  <svg className="w-8 h-8 text-gold/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export default function GalleryGrid({ images, preview = false, activeCategory }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set())

  const handleError = (src: string) => {
    setErrorImages((prev) => new Set(prev).add(src))
  }

  const filtered = activeCategory && activeCategory !== 'all'
    ? images.filter((img) => img.category === activeCategory)
    : images

  const displayed = preview ? filtered.slice(0, 6) : filtered

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-1.5 space-y-1.5">
        {displayed.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-sm bg-[#111]"
            onClick={() => !errorImages.has(img.src) && setSelectedImage(img)}
          >
            {errorImages.has(img.src) ? (
              <div className="w-full h-32 flex items-center justify-center border border-white/5">
                <CameraIcon />
              </div>
            ) : (
              <div className="relative overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.caption ?? `Gallery image ${i + 1}`}
                  width={400}
                  height={300}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={() => handleError(img.src)}
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white/80 text-[10px] font-sans">{img.caption}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/97 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Image
            src={selectedImage.src}
            alt={selectedImage.caption ?? 'Gallery image'}
            width={1400}
            height={900}
            className="max-w-full max-h-[90vh] object-contain"
            unoptimized
          />
        </div>
      )}
    </>
  )
}
