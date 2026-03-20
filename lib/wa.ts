export const WA_NUMBER = '972506461983'
export const WA_PHONE_DISPLAY = '+972-50-800-5606'
export const WA_PHONE_TEL = '+972508005606'

export const MAPS_URL = 'https://www.google.com/maps/dir/?api=1&destination=32.8122121,35.0657001'
export const WAZE_URL = 'https://waze.com/ul?ll=32.8122121,35.0657001&navigate=yes'

export function waUrl(lang: 'ru' | 'he' | 'en', customMsg?: string): string {
  const msg = customMsg ?? (
    lang === 'he'
      ? 'שלום, אני מעוניין/ת לברר פרטים על אירוע ב-Panorama Style'
      : lang === 'en'
      ? "Hello, I'd like to inquire about hosting an event at Panorama Style"
      : 'Здравствуйте, хочу узнать о проведении мероприятия в Panorama Style'
  )
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}
