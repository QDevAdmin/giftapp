import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "giftapp",
  plugins: [react()],
  server: {
    // Exposes your dev server and makes it accessible for the devices in the same network.
    host: true,
  },
})
