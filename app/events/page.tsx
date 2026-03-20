import type { Metadata } from 'next'
import EventsClient from './EventsClient'

export const metadata: Metadata = {
  title: 'Аренда зала для мероприятий в Хайфе',
  description: 'Банкетный зал Хайфа для свадеб, дней рождения, корпоративов. От 40 до 350 гостей. Пакеты от ₪250 до ₪400 с человека.',
}

export default function EventsPage() {
  return <EventsClient />
}
