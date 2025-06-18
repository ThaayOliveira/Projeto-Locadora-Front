"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Film, Clock, Phone, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useCarrinho } from "../../../contexts/carrinho-context"
export function NavBar() {
  const { calcularTotalItens } = useCarrinho()

  return (
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
                <Button
                  variant="outline"
                  className="border-amber-200 text-amber-100 bg-amber-200-80 hover:bg-amber-200/50 relative"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Carrinho
                  {calcularTotalItens() > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 min-w-[20px] h-5 flex items-center justify-center rounded-full">
                      {calcularTotalItens()}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
