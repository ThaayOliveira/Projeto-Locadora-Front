"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  ChevronRight,
  Film,
  Search,
  Clock,
  MapPin,
  Phone,
  Award,
  Zap,
  ShoppingCart,
  Calendar,
  Users,
  LogIn,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getItens } from "./features/itens/api/get-itens"
import Link from "next/link"
import { useCarrinho } from "./contexts/carrinho-context"

// obs: Página inicial

export default function Home() {
  const [itens, setItens] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { adicionarItem, calcularTotalItens } = useCarrinho()

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

  const itensDisponiveis = itens.filter((item) => item.status === "DISPONIVEL")

  const formatarPreco = (preco: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco)
  }

  const handleAdicionarAoCarrinho = (item: Item) => {
    adicionarItem(item)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <header className="bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-100/20 p-3 rounded-lg backdrop-blur-sm border border-amber-200/30">
                <Film className="w-8 h-8 text-amber-100" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-wide text-amber-100">AVISE FILMES</h1>
                <p className="text-sm text-amber-200">CINE FILMES</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
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
              <div className="flex items-center space-x-3">
                <Link href="/carrinho">
                  <Button variant="outline" className="border-amber-200 text-amber-100 bg-amber-200-80 hover:bg-amber-200/50 relative">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Carrinho
                    {calcularTotalItens() > 0 && (
                      <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 min-w-[20px] h-5 flex items-center justify-center rounded-full">
                        {calcularTotalItens()}
                      </Badge>
                    )}
                  </Button>
                </Link>
                {/* <Link href="/carrinho">
                  <Button className="bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold">
                    <LogIn className="w-4 h-4 mr-2" />
                    ENTRAR
                  </Button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-16 bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-amber-200 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-amber-200 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-amber-200 rotate-45"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-amber-200 hover:bg-amber-200 text-amber-900 text-lg px-4 py-2 font-bold border border-amber-300">
            <Zap className="w-5 h-5 mr-2" />
            DESDE 1986 - TRADIÇÃO EM FILMES
          </Badge>

          <h2 className="text-5xl md:text-7xl font-black mb-6 text-shadow-lg">
            A MAIOR LOCADORA
            <br />
            <span className="text-amber-200">DA REGIÃO!</span>
          </h2>

          <p className="text-xl md:text-2xl mb-8 max-w3xl mx-auto font-medium text-amber-100">
            Mais de 15.000 títulos em VHS e DVD • Lançamentos toda semana
            <br />
            Preços que cabem no seu bolso!
          </p>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex bg-white/20 backdrop-blur-md rounded-lg p-2 border-2 border-amber-300">
              <Input
                type="text"
                placeholder="Procurar filme, ator ou diretor..."
                className="bg-transparent border-none text-white placeholder:text-amber-100 text-lg h-12 focus-visible:ring-0"
              />
              <Button className="bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold h-12 px-6">
                <Search className="w-5 h-5 mr-2" />
                BUSCAR
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold px-8 py-4 text-lg">
              <MapPin className="w-5 h-5 mr-2" />
              NOSSA LOCALIZAÇÃO
            </Button>
            <Link href="/carrinho">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-200 text-amber-100 font-bold px-8 py-4 text-lg bg-amber-200/20 hover:bg-amber-200/30"
              >
                VER CATÁLOGO
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">TABELA DE PREÇOS</h2>
            <p className="text-xl text-amber-800">Preços justos para toda família!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-4 border-amber-600 bg-amber-50 shadow-xl transform hover:scale-105 transition-transform">
              <CardHeader className="bg-gradient-to-r from-amber-700 to-amber-800 text-white text-center">
                <CardTitle className="text-2xl font-bold">VHS</CardTitle>
                <CardDescription className="text-amber-100">Clássicos e sucessos</CardDescription>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-black text-amber-800 mb-4">R$ 3,00</div>
                <div className="space-y-2 text-amber-700">
                  <p>• 2 dias para devolver</p>
                  <p>• Multa: R$ 1,00/dia</p>
                  <p>• Reserva grátis</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-orange-600 bg-orange-50 shadow-xl transform hover:scale-105 transition-transform">
              <CardHeader className="bg-gradient-to-r from-orange-700 to-red-700 text-white text-center">
                <CardTitle className="text-2xl font-bold">DVD</CardTitle>
                <CardDescription className="text-orange-100">Qualidade superior</CardDescription>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-black text-orange-800 mb-4">R$ 5,00</div>
                <div className="space-y-2 text-orange-700">
                  <p>• 3 dias para devolver</p>
                  <p>• Multa: R$ 1,50/dia</p>
                  <p>• Extras inclusos</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-red-600 bg-red-50 shadow-xl transform hover:scale-105 transition-transform">
              <CardHeader className="bg-gradient-to-r from-red-700 to-red-800 text-white text-center">
                <CardTitle className="text-2xl font-bold">LANÇAMENTO</CardTitle>
                <CardDescription className="text-red-100">Últimas novidades</CardDescription>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-black text-red-800 mb-4">R$ 8,00</div>
                <div className="space-y-2 text-red-700">
                  <p>• 1 dia para devolver</p>
                  <p>• Multa: R$ 2,00/dia</p>
                  <p>• Reserve com antecedência</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Badge className="bg-gradient-to-r from-amber-700 to-orange-700 text-white text-lg px-6 py-2">
              <Award className="w-5 h-5 mr-2" />
              PROMOÇÃO: Alugue 3, pague 2!
            </Badge>
          </div>
        </div>
      </section>

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
                    onClick={() => handleAdicionarAoCarrinho(item)}
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

      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">NOSSOS SERVIÇOS</h2>
            <p className="text-xl text-amber-800">Mais de 35 anos cuidando do seu entretenimento</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 transition-all shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-amber-700 to-amber-800 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Film className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl text-amber-900">Catálogo Gigante</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-amber-800 text-lg">
                  Mais de 15.000 títulos em VHS e DVD. De clássicos do cinema aos últimos lançamentos de Hollywood.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition-all shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-orange-700 to-red-700 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Calendar className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl text-orange-900">Reserva Garantida</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-orange-800 text-lg">
                  Reserve por telefone ou pessoalmente. Guardamos seu filme por até 24 horas sem custo adicional.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-300 bg-gradient-to-br from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 transition-all shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-red-700 to-red-800 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl text-red-900">Atendimento Familiar</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-red-800 text-lg">
                  Equipe especializada que conhece cada filme. Receba dicas personalizadas para toda família.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-amber-100">VENHA NOS VISITAR!</h2>
              <div className="space-y-4 text-lg text-amber-200">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-amber-300" />
                  <span>Rua dos Little Monsters, 39 - Centro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-amber-300" />
                  <span>(11) 9999-8888</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-amber-300" />
                  <span>Segunda a Domingo: 9h às 22h</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/20 backdrop-blur-sm rounded-lg border-2 border-amber-300">
                <h3 className="text-2xl font-bold text-amber-200 mb-4">PROMOÇÕES ESPECIAIS</h3>
                <ul className="space-y-2 text-amber-100">
                  <li>• Terça-feira: Todos os VHS por R$ 2,00</li>
                  <li>• Quinta-feira: DVDs em dobro</li>
                  <li>• Fim de semana: Pacote família 5 filmes por R$ 20,00</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-lg border-2 border-amber-300">
                <h3 className="text-3xl font-bold text-amber-200 mb-4">CADASTRE-SE</h3>
                <p className="mb-6 text-lg text-amber-100">E ganhe seu primeiro aluguel grátis!</p>
                <div className="space-y-4">
                  <Input
                    placeholder="Seu nome completo"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                  <Input
                    placeholder="Seu telefone"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                  <Button className="w-full bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold text-lg py-3">
                    CADASTRAR GRÁTIS
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-r from-amber-900 to-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-white/20 p-2 rounded border border-amber-300/30">
                <Film className="w-6 h-6 text-amber-200" />
              </div>
              <div>
                <div className="font-bold text-lg text-amber-100">AVISE FILMES</div>
                <div className="text-amber-300 text-sm">Desde 1986 • A tradição continua</div>
              </div>
            </div>
            <div className="text-center md:text-right text-amber-200">
              <p>&copy; 2024 Avise Filmes. Todos os direitos reservados.</p>
              <p className="text-sm text-amber-300">Diversão garantida para toda família!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
