"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

export function PricingTable() {
  return (
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
  )
}
