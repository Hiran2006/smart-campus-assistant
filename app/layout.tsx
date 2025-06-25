import type { Metadata } from 'next'
import '@/app/global.css'

export const metadata: Metadata = {
  title: 'Smart Campus Assistant',
  description: 'Your personal assistant for campus life',
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
