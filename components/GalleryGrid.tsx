'use client'

import { useState } from 'react'
import Image from 'next/image'

interface GalleryGridProps {
  images: string[]
  preview?: boolean
}

const CameraIcon = () => (
  <svg className="w-10 h-10 text-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
)

export default function GalleryGrid({ images, preview = false }: GalleryGridProps) {
  const displayed = preview ? images.slice(0, 6) : images
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set())

  const handleError = (src: string) => {
    setErrorImages((prev) => new Set(prev).add(src))
  }

  return (
    <>
      <div className="columns-2 md:columns-3 gap-2">
        {displayed.map((src, i) => (
          <div
            key={src}
            className="w-full mb-2 cursor-pointer group relative"
            onClick={() => !errorImages.has(src) && setSelectedImage(src)}
          >
            {errorImages.has(src) ? (
              <div className="w-full h-48 bg-darkcard border border-gold/20 rounded-sm flex items-center justify-center">
                <CameraIcon />
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-sm">
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  width={400}
                  height={300}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={() => handleError(src)}
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-cream/60 hover:text-cream"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Image
            src={selectedImage}
            alt="Gallery preview"
            width={1200}
            height={800}
            className="max-w-full max-h-[90vh] object-contain rounded-sm"
            unoptimized
          />
        </div>
      )}
    </>
  )
}
