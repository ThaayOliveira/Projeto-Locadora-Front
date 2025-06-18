interface Carrinho {
  itens: ItemCarrinho[]
  adicionarItem: (item: Item, diasAluguel?: number) => void
  removerItem: (id: number) => void
  limparCarrinho: () => void
  calcularTotal: () => number
  calcularTotalItens: () => number
}

interface ItemCarrinho extends Item {
  diasAluguel: number
  dataRetirada: Date
  dataDevolucao: Date
}
