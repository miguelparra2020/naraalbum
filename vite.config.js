import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Nara Páez Aguirre Albúm',
        short_name: 'Nara Páez Aguirre',
        description: 'Nara Páez Aguirre Albúm Fotográfico',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons/icon-192x192-2.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/icon-512x512-2.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
