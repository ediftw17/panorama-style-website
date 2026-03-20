'use client'

import Link from 'next/link'
import Hero from '@/components/Hero'
import ReviewsStrip from '@/components/ReviewsStrip'
import EventsCTA from '@/components/EventsCTA'
import WhyUs from '@/components/WhyUs'
import MarqueeGallery from '@/components/MarqueeGallery'
import VirtualTour from '@/components/VirtualTour'
import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'

export default function HomePage() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <>
      <Hero />

      {/* About */}
      <section className="py-16 px-5 sm:px-8 bg-[#0a0a0a]">
        <div className="reveal max-w-7xl mx-auto">
          <span className="inline-block text-gold text-[10px] tracking-[0.35em] uppercase font-sans border border-gold/25 px-3 py-1 rounded-full mb-8">
            {t.ui.aboutLabel}
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight max-w-3xl">
            {t.about.title}
          </h2>
          <p className="text-white/50 text-base leading-relaxed font-sans max-w-2xl">{t.about.text}</p>

          <div className="flex flex-wrap items-center gap-8 mt-10 pt-10 border-t border-white/8">
            <div>
              <div className="font-playfair text-4xl font-light text-gold">{t.about.stat1Value}</div>
              <div className="text-white/35 text-xs font-sans tracking-wide mt-1">{t.about.stat1Label}</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="font-playfair text-4xl font-light text-white">{t.about.stat2Value}</div>
              <div className="text-white/35 text-xs font-sans tracking-wide mt-1">{t.about.stat2Label}</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="font-playfair text-4xl font-light text-white">{t.about.stat3Value}</div>
              <div className="text-white/35 text-xs font-sans tracking-wide mt-1">{t.about.stat3Label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery — infinite marquee */}
      <MarqueeGallery />

      {/* Virtual Tour + Videos */}
      <VirtualTour />

      {/* Reviews */}
      <section className="py-20 px-5 sm:px-8 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-10 text-center">
            <p className="text-gold/60 text-[11px] tracking-[0.3em] uppercase font-sans mb-2">
              {t.ui.reviewsLabel}
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-light text-white">
              {t.ui.reviewsTitle}
            </h2>
          </div>
          <div className="reveal reveal-delay-1"><ReviewsStrip /></div>
        </div>
      </section>

      {/* Events CTA */}
      <EventsCTA />

      {/* Why Us */}
      <WhyUs />

      {/* Contact snippet */}
      <section className="py-20 px-5 sm:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold/60 text-[11px] tracking-[0.3em] uppercase font-sans mb-4">
                {t.ui.whereWeAreLabel}
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-8">
                {t.contact.title}
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <svg className="w-4 h-4 text-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white/55 font-sans text-sm leading-relaxed">{t.contact.address}</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${t.contact.phone.replace(/[^+\d]/g, '')}`} className="text-white/55 hover:text-gold transition-colors font-sans text-sm">
                    {t.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="w-4 h-4 text-[#25D366] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <a href="https://wa.me/972506461983" target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-gold transition-colors font-sans text-sm">
                    {t.contact.whatsapp}
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block border border-white/15 text-white/60 hover:border-gold hover:text-gold text-sm px-6 py-3 transition-all tracking-widest uppercase font-sans"
                >
                  {t.ui.contactPageLink}
                </Link>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden border border-white/8" style={{ height: '360px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.2472918172625!2d35.0657001!3d32.8122121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151db15f4046c0e1%3A0xed6458322d423dae!2sPanorama%20Style!5e0!3m2!1sen!2sil!4v1773993356980!5m2!1sen!2sil"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Panorama Style location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
