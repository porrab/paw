/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['ui-serif', 'Georgia', 'serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'],
        'asap' : ['Asap', 'sans-serif'],
        'display': ['Oswald'],
        'body': ["Inter", 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#658C4A",
          "secondary": "#E7CEC0",
          "white": "#FFFFFF",
          "black": "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "white",
    ],
  },
  plugins: [require('daisyui')],
}
