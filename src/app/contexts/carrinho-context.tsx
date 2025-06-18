"use client"

import { createContext, useContext, useState, type ReactNode } from "react"


const CarrinhoContext = createContext<Carrinho | undefined>(undefined)

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<ItemCarrinho[]>([])

  const calcularDataDevolucao = (tipo: Item["tipo"], diasAluguel = 0) => {
    const hoje = new Date()
    let diasPadrao = diasAluguel

    if (diasAluguel === 0) {
      switch (tipo) {
        case "VHS":
          diasPadrao = 2
          break
        case "DVD":
          diasPadrao = 3
          break
        case "BLU_RAY":
          diasPadrao = 3
          break
        case "JOGO":
          diasPadrao = 5
          break
        default:
          diasPadrao = 2
      }
    }

    const dataDevolucao = new Date(hoje)
    dataDevolucao.setDate(hoje.getDate() + diasPadrao)

    return { dataRetirada: hoje, dataDevolucao, diasAluguel: diasPadrao }
  }

  const adicionarItem = (item: Item, diasAluguel = 0) => {
    const itemExistente = itens.find((i) => i.id === item.id)

    if (itemExistente) {
      return
    }

    const { dataRetirada, dataDevolucao, diasAluguel: dias } = calcularDataDevolucao(item.tipo, diasAluguel)

    const novoItem: ItemCarrinho = {
      ...item,
      diasAluguel: dias,
      dataRetirada,
      dataDevolucao,
    }

    setItens((prev) => [...prev, novoItem])
  }

  const removerItem = (id: number) => {
    setItens((prev) => prev.filter((item) => item.id !== id))
  }

  const limparCarrinho = () => {
    setItens([])
  }

  const calcularTotal = () => {
    return itens.reduce((total, item) => total + item.precoDiario * item.diasAluguel, 0)
  }

  const calcularTotalItens = () => {
    return itens.length
  }

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarItem,
        removerItem,
        limparCarrinho,
        calcularTotal,
        calcularTotalItens,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  )
}

export function useCarrinho() {
  const context = useContext(CarrinhoContext)
  if (context === undefined) {
    throw new Error()
  }
  return context
}
