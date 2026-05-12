import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { InteractiveBackground } from '@/components/interactive-background'
import { MouseSpotlight } from '@/components/mouse-spotlight'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Mohamed Aziz Aguir - DevSecOps Intern at DOT IT Sousse',
  description: 'Portfolio of Mohamed Aziz Aguir, a DevSecOps engineering student working in Sousse. Specializing in secure CI/CD, SOC operations, Cyber Threat Intelligence, and automation.',
  generator: 'v0.app',
  keywords: ['cybersecurity', 'SOC', 'CTI', 'DevSecOps', 'threat intelligence', 'security engineering', 'Tunisia'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased text-slate-100 overflow-x-hidden">
        <InteractiveBackground />
        <MouseSpotlight />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
