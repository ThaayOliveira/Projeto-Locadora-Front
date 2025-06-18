"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Zap, Search, MapPin } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
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
  )
}
