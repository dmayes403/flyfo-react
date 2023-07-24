import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins, Roboto } from 'next/font/google'
import { AuthContextProvider } from './context/AuthContext'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Flyfo',
  description: 'Photography Marketplace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
