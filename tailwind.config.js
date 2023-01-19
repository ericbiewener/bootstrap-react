module.exports = {
  variants: {
    backgroundColor: ['hover', 'active', 'even'],
    borderColor: ['hover', 'active'],
    textColor: ['hover', 'active'],
  },
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F7F7F7',
          100: '#F2F2F2',
          200: '#DFDFDF',
          300: '#CCCCCC',
          400: '#A6A6A6',
          500: '#808080',
          600: '#737373',
          700: '#4D4D4D',
          800: '#3A3A3A',
          900: '#262626',
        },
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '2880px', // 15" macbook is 2880
      // => @media (min-width: 1024px) { ... }

      xl: '2881px',
      // => @media (min-width: 1280px) { ... }
    },
  },
}
