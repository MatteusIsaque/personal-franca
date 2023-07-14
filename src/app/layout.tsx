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
      <head>
      <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MDSPGZ6');`,
          }}
        />
      </head>
      <body className={inter.className}>
      <Nav />
      {children}
      <Footer />
      </body>
    </html>
  )
}
