import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Контакты — Как нас найти',
  description: 'Адрес: Халуцей ха-Тасия 19, Хайфа. Телефон: +972-50-800-5606. WhatsApp для бронирования.',
}

export default function ContactPage() {
  return <ContactClient />
}
