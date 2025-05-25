import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Aditya's Portfolio",
  description: 'Software Engineer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans:wght@400;500;700;900&family=Space+Grotesk:wght@400;500;700"
        />
      </head>
      <body className="font-grotesk bg-dark-bg text-primary-text">{children}</body>
    </html>
  )
}