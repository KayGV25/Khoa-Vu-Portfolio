import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // Tailwind's Vite plugin must be registered as a Vite plugin,
    // not passed into Babel's plugin list.
    tailwindcss(),
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler'],
        ],
      },
    }),
  ],
})
