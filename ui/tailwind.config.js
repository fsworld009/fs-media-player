import withMT from '@material-tailwind/react/utils/withMT';

module.exports = withMT({
  purge: [],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: ['text-purple-500', 'text-blue-gray-500', 'text-red-500'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
});
