import type { Metadata } from 'next'
import AccessibilityClient from './AccessibilityClient'

export const metadata: Metadata = {
  title: 'הצהרת נגישות | Panorama Style',
  description: 'הצהרת נגישות לאתר Panorama Style בהתאם לתקן ישראלי 5568',
}

export default function AccessibilityPage() {
  return <AccessibilityClient />
}
