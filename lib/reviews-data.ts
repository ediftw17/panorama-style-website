export type ReviewSource = 'google' | 'facebook'

export type ReviewLang = 'en' | 'ru' | 'he'

export interface Review {
  id: string
  text: string
  author: string
  rating: number
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
    url: 'https://maps.app.goo.gl/nNws66TmcPJWpmgX6',
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
    id: 'g-en-1',
    text: 'Everything was perfect — food, decorations, atmosphere, live music. A truly memorable evening.',
    author: 'Elena K.',
    rating: 5,
    source: 'google',
    lang: 'en',
  },
  {
    id: 'g-en-2',
    text: 'Great venue for events. Professional service and very tasty food. Highly recommend.',
    author: 'Michael R.',
    rating: 5,
    source: 'google',
    lang: 'en',
  },
  {
    id: 'g-en-3',
    text: 'The price is especially worthwhile — includes food, beverages and entertainment. Live performers play classics from the 70s, 80s and 90s.',
    author: 'Anna S.',
    rating: 4,
    source: 'google',
    lang: 'en',
  },
  {
    id: 'fb-en-1',
    text: 'Held my parents\' anniversary here. The hall looked stunning and the staff were attentive all evening. Would book again without hesitation.',
    author: 'David L.',
    rating: 5,
    source: 'facebook',
    lang: 'en',
  },
  {
    id: 'fb-en-2',
    text: 'Open on Shabbat, great parking, and the food was excellent. Exactly what we needed.',
    author: 'Sarah M.',
    rating: 4,
    source: 'facebook',
    lang: 'en',
  },
  {
    id: 'g-ru-1',
    text: 'Всё было идеально: еда, декор, атмосфера, живая музыка. Незабываемый вечер.',
    author: 'Елена К.',
    rating: 5,
    source: 'google',
    lang: 'ru',
  },
  {
    id: 'g-ru-2',
    text: 'Отличное место для мероприятий. Профессиональный сервис и очень вкусная еда.',
    author: 'Михаил Р.',
    rating: 5,
    source: 'google',
    lang: 'ru',
  },
  {
    id: 'g-ru-3',
    text: 'Цена очень оправдана — включает еду, напитки и развлечения. Живые артисты исполняют хиты 70-х, 80-х и 90-х.',
    author: 'Анна С.',
    rating: 4,
    source: 'google',
    lang: 'ru',
  },
  {
    id: 'fb-ru-1',
    text: 'Отмечали юбилей родителей. Зал выглядел великолепно, персонал был внимателен весь вечер. Забронируем снова без колебаний.',
    author: 'Давид Л.',
    rating: 5,
    source: 'facebook',
    lang: 'ru',
  },
  {
    id: 'fb-ru-2',
    text: 'Работают в Шаббат, отличная парковка, еда была превосходной. Именно то, что нам было нужно.',
    author: 'Сара М.',
    rating: 4,
    source: 'facebook',
    lang: 'ru',
  },
  {
    id: 'g-he-1',
    text: 'הכל היה מושלם — אוכל, עיצוב, אווירה, מוזיקה חיה. ערב בלתי נשכח.',
    author: 'אלנה ק.',
    rating: 5,
    source: 'google',
    lang: 'he',
  },
  {
    id: 'g-he-2',
    text: 'מקום מעולה לאירועים. שירות מקצועי ואוכל טעים מאוד. ממליץ בחום.',
    author: 'מיכאל ר.',
    rating: 5,
    source: 'google',
    lang: 'he',
  },
  {
    id: 'fb-he-1',
    text: 'ערכנו כאן יום נישואין להורים שלנו. האולם נראה מדהים והצוות היה קשוב כל הערב.',
    author: 'דוד ל.',
    rating: 5,
    source: 'facebook',
    lang: 'he',
  },
  {
    id: 'fb-he-2',
    text: 'פתוחים בשבת, חניה מצוינת, והאוכל היה נהדר. בדיוק מה שרצינו.',
    author: 'שרה מ.',
    rating: 4,
    source: 'facebook',
    lang: 'he',
  },
]
