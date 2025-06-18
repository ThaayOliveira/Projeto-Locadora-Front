"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Film, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Item {
  id: number
  titulo: string
  genero: string
  precoDiario: number
  tipo: "DVD" | "BLU_RAY" | "JOGO" | "VHS"
  status: "DISPONIVEL" | "ALUGADO" | "MANUTENCAO"
  imagemUrl: string
}

interface MoviesCatalogProps {
  itens: Item[]
  onAdicionarAoCarrinho: (item: Item) => void
}

export function MoviesCatalog({ itens, onAdicionarAoCarrinho }: MoviesCatalogProps) {
  const getCorTipo = (tipo: Item["tipo"]) => {
    switch (tipo) {
      case "VHS":
        return "bg-gradient-to-r from-amber-700 to-amber-800"
      case "DVD":
        return "bg-gradient-to-r from-orange-700 to-red-700"
      case "BLU_RAY":
        return "bg-gradient-to-r from-blue-700 to-blue-800"
      case "JOGO":
        return "bg-gradient-to-r from-green-700 to-green-800"
      default:
        return "bg-gradient-to-r from-gray-700 to-gray-800"
    }
  }

  const formatarPreco = (preco: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco)
  }

  const itensDisponiveis = itens.filter((item) => item.status === "DISPONIVEL")

  return (
    <section className="py-16 bg-gradient-to-r from-orange-100 to-red-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-amber-900 mb-2">LANÇAMENTOS DA SEMANA</h2>
          </div>
          <Link href="/carrinho">
            <Button className="bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 text-white font-bold">
              VER TODOS <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {itensDisponiveis.slice(0, 10).map((item) => (
            <Card
              key={item.id}
              className="border-2 border-orange-300 bg-white shadow-lg overflow-hidden group hover:shadow-xl transition-all hover:border-orange-500"
            >
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src={item.imagemUrl || "/placeholder.svg"}
                  alt={`Movie ${item.titulo}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute top-2 right-2">
                  <Badge className={`${getCorTipo(item.tipo)} text-white font-bold text-xs`}>{item.tipo}</Badge>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-gradient-to-r from-amber-900/90 to-orange-900/90 text-white p-2 rounded text-center backdrop-blur-sm">
                    <div className="font-bold text-amber-200">{formatarPreco(item.precoDiario)}</div>
                    <div className="text-xs text-amber-300">por dia</div>
                  </div>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-amber-900 text-lg truncate" title={item.titulo}>
                  {item.titulo}
                </CardTitle>
                <CardDescription className="flex items-center justify-between text-amber-700">
                  <div className="flex items-center gap-1">
                    <Film className="w-4 h-4 text-amber-600" />
                    <span className="text-sm truncate">{item.genero}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        item.status === "DISPONIVEL"
                          ? "bg-green-500"
                          : item.status === "ALUGADO"
                            ? "bg-red-500"
                            : "bg-yellow-500"
                      }`}
                    ></div>
                    <span className="text-xs">
                      {item.status === "DISPONIVEL"
                        ? "Disponível"
                        : item.status === "ALUGADO"
                          ? "Alugado"
                          : "Manutenção"}
                    </span>
                  </div>
                </CardDescription>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold mt-2"
                  disabled={item.status !== "DISPONIVEL"}
                  onClick={() => onAdicionarAoCarrinho(item)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {item.status === "DISPONIVEL" ? "ADICIONAR" : "INDISPONÍVEL"}
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
