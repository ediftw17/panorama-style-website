import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a1a1a',
        gold: '#c9a84c',
        cream: '#f5f0e8',
        darkcard: '#252525',
      },
      fontFamily: {
        // Display headings — Cormorant (Latin/Cyrillic), Frank Ruhl Libre (Hebrew)
        playfair: ['var(--font-playfair)', 'var(--font-frank-ruhl)', 'serif'],
        // Body/UI — Manrope (Latin/Cyrillic), Heebo (Hebrew)
        sans: ['var(--font-inter)', 'var(--font-heebo)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
