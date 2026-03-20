export type ReviewSource = 'google' | 'restaurant-guru' | 'facebook'

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
    url: 'https://maps.google.com/?q=Panorama+Style+Haifa',
  },
  {
    source: 'restaurant-guru',
    label: 'Restaurant Guru',
    score: 4.2,
    outOf: 5,
    count: 386,
    rankLabel: '#111 in Haifa',
    url: 'https://restaurantguru.com',
  },
  {
    source: 'facebook',
    label: 'Facebook',
    score: 4.5,
    outOf: 5,
    url: 'https://www.facebook.com/people/Panorama-Style/100041307526123/',
  },
]

export const allReviews: Review[] = [
  {
    id: 'rg-1',
    text: 'Everything was just perfect: food, decorations, atmosphere, dances, security',
    author: 'Happy guest',
    rating: 5,
    source: 'restaurant-guru',
    lang: 'en',
  },
  {
    id: 'rg-2',
    text: 'Russian restaurant with great food and music',
    author: 'Visitor',
    rating: 5,
    source: 'restaurant-guru',
    lang: 'en',
  },
  {
    id: 'rg-3',
    text: 'Price is especially worthwhile — includes food, beverages and entertainment. Live performers play hits from the 70s, 80s and 90s',
    author: 'Event guest',
    rating: 4.6,
    source: 'restaurant-guru',
    lang: 'en',
  },
  {
    id: 'rg-4',
    text: 'Professional service and tasty, plentiful food',
    author: 'Guest',
    rating: 5,
    source: 'restaurant-guru',
    lang: 'en',
  },
  {
    id: 'rg-he-1',
    text: 'הכל היה מושלם: אוכל, עיצוב, אווירה, ריקודים, אבטחה',
    author: 'לקוח מרוצה',
    rating: 5,
    source: 'restaurant-guru',
    lang: 'he',
  },
  {
    id: 'rg-ru-1',
    text: 'Всё было идеально: еда, декор, атмосфера, танцы, охрана',
    author: 'Довольный гость',
    rating: 5,
    source: 'restaurant-guru',
    lang: 'ru',
  },
  {
    id: 'rg-ru-2',
    text: 'Цена особенно оправдана — включает еду, напитки и развлечения. Живые артисты исполняют хиты 70-х, 80-х и 90-х',
    author: 'Гость',
    rating: 4.6,
    source: 'restaurant-guru',
    lang: 'ru',
  },
]
