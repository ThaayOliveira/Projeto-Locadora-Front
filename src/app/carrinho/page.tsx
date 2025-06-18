"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Film, ShoppingCart, Trash2, Calendar, Clock, ArrowLeft, Plus, CreditCard, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getItens } from "../features/itens/api/get-itens"
import { useCarrinho } from "../contexts/carrinho-context"
import { Footer } from "../features/itens/components/footer"


export default function CarrinhoPage() {
  const { itens, removerItem, limparCarrinho, calcularTotal, adicionarItem } = useCarrinho()
  const [todosItens, setTodosItens] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const carregarItens = async () => {
      try {
        setLoading(true)
        const dados = await getItens()
        setTodosItens(dados)
      } finally {
        setLoading(false)
      }
    }

    carregarItens()
  }, [])

  const formatarPreco = (preco: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco)
  }

  const formatarData = (data: Date) => {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(data)
  }

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

  const itensDisponiveis = todosItens.filter((item) => item.status === "DISPONIVEL")

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <header className="bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <Button variant="ghost" className="text-amber-100 hover:bg-amber-200/20">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div className="bg-amber-100/20 p-3 rounded-lg backdrop-blur-sm border border-amber-200/30">
                <ShoppingCart className="w-8 h-8 text-amber-100" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-wide text-amber-100">CARRINHO DE COMPRAS</h1>
                <p className="text-sm text-amber-200">Selecione seus filmes favoritos</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-amber-200">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(11) 9999-8888</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Seg-Dom: 9h às 22h</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-2 border-amber-300 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
                <CardTitle className="text-2xl text-amber-900 flex items-center">
                  <Film className="w-6 h-6 mr-2" />
                  Catálogo Disponível
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {loading ? (
                  <div className="text-center py-8">
                    <div className="text-amber-800">Carregando filmes...</div>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {itensDisponiveis.map((item) => (
                      <Card
                        key={item.id}
                        className="border border-orange-200 bg-white shadow-md overflow-hidden group hover:shadow-lg transition-all"
                      >
                        <div className="relative aspect-[2/3] overflow-hidden">
                          <Image
                            src={item.imagemUrl || "/placeholder.svg"}
                            alt={item.titulo}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge className={`${getCorTipo(item.tipo)} text-white font-bold text-xs`}>
                              {item.tipo}
                            </Badge>
                          </div>
                          <div className="absolute bottom-2 left-2 right-2">
                            <div className="bg-gradient-to-r from-amber-900/90 to-orange-900/90 text-white p-2 rounded text-center backdrop-blur-sm">
                              <div className="font-bold text-amber-200">{formatarPreco(item.precoDiario)}</div>
                              <div className="text-xs text-amber-300">por dia</div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3">
                          <h3 className="font-bold text-amber-900 text-sm truncate mb-1" title={item.titulo}>
                            {item.titulo}
                          </h3>
                          <p className="text-xs text-amber-700 mb-2">{item.genero}</p>
                          <Button
                            size="sm"
                            className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold text-xs"
                            onClick={() => adicionarItem(item)}
                            disabled={itens.some((i) => i.id === item.id)}
                          >
                            <Plus className="w-3 h-3 mr-1" />
                            {itens.some((i) => i.id === item.id) ? "JÁ ADICIONADO" : "ADICIONAR"}
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Carrinho */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-orange-300 shadow-lg sticky top-4">
              <CardHeader className="bg-gradient-to-r from-orange-100 to-red-100">
                <CardTitle className="text-2xl text-orange-900 flex items-center justify-between">
                  <div className="flex items-center">
                    <ShoppingCart className="w-6 h-6 mr-2" />
                    Seu Carrinho
                  </div>
                  <Badge className="bg-orange-600 text-white">
                    {itens.length} {itens.length === 1 ? "item" : "itens"}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {itens.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart className="w-16 h-16 mx-auto text-amber-300 mb-4" />
                    <p className="text-amber-800 mb-4">Seu carrinho está vazio</p>
                    <p className="text-sm text-amber-600">Adicione filmes do catálogo ao lado</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {itens.map((item) => (
                      <div key={item.id} className="border border-amber-200 rounded-lg p-3 bg-amber-50">
                        <div className="flex items-start space-x-3">
                          <div className="relative w-16 h-20 flex-shrink-0">
                            <Image
                              src={item.imagemUrl || "/placeholder.svg"}
                              alt={item.titulo}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-amber-900 text-sm truncate" title={item.titulo}>
                              {item.titulo}
                            </h4>
                            <p className="text-xs text-amber-700 mb-1">{item.genero}</p>
                            <Badge className={`${getCorTipo(item.tipo)} text-white text-xs mb-2`}>{item.tipo}</Badge>
                            <div className="space-y-1 text-xs text-amber-800">
                              <div className="flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                <span>Retirada: {formatarData(item.dataRetirada)}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                <span>Devolução: {formatarData(item.dataDevolucao)}</span>
                              </div>
                              <div className="flex items-center justify-between mt-2">
                                <span className="font-bold text-orange-800">
                                  {formatarPreco(item.precoDiario * item.diasAluguel)}
                                </span>
                                <span className="text-xs">({item.diasAluguel} dias)</span>
                              </div>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 border-red-300 hover:bg-red-50"
                            onClick={() => removerItem(item.id)}
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}

                    <Separator />

                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-lg font-bold text-amber-900">
                        <span>Total:</span>
                        <span className="text-2xl text-orange-800">{formatarPreco(calcularTotal())}</span>
                      </div>

                      <div className="space-y-2">
                        <Link href="/checkout">
                          <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 text-lg">
                            <CreditCard className="w-4 h-4 mr-2" />
                            FINALIZAR ALUGUEL
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          className="w-full border-red-300 text-red-600 hover:bg-red-50"
                          onClick={limparCarrinho}
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          LIMPAR CARRINHO
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* <Card className="border-2 border-amber-300 shadow-lg mt-6">
              <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
                <CardTitle className="text-lg text-amber-900 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Informações da Loja
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-2 text-sm text-amber-800">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-amber-600" />
                    <span>Rua dos Little Monsters, 39</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-amber-600" />
                    <span>(11) 9999-8888</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-amber-600" />
                    <span>Seg-Dom: 9h às 22h</span>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>

      </div>

      <Footer/>
    </div>
  )
}
