
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Developer Portfolio',
  description: 'A developer who creates everything from nothing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a041a] text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}