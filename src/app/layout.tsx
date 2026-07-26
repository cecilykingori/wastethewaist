import './globals.css'
import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'The Weight Is Over',
  description: 'Transform your life with safe, effective, and evidence-based weight loss interventions. Professional medical team specializing in gastric sleeve, gastric balloons, and pharmaceutical interventions.',
  keywords: 'weight loss, gastric sleeve, gastric balloon, bariatric surgery, weight management, nutrition counseling, Nairobi, Kenya',
  authors: [{ name: 'The Weight Is Over' }],
  openGraph: {
    title: 'The Weight Is Over',
    description: 'Transform your life with safe, effective, and evidence-based weight loss interventions.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
