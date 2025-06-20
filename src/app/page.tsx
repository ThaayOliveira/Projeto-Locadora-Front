"use client"

import { useEffect, useState } from "react"
import { getItens } from "./features/itens/api/get-itens"
import { useCarrinho } from "./contexts/carrinho-context"
import { PricingTable } from "./features/itens/components/pricing-table"
import { MoviesCatalog } from "./features/itens/components/movies-catalog"
import { ServicesSection } from "./features/itens/components/services-section"
import { ContactSection } from "./features/itens/components/contact"
import { Footer } from "./features/itens/components/footer"
import { Header } from "./features/itens/components/header"
import { NavBar } from "./features/itens/components/navbar"

export default function Home() {
  const [itens, setItens] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { adicionarItem } = useCarrinho()

  useEffect(() => {
    const carregarItens = async () => {
      try {
        setLoading(true)
        setError(null)
        const dados = await getItens()
        setItens(dados)
      } catch (err) {
        setError("")
      } finally {
        setLoading(false)
      }
    }

    carregarItens()
  }, [])

  const handleAdicionarAoCarrinho = (item: Item) => {
    adicionarItem(item)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <NavBar />
      <Header />
      <PricingTable />
      <MoviesCatalog itens={itens} onAdicionarAoCarrinho={handleAdicionarAoCarrinho} />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
