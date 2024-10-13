/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'night-sky-start': '#0f0c29',
        'night-sky-middle': '#302b63',
        'night-sky-end': '#24243e',
      },
      fontFamily: {
        'proxima-nova': ['Proxima Nova', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'white',
            a: {
              color: '#3b82f6', // Tailwind's blue-500
              '&:hover': {
                color: '#60a5fa', // Tailwind's blue-400
              },
            },
            h1: {
              color: 'white',
            },
            h2: {
              color: 'white',
            },
            h3: {
              color: 'white',
            },
            h4: {
              color: 'white',
            },
            strong: {
              color: 'white',
            },
            code: {
              color: '#e5e7eb', // Tailwind's gray-200
            },
            blockquote: {
              color: '#9ca3af', // Tailwind's gray-400
              borderLeftColor: '#4b5563', // Tailwind's gray-600
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}