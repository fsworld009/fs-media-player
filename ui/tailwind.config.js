import withMT from '@material-tailwind/react/utils/withMT';

module.exports = withMT({
  purge: [],
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  safelist: ['text-purple-500', 'text-blue-500', 'text-red-500', 'backdrop-blur-sm'],
  // safelist: [{ pattern: /./ }],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
});
