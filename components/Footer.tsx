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
    <footer className="bg-[#111] border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Logo + tagline */}
          <div>
            <div className="font-playfair text-2xl font-bold text-gold mb-2">
              פנורמה סטייל
            </div>
            <div className="text-cream/40 text-sm font-sans mb-4">{t.footer.tagline}</div>
            <div className="text-cream/30 text-xs font-sans">
              Restaurant Guru: 4.2/5 · #111 בחיפה
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h3 className="text-gold/60 text-xs uppercase tracking-widest font-sans mb-4">
              {lang === 'he' ? 'ניווט מהיר' : 'Навигация'}
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/50 hover:text-gold text-sm transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-gold/60 text-xs uppercase tracking-widest font-sans mb-4">
              {lang === 'he' ? 'פרטי קשר' : 'Контакты'}
            </h3>
            <div className="space-y-2 text-sm font-sans">
              <p className="text-cream/50">{t.contact.address}</p>
              <a
                href={`tel:${t.contact.phone.replace(/[^+\d]/g, '')}`}
                className="block text-cream/50 hover:text-gold transition-colors"
              >
                {t.contact.phone}
              </a>
              <a
                href="https://wa.me/972506461983"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cream/50 hover:text-gold transition-colors"
              >
                WhatsApp: {t.contact.whatsapp}
              </a>
              <a
                href="https://www.facebook.com/people/Panorama-Style/100041307526123/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cream/50 hover:text-gold transition-colors"
              >
                {t.contact.facebookLabel}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10 mt-10 pt-6 text-center">
          <p className="text-cream/30 text-xs font-sans">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
