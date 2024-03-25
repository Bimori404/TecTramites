/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.html,js}",
  ],
  theme: {
    extend: {
      colors: {
        // rojo-guinda | borgoña intenso | Boton
        primary: '#AB0033',
        // gris | gris sombra | Boton
        secondary: '#444548',
        // dorado | oro azteca | Texto
        tertiary: '#BC955C',
        // blanco | Contenedor
        quaternary: '#FFFFFF',
      }
    },
  },
  plugins: [],
}

