module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'blue':'#1da1f2',
        'darkblue':'#2795d5',
        'lightblue':'#eff9ff',
        'dark':'#657786',
        'light':'#aabbc2',
        'lighter':'#e1e8ed',
        'lightest':'#f5f8fa',
      }
    },
  },
  variants: {
    extend: {
      borderStyle: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],
    },

  },
  plugins: [],
}
