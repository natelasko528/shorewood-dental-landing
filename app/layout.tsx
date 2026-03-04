import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shorewood Dental + RevolutionAI | Never Miss Another Patient Call',
  description: 'Dr. Wei, Shorewood Dental misses 88 calls per month — that\'s $83,600 in lost revenue annually. Aria answers every call, 24/7. See your ROI and hear Aria live.',
  keywords: 'dental AI receptionist, Shorewood Dental, Dr. Teri Wei, AI phone answering, dental practice automation, patient booking automation',
  openGraph: {
    title: 'Shorewood Dental + RevolutionAI | Never Miss Another Patient Call',
    description: 'AI-powered 24/7 receptionist that recovers $83,600 in annual revenue for Shorewood Dental.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-navy text-white">
        {children}
      </body>
    </html>
  )
}
