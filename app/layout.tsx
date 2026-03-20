import type { Metadata } from 'next'
import { Playfair_Display, Inter, Noto_Serif_Hebrew, Heebo } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollReveal from '@/components/ScrollReveal'
import StickyContactBar from '@/components/StickyContactBar'

// Display/headings — Playfair Display (Latin + Cyrillic)
const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

// Body/UI — Inter (Latin + Cyrillic, clean and neutral)
const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

// Hebrew headings
const notoSerifHebrew = Noto_Serif_Hebrew({
  subsets: ['latin', 'hebrew'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-frank-ruhl',
  display: 'swap',
})

// Hebrew body
const heebo = Heebo({
  subsets: ['latin', 'hebrew'],
  weight: ['300', '400', '500'],
  variable: '--font-heebo',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://panorama-style-hwox.vercel.app'),
  title: {
    default: 'Panorama Style — Русский ресторан и банкетный зал, Хайфа',
    template: '%s | Panorama Style',
  },
  description: 'Русский ресторан и банкетный зал в Хайфе. До 350 гостей, живая музыка, работаем в Шаббат. Рейтинг 4.5/5, #111 в Хайфе. От ₪250 с человека.',
  keywords: ['Panorama Style', 'Панорама стиль', 'русский ресторан Хайфа', 'банкетный зал Хайфа', 'ресторан Хайфа', 'аренда зала Хайфа', 'פנורמה סטייל', 'מסעדה רוסית חיפה', 'אולם אירועים חיפה'],
  openGraph: {
    type: 'website',
    locale: 'ru_IL',
    alternateLocale: ['he_IL', 'en_IL'],
    siteName: 'Panorama Style',
    title: 'Panorama Style — Русский ресторан и банкетный зал, Хайфа',
    description: 'До 350 гостей, живая музыка, работаем в Шаббат. Рейтинг 4.5/5. От ₪250 с человека.',
    url: 'https://panorama-style-hwox.vercel.app',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Panorama Style Restaurant Haifa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panorama Style — Русский ресторан и банкетный зал, Хайфа',
    description: 'До 350 гостей, живая музыка, работаем в Шаббат. Рейтинг 4.5/5. От ₪250 с человека.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://panorama-style-hwox.vercel.app',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Panorama Style',
  alternateName: ['פנורמה סטייל', 'Панорама стиль'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'חלוצי התעשייה 19',
    addressLocality: 'חיפה',
    addressCountry: 'IL',
  },
  telephone: '+972-50-800-5606',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.2',
    reviewCount: '386',
    bestRating: '5',
  },
  servesCuisine: ['Russian', 'Eastern European'],
  priceRange: '₪₪₪',
  sameAs: ['https://www.facebook.com/people/Panorama-Style/100041307526123/'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={`${playfair.variable} ${inter.variable} ${notoSerifHebrew.variable} ${heebo.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-cream font-sans antialiased">
        <LanguageProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <StickyContactBar />
          <ScrollReveal />
        </LanguageProvider>
      </body>
    </html>
  )
}
