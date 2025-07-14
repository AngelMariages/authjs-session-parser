import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AuthJS JWE Parser - NextAuth.js Session Token Decoder',
    short_name: 'AuthJS Parser',
    description: 'Parse and decrypt NextAuth.js (AuthJS) JWE session tokens locally in your browser for easy debugging.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
    categories: ['developer', 'utilities', 'productivity'],
  }
}