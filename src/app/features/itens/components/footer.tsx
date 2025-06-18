"use client"

import { Film } from "lucide-react"

export function Footer() {
  return (
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
  )
}
