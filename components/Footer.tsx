'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'

export default function Footer() {
  const { lang } = useLang()
  const t = content[lang]

  const links = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.menu, href: '/menu' },
    { label: t.nav.events, href: '/events' },
    { label: t.nav.gallery, href: '/gallery' },
    { label: t.nav.contact, href: '/contact' },
  ]

  return (
    <footer className="bg-black border-t border-white/6">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Col 1: Logo + tagline */}
          <div>
            <div className="font-playfair text-xl font-bold text-gold mb-1 tracking-wide">
              Panorama Style
            </div>
            <div className="text-white/35 text-xs font-sans mb-5 tracking-wide">{t.footer.tagline}</div>
            <div className="text-white/20 text-[11px] font-sans">
              Restaurant Guru: 4.2/5 · {t.ui.ratingBadge}
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
              <p className="text-white/45">{t.contact.address}</p>
              <a
                href={`tel:${t.contact.phone.replace(/[^+\d]/g, '')}`}
                className="block text-white/45 hover:text-gold transition-colors"
              >
                {t.contact.phone}
              </a>
              <a
                href="https://wa.me/972506461983"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/45 hover:text-gold transition-colors"
              >
                WhatsApp: {t.contact.whatsapp}
              </a>
              <a
                href="https://www.facebook.com/people/Panorama-Style/100041307526123/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/45 hover:text-gold transition-colors"
              >
                {t.contact.facebookLabel}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-6 text-center">
          <p className="text-white/20 text-xs font-sans">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
