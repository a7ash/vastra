import type { Metadata } from 'next'
import { Inter, Domine } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })
const domine = Domine({ 
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'VASTRA - Technical Textile Fest',
  description: 'The premier technical textile fest showcasing innovation and technology in textiles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/COOPBL.TTF"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${domine.className} font-preload`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 