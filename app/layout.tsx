import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JustWatch',
  description: 'Divirta-se com os seus filmes preferidos!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}
