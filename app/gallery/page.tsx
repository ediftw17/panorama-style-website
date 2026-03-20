import type { Metadata } from 'next'
import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
  title: 'Фотогалерея — Панорама стиль',
  description: 'Фотографии зала, мероприятий и атмосферы ресторана Panorama Style в Хайфе.',
}

export default function GalleryPage() {
  return <GalleryClient />
}
