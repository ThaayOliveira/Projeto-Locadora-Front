"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Clock } from "lucide-react"

export function ContactSection() {
  return (
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
  )
}
