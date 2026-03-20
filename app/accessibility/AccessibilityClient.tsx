'use client'

import { useLang } from '@/lib/LanguageContext'
import { WA_PHONE_DISPLAY, WA_PHONE_TEL } from '@/lib/wa'

const content = {
  ru: {
    title: 'Заявление о доступности',
    intro: 'Panorama Style стремится обеспечить доступность сайта для всех пользователей, включая людей с ограниченными возможностями, в соответствии с требованиями израильского законодательства.',
    standard: 'Стандарт соответствия',
    standardText: 'Сайт разработан в соответствии с Израильским стандартом IS 5568, основанным на WCAG 2.0 уровня AA.',
    level: 'Уровень доступности',
    levelText: 'Мы стремимся к уровню AA стандарта WCAG 2.0. Часть элементов сайта может не полностью соответствовать требованиям — мы продолжаем работу над улучшением.',
    measures: 'Меры по обеспечению доступности',
    measuresList: [
      'Все изображения содержат альтернативный текст или помечены как декоративные',
      'Навигация по сайту доступна с клавиатуры',
      'Контрастность текста соответствует требованиям WCAG AA',
      'Формы содержат подписанные поля',
      'Сайт адаптирован для чтения с экрана (screen reader)',
      'RTL-поддержка для иврита',
    ],
    contact: 'Связаться по вопросам доступности',
    contactText: 'Если вы обнаружили проблему с доступностью или вам нужна помощь, обратитесь к нам:',
    phone: 'Телефон',
    whatsapp: 'WhatsApp',
    updated: 'Дата обновления: март 2026',
  },
  he: {
    title: 'הצהרת נגישות',
    intro: 'Panorama Style פועלת להנגשת האתר לכלל המשתמשים, לרבות אנשים עם מוגבלויות, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות (1998) ותקנות הנגישות.',
    standard: 'תקן הנגישות',
    standardText: 'האתר פותח בהתאם לתקן הישראלי IS 5568, המבוסס על WCAG 2.0 ברמה AA.',
    level: 'רמת הנגישות',
    levelText: 'אנו שואפים לעמוד ברמת AA של תקן WCAG 2.0. ייתכן שחלק מרכיבי האתר טרם עומדים במלוא הדרישות — אנו פועלים לשיפור מתמיד.',
    measures: 'אמצעי נגישות באתר',
    measuresList: [
      'כל התמונות כוללות טקסט חלופי או מסומנות כדקורטיביות',
      'ניווט מקלדת מלא בכל רחבי האתר',
      'ניגודיות צבעים עומדת בדרישות WCAG AA',
      'שדות טפסים מסומנים עם תוויות מפורשות',
      'האתר מותאם לקוראי מסך',
      'תמיכה מלאה בכיווניות RTL לעברית',
    ],
    contact: 'פנייה בנושא נגישות',
    contactText: 'אם נתקלתם בבעיית נגישות או זקוקים לסיוע, ניתן לפנות אלינו:',
    phone: 'טלפון',
    whatsapp: 'WhatsApp',
    updated: 'עודכן לאחרונה: מרץ 2026',
  },
  en: {
    title: 'Accessibility Statement',
    intro: 'Panorama Style is committed to making its website accessible to all users, including people with disabilities, in compliance with Israeli accessibility law.',
    standard: 'Compliance Standard',
    standardText: 'This website was developed in accordance with Israeli Standard IS 5568, based on WCAG 2.0 Level AA.',
    level: 'Accessibility Level',
    levelText: 'We aim to meet WCAG 2.0 Level AA. Some elements may not yet fully comply — we are continuously working on improvements.',
    measures: 'Accessibility Features',
    measuresList: [
      'All images include alt text or are marked as decorative',
      'Full keyboard navigation throughout the site',
      'Text contrast meets WCAG AA requirements',
      'All form fields have explicit labels',
      'Site is compatible with screen readers',
      'Full RTL support for Hebrew',
    ],
    contact: 'Contact Us About Accessibility',
    contactText: 'If you encounter an accessibility issue or need assistance, please contact us:',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    updated: 'Last updated: March 2026',
  },
}

export default function AccessibilityClient() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        <div className="mb-10">
          <span className="text-gold/60 text-xs uppercase tracking-widest font-sans">
            {lang === 'he' ? 'נגישות' : lang === 'en' ? 'Accessibility' : 'Доступность'}
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-cream mt-2">{t.title}</h1>
        </div>

        <div className="space-y-8 text-white/65 font-sans text-sm leading-relaxed">
          <p>{t.intro}</p>

          <div>
            <h2 className="text-white/90 font-semibold text-base mb-2">{t.standard}</h2>
            <p>{t.standardText}</p>
          </div>

          <div>
            <h2 className="text-white/90 font-semibold text-base mb-2">{t.level}</h2>
            <p>{t.levelText}</p>
          </div>

          <div>
            <h2 className="text-white/90 font-semibold text-base mb-3">{t.measures}</h2>
            <ul className="space-y-2">
              {t.measuresList.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gold mt-0.5 flex-shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/[0.03] border border-gold/15 rounded-sm p-6">
            <h2 className="text-white/90 font-semibold text-base mb-2">{t.contact}</h2>
            <p className="mb-4">{t.contactText}</p>
            <div className="space-y-2">
              <div>
                <span className="text-white/40">{t.phone}: </span>
                <a href={`tel:${WA_PHONE_TEL}`} className="text-gold hover:text-gold/80 transition-colors" dir="ltr">
                  {WA_PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <span className="text-white/40">{t.whatsapp}: </span>
                <a
                  href={`https://wa.me/972506461983?text=${encodeURIComponent(
                    lang === 'he' ? 'שלום, פנייה בנושא נגישות האתר' :
                    lang === 'en' ? 'Hello, I have a website accessibility question' :
                    'Здравствуйте, вопрос о доступности сайта'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold/80 transition-colors"
                  dir="ltr"
                >
                  {WA_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          <p className="text-white/30 text-xs">{t.updated}</p>
        </div>
      </div>
    </main>
  )
}
