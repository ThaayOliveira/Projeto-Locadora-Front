"use client"

import { createContext, useContext, useState, type ReactNode } from "react"


const AlugueisContext = createContext<AlugueisContextType | undefined>(undefined)

export function AlugueisProvider({ children }: { children: ReactNode }) {
  const [alugueisAtivos, setAlugueisAtivos] = useState<AluguelAtivo[]>([])

  const calcularDataDevolucao = (tipo: Item["tipo"], diasAluguel: number) => {
    const hoje = new Date()
    const dataDevolucao = new Date(hoje)
    dataDevolucao.setDate(hoje.getDate() + diasAluguel)
    return dataDevolucao
  }

  const adicionarAluguel = (item: Item, diasAluguel: number, valorPago: number) => {
    const novoAluguel: AluguelAtivo = {
      id: `aluguel_${Date.now()}_${item.id}`,
      item,
      dataAluguel: new Date(),
      dataDevolucaoPrevista: calcularDataDevolucao(item.tipo, diasAluguel),
      valorPago,
      diasAluguel,
      devolvido: false,
    }

    setAlugueisAtivos((prev) => [...prev, novoAluguel])
  }

  const calcularMulta = (dataDevolucaoPrevista: Date) => {
    const hoje = new Date()
    const diffTime = hoje.getTime() - dataDevolucaoPrevista.getTime()
    const diasAtraso = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)))

    const multaPorDia = 2.0
    const multa = diasAtraso * multaPorDia

    return { multa, diasAtraso }
  }

  const devolverItem = (aluguelId: string) => {
    const aluguel = alugueisAtivos.find((a) => a.id === aluguelId)
    if (!aluguel) {
      return { multa: 0, diasAtraso: 0 }
    }

    const { multa, diasAtraso } = calcularMulta(aluguel.dataDevolucaoPrevista)

    setAlugueisAtivos((prev) =>
      prev.map((aluguel) => (aluguel.id === aluguelId ? { ...aluguel, devolvido: true, multa } : aluguel)),
    )

    return { multa, diasAtraso }
  }

  return (
    <AlugueisContext.Provider
      value={{
        alugueisAtivos,
        adicionarAluguel,
        devolverItem,
        calcularMulta,
      }}
    >
      {children}
    </AlugueisContext.Provider>
  )
}

export function useAlugueis() {
  const context = useContext(AlugueisContext)
  if (context === undefined) {
    throw new Error()
  }
  return context
}
