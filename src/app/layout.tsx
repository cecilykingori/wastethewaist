import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Waste the Waist - Professional Weight Loss Center',
  description: 'Transform your life with safe, effective, and evidence-based weight loss interventions. Professional medical team specializing in gastric sleeve, gastric balloons, and pharmaceutical interventions.',
  keywords: 'weight loss, gastric sleeve, gastric balloon, bariatric surgery, weight management, nutrition counseling, Nairobi, Kenya',
  authors: [{ name: 'Waste the Waist Medical Center' }],
  openGraph: {
    title: 'Waste the Waist - Professional Weight Loss Center',
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
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
