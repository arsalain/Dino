import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'side': '#2e3345',
        'form1': '#fbfbfb',
      },
      backgroundImage: {
        'gradient-side': 'linear-gradient(120deg, #000 15%, #2e3345 100%)',
      },
      fontSize: {
        'xxs': '0.8rem', // Adjust the value to your desired size
      },
    }
  },
  plugins: [],
}
export default config
