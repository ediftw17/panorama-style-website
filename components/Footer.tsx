'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'
import { MAPS_URL } from '@/lib/wa'

export default function Footer() {
  const { lang } = useLang()
  const t = content[lang]

  const links = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.events, href: '/events' },
    { label: t.nav.gallery, href: '/gallery' },
    { label: t.nav.contact, href: '/contact' },
  ]

  return (
    <footer className="bg-black border-t border-white/6">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 pb-32 md:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Col 1: Tagline */}
          <div>
            <div className="text-white/35 text-xs font-sans mb-5 tracking-wide">{t.footer.tagline}</div>
            <div className="text-white/20 text-[11px] font-sans">
              Google: 4.2/5 · Facebook: 4.5/5
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h3 className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-sans mb-4">
              {t.ui.navLabel}
            </h3>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/45 hover:text-gold text-sm transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-sans mb-4">
              {t.ui.contactLabel}
            </h3>
            <div className="space-y-2.5 text-sm font-sans">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/45 hover:text-gold transition-colors"
              >
                <span className="text-white/25">{lang === 'he' ? 'כתובת' : lang === 'en' ? 'Address' : 'Адрес'}:</span> {t.contact.address}
              </a>
              <a
                href={`tel:${t.contact.phone.replace(/[^+\d]/g, '')}`}
                className="block text-white/45 hover:text-gold transition-colors"
              >
                <span className="text-white/25">{lang === 'he' ? 'טלפון' : lang === 'en' ? 'Phone' : 'Телефон'}:</span> <span dir="ltr">{t.contact.phone}</span>
              </a>
              <a
                href="https://wa.me/972506461983"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/45 hover:text-gold transition-colors"
              >
                <span className="text-white/25">WhatsApp:</span> <span dir="ltr">{t.contact.whatsapp}</span>
              </a>
              <a
                href="https://www.facebook.com/people/Panorama-Style/100041307526123/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/45 hover:text-gold transition-colors"
              >
                {t.contact.facebookLabel}
              </a>
              <a
                href="https://www.tiktok.com/@panorama.style.res"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/45 hover:text-gold transition-colors"
              >
                {lang === 'he' ? 'עמוד טיקטוק' : lang === 'en' ? 'TikTok Page' : 'Страница TikTok'}
              </a>
              <p className="text-white/30 text-[11px] font-sans pt-1">
                <span className="text-white/20">{lang === 'he' ? 'שעות' : lang === 'en' ? 'Hours' : 'Часы'}:</span> {t.contact.hoursNote}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-6 text-center space-y-2">
          <p className="text-white/20 text-xs font-sans">{t.footer.rights}</p>
          <p className="text-white/15 text-xs font-sans">
            Built by{' '}
            <a href="mailto:getflowmate2026@gmail.com" className="hover:text-gold/50 transition-colors">
              Getflowmate
            </a>
          </p>
          <Link
            href="/accessibility"
            className="text-white/25 hover:text-gold text-xs font-sans transition-colors"
          >
            {lang === 'he' ? 'הצהרת נגישות' : lang === 'en' ? 'Accessibility Statement' : 'Заявление о доступности'}
          </Link>
        </div>
      </div>
    </footer>
  )
}
