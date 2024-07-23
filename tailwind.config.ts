import type { Config } from 'tailwindcss';
const themes = require('./themes');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        abril: ['Abril Fatface', 'cursive'],
      },
      backgroundColor: {
        'bg-color': 'var(--bg-color)',
        'card-bg-color': 'var(--card-bg-color)',
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
      },
      textColor: {
        'text-color': 'var(--text-color)',
        'secondary-color': 'var(--secondary-color)',
      },
    },
  },
  plugins: [],
};
export default config;