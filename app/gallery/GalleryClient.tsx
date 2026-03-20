'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useLang } from '@/lib/LanguageContext'
import { waUrl, WA_DISPLAY, WA_PHONE_DISPLAY, WA_PHONE_TEL } from '@/lib/wa'
import type { FBPhoto, FBVideo } from '@/lib/facebook'

type Tab = 'photos' | 'videos'

function formatDuration(secs: number) {
  const m = Math.floor(secs / 60)
  const s = Math.floor(secs % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function GalleryClient() {
  const { lang } = useLang()
  const [tab, setTab] = useState<Tab>('photos')

  const [photos, setPhotos] = useState<FBPhoto[]>([])
  const [photosCursor, setPhotosCursor] = useState<string | undefined>()
  const [photosLoading, setPhotosLoading] = useState(true)
  const [photosLoadingMore, setPhotosLoadingMore] = useState(false)

  const [videos, setVideos] = useState<FBVideo[]>([])
  const [videosCursor, setVideosCursor] = useState<string | undefined>()
  const [videosLoading, setVideosLoading] = useState(false)
  const [videosLoadingMore, setVideosLoadingMore] = useState(false)
  const [videosFetched, setVideosFetched] = useState(false)

  useEffect(() => {
    fetch('/api/gallery?type=photos&limit=24')
      .then(r => r.json())
      .then(data => {
        setPhotos(data.photos || [])
        setPhotosCursor(data.nextCursor)
        setPhotosLoading(false)
      })
      .catch(() => setPhotosLoading(false))
  }, [])

  useEffect(() => {
    if (tab === 'videos' && !videosFetched) {
      setVideosLoading(true)
      fetch('/api/gallery?type=videos&limit=12')
        .then(r => r.json())
        .then(data => {
          setVideos(data.videos || [])
          setVideosCursor(data.nextCursor)
          setVideosLoading(false)
          setVideosFetched(true)
        })
        .catch(() => setVideosLoading(false))
    }
  }, [tab, videosFetched])

  const loadMorePhotos = () => {
    if (!photosCursor || photosLoadingMore) return
    setPhotosLoadingMore(true)
    fetch(`/api/gallery?type=photos&limit=24&cursor=${photosCursor}`)
      .then(r => r.json())
      .then(data => {
        setPhotos(prev => [...prev, ...(data.photos || [])])
        setPhotosCursor(data.nextCursor)
        setPhotosLoadingMore(false)
      })
      .catch(() => setPhotosLoadingMore(false))
  }

  const loadMoreVideos = () => {
    if (!videosCursor || videosLoadingMore) return
    setVideosLoadingMore(true)
    fetch(`/api/gallery?type=videos&limit=12&cursor=${videosCursor}`)
      .then(r => r.json())
      .then(data => {
        setVideos(prev => [...prev, ...(data.videos || [])])
        setVideosCursor(data.nextCursor)
        setVideosLoadingMore(false)
      })
      .catch(() => setVideosLoadingMore(false))
  }

  const tabLabel = (t: Tab) => {
    if (t === 'photos') return lang === 'he' ? 'תמונות' : lang === 'en' ? 'Photos' : 'Фото'
    return lang === 'he' ? 'סרטונים' : lang === 'en' ? 'Videos' : 'Видео'
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-gold/60 text-xs uppercase tracking-widest font-sans">
            {lang === 'he' ? 'גלריה' : lang === 'en' ? 'Gallery' : 'Галерея'}
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-cream mt-2 mb-2">
            {lang === 'he' ? 'תמונות וסרטונים' : lang === 'en' ? 'Photos & Videos' : 'Фото и видео'}
          </h1>
          <p className="text-cream/30 text-sm font-sans">
            {lang === 'he' ? 'מ-Panorama Style בחיפה' : lang === 'en' ? 'From Panorama Style Haifa' : 'Из Panorama Style, Хайфа'}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 justify-center mb-8">
          {(['photos', 'videos'] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2 text-sm font-sans transition-all ${
                tab === t
                  ? 'bg-gold text-black font-semibold'
                  : 'border border-white/20 text-white/50 hover:border-white/40 hover:text-white/80'
              }`}
            >
              {tabLabel(t)}
            </button>
          ))}
        </div>

        {/* Photos grid — masonry */}
        {tab === 'photos' && (
          <>
            {photosLoading ? (
              <div className="columns-2 sm:columns-3 md:columns-4 gap-2 space-y-2">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="break-inside-avoid aspect-square bg-white/5 animate-pulse mb-2" />
                ))}
              </div>
            ) : (
              <div className="columns-2 sm:columns-3 md:columns-4 gap-2 space-y-2">
                {photos.map(photo => (
                  <div key={photo.id} className="break-inside-avoid relative overflow-hidden group mb-2">
                    <Image
                      src={photo.src}
                      alt=""
                      width={photo.width}
                      height={photo.height}
                      className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            )}
            {photosCursor && (
              <div className="text-center mt-10">
                <button
                  onClick={loadMorePhotos}
                  disabled={photosLoadingMore}
                  className="border border-white/25 text-white/70 px-8 py-2.5 text-sm font-sans hover:border-gold/50 hover:text-gold transition-all disabled:opacity-40"
                >
                  {photosLoadingMore
                    ? (lang === 'ru' ? 'Загрузка...' : lang === 'he' ? 'טוען...' : 'Loading...')
                    : (lang === 'ru' ? 'Загрузить ещё' : lang === 'he' ? 'טען עוד' : 'Load more')}
                </button>
              </div>
            )}
          </>
        )}

        {/* Videos grid */}
        {tab === 'videos' && (
          <>
            {videosLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="aspect-video bg-white/5 animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {videos.map(video => (
                  <a
                    key={video.id}
                    href={video.fbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block overflow-hidden"
                  >
                    <div className="aspect-video relative">
                      <Image src={video.thumbnail} alt="" fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500" unoptimized />
                      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      {video.length && (
                        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 font-sans">
                          {formatDuration(video.length)}
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            )}
            {videosCursor && (
              <div className="text-center mt-10">
                <button
                  onClick={loadMoreVideos}
                  disabled={videosLoadingMore}
                  className="border border-white/25 text-white/70 px-8 py-2.5 text-sm font-sans hover:border-gold/50 hover:text-gold transition-all disabled:opacity-40"
                >
                  {videosLoadingMore
                    ? (lang === 'ru' ? 'Загрузка...' : lang === 'he' ? 'טוען...' : 'Loading...')
                    : (lang === 'ru' ? 'Загрузить ещё' : lang === 'he' ? 'טען עוד' : 'Load more')}
                </button>
              </div>
            )}
          </>
        )}

        {/* CTA */}
        <div className="mt-16 text-center bg-gold/5 border border-gold/20 rounded-sm p-8">
          <p className="text-cream/60 font-sans text-sm mb-4">
            {lang === 'he' ? 'רוצה לארח אירוע כזה? צרו קשר' : lang === 'en' ? 'Want to host an event like this? Get in touch' : 'Хотите провести такое мероприятие? Свяжитесь с нами'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${WA_PHONE_TEL}`}
              className="inline-flex flex-col items-center justify-center gap-0.5 border border-white/25 text-white/75 px-8 py-3 rounded-sm hover:border-white/50 hover:text-white transition-colors"
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                {lang === 'he' ? 'התקשר' : lang === 'en' ? 'Call' : 'Позвонить'}
              </span>
              <span className="text-[11px] font-normal opacity-60">{WA_PHONE_DISPLAY}</span>
            </a>
            <a
              href={waUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center justify-center gap-0.5 bg-gold text-black px-8 py-3 rounded-sm hover:bg-gold/90 transition-colors"
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp
              </span>
              <span className="text-[11px] font-normal opacity-70">{WA_DISPLAY}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
