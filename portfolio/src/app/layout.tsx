import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aditya Venkatesh Marada - Portfolio',
  description: 'Senior Software Engineer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}