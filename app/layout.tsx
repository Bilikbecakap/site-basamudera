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
  title: 'Yayasan Basamudera Budaya Teknologi Indonesia',
  description: 'Melestarikan warisan budaya Indonesia melalui teknologi - Preserving Indonesian cultural heritage through technology',
  generator: 'v0.app',
  icons: {
    icon: '/logo/ico-logo.png',
    apple: '/logo/ico-logo.png',
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
