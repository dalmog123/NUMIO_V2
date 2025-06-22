import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NUMIO Solutions',
  description: 'NUMIO Solutions puts your compliance on autopilot - automating the toughest 10% of tax and accounting challenges.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
