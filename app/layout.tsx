import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'פנורמה סטייל | Panorama Style',
  description:
    'מסעדה רוסית ואולם אירועים בחיפה | Русский ресторан и банкетный зал в Хайфе. דירוג 4.2/5 · #111 בחיפה',
  keywords: [
    'פנורמה סטייל',
    'מסעדה רוסית חיפה',
    'אולם אירועים חיפה',
    'Panorama Style',
    'русский ресторан Хайфа',
    'ресторан Хайфа',
  ],
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
    <html lang="he" dir="rtl" className={`${playfair.variable} ${inter.variable}`}>
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
        </LanguageProvider>
      </body>
    </html>
  )
}
