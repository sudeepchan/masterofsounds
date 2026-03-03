import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata: Metadata = {
  title: 'Master of Sounds | Where Every Voice Finds Its Perfect Sound',
  description: 'Learn music through songs. Professional karaoke education with custom backing track recreations. 17+ years of expertise in vocal production and performance coaching.',
  keywords: ['karaoke', 'backing tracks', 'vocal coaching', 'music education', 'bollywood karaoke', 'singing lessons'],
  authors: [{ name: 'Master of Sounds' }],
  openGraph: {
    title: 'Master of Sounds | Where Every Voice Finds Its Perfect Sound',
    description: 'Learn music through songs. Professional karaoke education with custom backing track recreations.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}