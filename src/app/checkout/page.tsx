"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Calendar, DollarSign, Home, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useCarrinho } from "../contexts/carrinho-context"

export default function CheckoutPage() {
  const { itens, calcularTotal, limparCarrinho } = useCarrinho()
  const [itensAlugados, setItensAlugados] = useState<any[]>([])
  const [totalPago, setTotalPago] = useState(0)
  const [processado, setProcessado] = useState(false)

  useEffect(() => {
    if (itens.length > 0 && !processado) {
      setItensAlugados([...itens])
      setTotalPago(calcularTotal())
      setProcessado(true)

      setTimeout(() => {
        limparCarrinho()
      }, 100)
    }
  }, [])

  const formatarPreco = (preco: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco)
  }

  const formatarData = (data: Date) => {
    return new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(data)
  }

  const getCorTipo = (tipo: string) => {
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

  if (itensAlugados.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        <header className="bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-3">
              <Link href="/carrinho">
                <Button variant="ghost" className="text-amber-100 hover:bg-amber-200/20">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar ao Carrinho
                </Button>
              </Link>
              <div className="bg-amber-100/20 p-3 rounded-lg backdrop-blur-sm border border-amber-200/30">
                <CheckCircle className="w-8 h-8 text-amber-100" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-wide text-amber-100">CHECKOUT</h1>
                <p className="text-sm text-amber-200">Finalizar Aluguel</p>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="bg-amber-100 p-8 rounded-full w-32 h-32 mx-auto mb-8 flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-amber-600" />
            </div>
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Nenhum Item Selecionado</h2>
            <p className="text-amber-700 mb-8">
              Você precisa adicionar itens ao carrinho antes de finalizar o aluguel.
            </p>
            <Link href="/carrinho">
              <Button className="bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 text-white font-bold px-8 py-3">
                <ArrowLeft className="w-4 h-4 mr-2" />
                VOLTAR AO CARRINHO
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <header className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="bg-green-100/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-100" />
            </div>
            <h1 className="text-3xl font-bold tracking-wide text-green-100">ALUGUEL CONFIRMADO!</h1>
            <p className="text-lg text-green-200 mt-2">Seus itens foram alugados com sucesso</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-green-300 shadow-xl mb-8">
            <CardHeader className="bg-gradient-to-r from-green-100 to-green-200 text-center">
              <CardTitle className="text-2xl text-green-900 flex items-center justify-center">
                <DollarSign className="w-6 h-6 mr-2" />
                Resumo do Aluguel
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-800 mb-2">{formatarPreco(totalPago)}</div>
                <p className="text-green-600">Valor Total Pago</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center text-green-800">
                  <Calendar className="w-5 h-5 mr-2" />
                  <div className="text-center">
                    <p className="font-bold text-lg">Data de Devolução</p>
                    <p className="text-green-700">
                      {itensAlugados.length > 0 && formatarData(itensAlugados[0].dataDevolucao)}
                    </p>
                    <p className="text-sm text-green-600 mt-1">Devolva até às 22h para evitar multa</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lista de Filmes Alugados */}
          <Card className="border-2 border-green-300 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-green-100 to-green-200">
              <CardTitle className="text-2xl text-green-900 text-center">
                Seus Filmes Alugados ({itensAlugados.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {itensAlugados.map((item) => (
                  <Card key={item.id} className="border-2 border-red-300 bg-red-50 shadow-lg">
                    <div className="relative">
                      <div className="relative aspect-[2/3] overflow-hidden rounded-t-lg">
                        <Image
                          src={item.imagemUrl || "/placeholder.svg"}
                          alt={item.titulo}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className={`${getCorTipo(item.tipo)} text-white font-bold text-xs`}>{item.tipo}</Badge>
                        </div>
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-red-500 text-white font-bold text-xs">ALUGADO</Badge>
                        </div>
                        <div className="absolute bottom-2 left-2 right-2">
                          <div className="bg-red-600/90 text-white p-2 rounded text-center backdrop-blur-sm">
                            <div className="font-bold text-red-100">
                              {formatarPreco(item.precoDiario * item.diasAluguel)}
                            </div>
                            <div className="text-xs text-red-200">
                              {item.diasAluguel} {item.diasAluguel === 1 ? "dia" : "dias"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-green-900 text-lg truncate mb-1" title={item.titulo}>
                        {item.titulo}
                      </h3>
                      <p className="text-green-700 text-sm mb-2">{item.genero}</p>
                      <div className="space-y-1 text-xs text-green-800">
                        <div className="flex items-center justify-between">
                          <span>Preço/dia:</span>
                          <span className="font-medium">{formatarPreco(item.precoDiario)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Período:</span>
                          <span className="font-medium">{item.diasAluguel} dias</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/carrinho">
              <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold px-8 py-3 text-lg">
                <CheckCircle className="w-5 h-5 mr-2" />
                ALUGAR MAIS FILMES
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="border-2 border-green-600 text-green-700 hover:bg-green-50 font-bold px-8 py-3 text-lg"
              >
                <Home className="w-5 h-5 mr-2" />
                VOLTAR AO INÍCIO
              </Button>
            </Link>
          </div>

          <Card className="border-2 border-amber-300 bg-amber-50 shadow-lg mt-8">
            <CardContent className="p-6">
              <h3 className="font-bold text-amber-900 text-lg mb-4 text-center">📋 Informações Importantes</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-amber-800">
                <div className="space-y-2">
                  <p>
                    • <strong>Retirada:</strong> Rua dos Little Monsters, 39
                  </p>
                  <p>
                    • <strong>Horário:</strong> Segunda a Domingo, 9h às 22h
                  </p>
                  <p>
                    • <strong>Documento:</strong> Obrigatório na retirada
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    • <strong>Devolução:</strong> Até às 22h do dia previsto
                  </p>
                  <p>
                    • <strong>Multa:</strong> R$ 2,00 por dia de atraso
                  </p>
                  <p>
                    • <strong>Contato:</strong> (11) 9999-8888
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
