import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#0f766e',
        accent: '#ea580c',
        light: '#f8fafc',
        dark: '#0f172a',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
export default config
