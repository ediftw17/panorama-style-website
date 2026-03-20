'use client'

import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-3.5 h-3.5 ${filled ? 'text-gold' : 'text-white/10'}`}
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
)

export default function ReviewsStrip() {
  const { lang } = useLang()
  const t = content[lang]
  const reviews = t.reviews

  return (
    <div className="relative">
      <div
        className="flex gap-4 overflow-x-auto pb-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {reviews.map((review, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-72 md:w-80 bg-white/3 border border-white/8 rounded-lg p-6 backdrop-blur-sm"
          >
            <div className="flex gap-0.5 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} filled={star <= Math.floor(review.rating)} />
              ))}
            </div>
            <p className="text-white/75 text-sm leading-relaxed mb-5 font-sans">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="flex items-center justify-between">
              <span className="text-white/40 text-xs font-sans">{review.author}</span>
              <span className="text-gold/50 text-[10px] border border-gold/15 rounded-full px-2.5 py-0.5 font-sans tracking-wide">
                {review.source}
              </span>
            </div>
          </div>
        ))}

        {/* Aggregate badge */}
        <div className="flex-shrink-0 w-56 bg-gold/8 border border-gold/25 rounded-lg p-6 flex flex-col items-center justify-center gap-2">
          <div className="font-playfair text-5xl font-bold text-gold leading-none">4.2</div>
          <div className="text-white/40 text-[10px] text-center font-sans tracking-widest uppercase">
            Restaurant Guru
          </div>
          <div className="flex gap-0.5 my-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} filled={star <= 4} />
            ))}
          </div>
          <div className="text-white/35 text-[10px] text-center font-sans">
            {t.ui.ratingBadge}
          </div>
          <div className="text-white/25 text-[10px] font-sans">{t.ui.ratingsCount}</div>
        </div>
      </div>
    </div>
  )
}
