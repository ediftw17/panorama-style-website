import type { Metadata } from 'next'
import MenuClient from './MenuClient'

export const metadata: Metadata = {
  title: 'Меню — Русская кухня',
  description: 'Меню ресторана Panorama Style: закуски, горячее, морепродукты, супы, напитки. Хайфа.',
}

export default function MenuPage() {
  return <MenuClient />
}
