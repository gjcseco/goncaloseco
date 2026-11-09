import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gonçalo Seco - Full-Stack Developer',
    short_name: 'GS Portfolio',
    description: 'Portfólio de Gonçalo Seco',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#22d3ee',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  }
}
