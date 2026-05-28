import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans"
})

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif"
})

export const metadata: Metadata = {
  metadataBase: new URL('https://basamudera.or.id'),
  title: {
    default: 'Yayasan Basamudera Budaya Teknologi Indonesia',
    template: '%s | Basamudera',
  },
  description: 'Yayasan Basamudera Budaya Teknologi Indonesia adalah yayasan yang berkomitmen melestarikan keberlanjutan bahasa dan budaya daerah melalui pemanfaatan teknologi digital.',
  keywords: ['basamudera', 'yayasan', 'bahasa daerah', 'budaya', 'nusantara', 'teknologi', 'pelestarian bahasa', 'Indonesia'],
  authors: [{ name: 'Yayasan Basamudera Budaya Teknologi Indonesia' }],
  icons: {
    icon: '/logo/ico-logo.png',
    apple: '/logo/ico-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Basamudera',
    title: 'Yayasan Basamudera Budaya Teknologi Indonesia',
    description: 'Yayasan yang berkomitmen melestarikan bahasa daerah Nusantara melalui teknologi digital, digerakkan oleh semangat kaum muda.',
    images: [
      {
        url: '/logo/logo-basamudera.webp',
        width: 1200,
        height: 630,
        alt: 'Yayasan Basamudera Budaya Teknologi Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yayasan Basamudera Budaya Teknologi Indonesia',
    description: 'Yayasan yang berkomitmen melestarikan budaya dan bahasa daerah Nusantara melalui teknologi digital.',
    images: ['/logo/logo-basamudera.webp'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${playfairDisplay.variable} bg-background`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
