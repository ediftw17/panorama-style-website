'use client'

import { useLang } from '@/lib/LanguageContext'

const TOUR_URL = 'https://www.zooz360.co.il//templates/zooz360/user_files/VTour/VTour1465/vtour/tour.html?id=7a5'
const VIDEOS = [
  { id: 'Le6wp0G73Q8', label: 'Panorama Style — 55 sec' },
  { id: 'IG21EmESQlM', label: 'Panorama Style — 1:23 min' },
]

export default function VirtualTour() {
  const { lang } = useLang()

  const label = lang === 'he' ? 'סיור וירטואלי' : lang === 'en' ? 'Virtual Tour' : 'Виртуальный тур'
  const title = lang === 'he' ? 'סיירו אצלנו לפני שתגיעו' : lang === 'en' ? 'See the Hall Before You Visit' : 'Посмотрите зал до визита'
  const videosLabel = lang === 'he' ? 'סרטונים' : lang === 'en' ? 'Videos' : 'Видео'

  return (
    <section className="bg-[#080808] border-t border-white/5 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="reveal mb-10">
          <p className="text-gold/60 text-[11px] tracking-[0.3em] uppercase font-sans mb-2">{label}</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">{title}</h2>
        </div>

        {/* 360 Tour */}
        <div className="reveal relative w-full overflow-hidden border border-white/8 mb-8" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={TOUR_URL}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            loading="lazy"
            title="Panorama Style 360 Virtual Tour"
          />
        </div>

        {/* YouTube Videos */}
        <div className="reveal">
          <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase font-sans mb-4">{videosLabel}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VIDEOS.map(({ id }) => (
              <div key={id} className="relative overflow-hidden border border-white/8" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="Panorama Style video"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
