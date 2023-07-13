import Nav from '@/components/nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "França Personal Trainer",
  description: "França personal trainer, tenha resultados rápidos para seus treinos."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
      <Nav />
      {children}
      <Footer />
      </body>
    </html>
  )
}
