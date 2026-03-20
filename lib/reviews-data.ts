export type ReviewSource = 'google' | 'facebook'

export type ReviewLang = 'en' | 'ru' | 'he'

export interface Review {
  id: string
  text: string
  author: string
  rating: number // always 0–5 scale
  source: ReviewSource
  lang: ReviewLang
  date?: string
}

export interface AggregateScore {
  source: ReviewSource
  label: string
  score: number
  outOf: 5
  count?: number
  rankLabel?: string
  url?: string
}

export const MIN_RATING = 3.5

export const aggregateScores: AggregateScore[] = [
  {
    source: 'google',
    label: 'Google',
    score: 4.2,
    outOf: 5,
    count: 386,
    rankLabel: '#111 in Haifa',
    url: 'https://maps.google.com/?q=Panorama+Style+Haifa',
  },
  {
    source: 'facebook',
    label: 'Facebook',
    score: 4.5,
    outOf: 5,
    url: 'https://www.facebook.com/people/Panorama-Style/100041307526123/',
  },
]

export const allReviews: Review[] = []
