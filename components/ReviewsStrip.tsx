'use client'

import { allReviews, aggregateScores, MIN_RATING, type ReviewSource } from '@/lib/reviews-data'

const SOURCE_COLORS: Record<ReviewSource, string> = {
  google: '#4285F4',
  'restaurant-guru': '#FF6B35',
  facebook: '#1877F2',
}

const SOURCE_LABEL: Record<ReviewSource, string> = {
  google: 'Google',
  'restaurant-guru': 'Rest. Guru',
  facebook: 'Facebook',
}

const GoogleIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const FacebookIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const SourceIcon = ({ source }: { source: ReviewSource }) => {
  if (source === 'google') return <GoogleIcon />
  if (source === 'facebook') return <FacebookIcon />
  return <span className="text-[10px] font-semibold font-sans tracking-wider" style={{ color: '#FF6B35' }}>RG</span>
}

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg className={`w-3 h-3 ${filled ? 'text-gold' : 'text-white/10'}`} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
)

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => <StarIcon key={s} filled={s <= Math.round(rating)} />)}
  </div>
)

export default function ReviewsStrip() {
  const filtered = allReviews
    .filter((r) => r.rating >= MIN_RATING)
    .sort((a, b) => b.rating - a.rating)

  const looped = [...filtered, ...filtered, ...filtered]

  return (
    <div>
      {/* Aggregate badges */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {aggregateScores.map((agg) => (
          <a
            key={agg.source}
            href={agg.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/[0.03] border border-white/[0.07] rounded-xl px-5 py-4 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
          >
            <SourceIcon source={agg.source} />
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-playfair text-3xl font-light text-white leading-none tracking-tight">{agg.score}</span>
                <span className="text-white/25 text-xs font-sans">/5</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Stars rating={agg.score} />
                {agg.count && (
                  <span className="text-white/25 text-[10px] font-sans">{agg.count.toLocaleString()} reviews</span>
                )}
              </div>
              {agg.rankLabel && (
                <div className="text-white/20 text-[10px] font-sans mt-0.5 tracking-wide">{agg.rankLabel}</div>
              )}
            </div>
          </a>
        ))}
      </div>

      {/* Marquee carousel — CSS only pause, edge fade */}
      <div className="reviews-marquee-container">
        <div className="reviews-marquee-track">
          {looped.map((review, i) => (
            <div
              key={`${review.id}-${i}`}
              className="reviews-card"
            >
              <div className="flex items-center justify-between mb-4">
                <Stars rating={review.rating} />
                <span
                  className="text-[10px] font-sans tracking-wider uppercase opacity-60"
                  style={{ color: SOURCE_COLORS[review.source] }}
                >
                  {SOURCE_LABEL[review.source]}
                </span>
              </div>
              <p className="text-white/65 text-sm leading-relaxed font-sans line-clamp-3 mb-5 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <span className="text-white/30 text-xs font-sans tracking-wide">{review.author}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
