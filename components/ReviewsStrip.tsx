'use client'

import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-4 h-4 ${filled ? 'text-gold' : 'text-gold/20'}`}
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
  const reviews = content[lang].reviews

  return (
    <div className="relative">
      <div
        className="flex gap-4 overflow-x-auto pb-4 scroll-snap-x hide-scrollbar"
        style={{ scrollbarWidth: 'none' }}
      >
        {reviews.map((review, i) => (
          <div
            key={i}
            className="scroll-snap-start flex-shrink-0 w-72 md:w-80 bg-darkcard border border-gold/10 rounded-sm p-6"
          >
            {/* Stars */}
            <div className="flex gap-0.5 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} filled={star <= Math.floor(review.rating)} />
              ))}
            </div>
            {/* Quote */}
            <p className="text-cream/80 text-sm leading-relaxed mb-4 font-sans">
              &ldquo;{review.text}&rdquo;
            </p>
            {/* Author + source */}
            <div className="flex items-center justify-between">
              <span className="text-cream/50 text-xs font-sans">{review.author}</span>
              <span className="text-gold/60 text-xs border border-gold/20 rounded px-2 py-0.5 font-sans">
                {review.source}
              </span>
            </div>
          </div>
        ))}

        {/* Aggregate rating badge */}
        <div className="scroll-snap-start flex-shrink-0 w-64 bg-gold/10 border border-gold/30 rounded-sm p-6 flex flex-col items-center justify-center gap-2">
          <div className="font-playfair text-4xl font-bold text-gold">4.2</div>
          <div className="text-cream/60 text-xs text-center font-sans">
            Restaurant Guru
          </div>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} filled={star <= 4} />
            ))}
          </div>
          <div className="text-cream/50 text-xs text-center font-sans mt-1">
            #111 בחיפה מתוך 1,850
          </div>
          <div className="text-cream/40 text-xs font-sans">386 דירוגים</div>
        </div>
      </div>
    </div>
  )
}
