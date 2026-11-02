export default {
  content: ['./index.html', './App.tsx', './components/**/*.{ts,tsx}', './constants.ts'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
      },
      colors: { pine: { yellow: '#FFAB00', pink: '#E91482', green: '#00B54B', dark: '#101820' } },
    },
  },
  plugins: [],
};
