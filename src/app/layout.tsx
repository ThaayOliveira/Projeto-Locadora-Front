import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CarrinhoProvider } from "./contexts/carrinho-context"
import { AlugueisProvider } from "./contexts/alugueis-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Avise Filmes - Locadora",
  description: "A maior locadora da região desde 1985",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
         <AlugueisProvider>
          <CarrinhoProvider>
            {children}
          </CarrinhoProvider>
        </AlugueisProvider>
      </body>
    </html>
  )
}
