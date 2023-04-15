import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.svelte', './src/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};
