/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.module.css",
    "./template.html"
  ],
  separator: '_',
  theme: {
    extend: {
      colors: {
        primary: '#f1ece4',
        secondary: '#d8d7d4',
      },
      container: {
        center: true, // Para centrar el contenedor automáticamente
        padding: '2rem', // Agrega padding a los lados del contenedor
        screens: {
          sm: '100%', // Ancho total en pantallas pequeñas
          md: '100%', // Ancho total en pantallas medianas
          lg: '1024px', // Ancho máximo para pantallas grandes
          xl: '1280px', // Ancho máximo para pantallas extra grandes
          '2xl': '1440px', // Añade un límite máximo para pantallas muy grandes
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      const buttons = {
        '.btn-primary': {
          backgroundColor: '#000', // azul
          color: '#fff', // texto blanco
          fontWeight: '500',
          fontSize: 'large',
          padding: '0.5rem 2rem', // py-2 px-4
          borderRadius: '0.375rem', // rounded
          maxWidth: '15rem',
          textAlign: 'center',
        },
      }
      addComponents(buttons)
    },
  ],
}

