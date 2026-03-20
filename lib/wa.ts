export const WA_NUMBER = '972506461983'
export const WA_DISPLAY = '+972-50-646-1983'   // WhatsApp number (displayed)
export const WA_PHONE_DISPLAY = '+972-50-646-1983'  // Phone number (displayed)
export const WA_PHONE_TEL = '+972506461983'          // Phone number (tel: link)

export const MAPS_URL = 'https://www.google.com/maps/place/Panorama+Style/@32.8122121,35.0657001,17z/data=!4m6!3m5!1s0x151db15f4046c0e1:0xed6458322d423dae!8m2!3d32.8122121!4d35.0657001'
export const WAZE_URL = 'waze://?q=Panorama+Style+Haifa&navigate=yes'

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
