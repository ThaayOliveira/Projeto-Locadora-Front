"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Film, Calendar, Users } from "lucide-react"

export function ServicesSection() {
  return (
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
  )
}
