import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700" ,"800"], variable: "--font-sans" })

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
      <body className={nunito.className}>
            <main className="w-[100%] h-[30px] bg-[#8c6bfc] fixed bottom-0 flex items-center 
            justify-center z-10 opacity-90
            xl:text-[23px]
            md:text-[20px]
            sm:text-[17px]">
                <h1 className="text-white font-medium text-[17px]">© Sid Gabriel. Todos Os Direitos Reservados</h1>
            </main>

        {children}
      </body>
    </html>
  )
}
