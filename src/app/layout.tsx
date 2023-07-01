import './globals.css'
import { Roboto, Nunito } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'],weight: ["300", "400", "500"], variable: "--font-alt" })
const nunito = Nunito({ subsets: ['latin'], weight: ["300", "400", "500", "600"], variable: "--font-sans" })

export const metadata = {
  title: 'fastCube website',
  description: 'um site para cube runners treinarem suas habilidades',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} ${nunito.className} font-sans`}>{children}</body>
    </html>
  )
}
