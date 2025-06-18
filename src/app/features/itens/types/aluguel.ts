interface AluguelAtivo {
  id: string
  item: Item
  dataAluguel: Date
  dataDevolucaoPrevista: Date
  valorPago: number
  diasAluguel: number
  devolvido: boolean
  multa?: number
}

interface AlugueisContextType {
  alugueisAtivos: AluguelAtivo[]
  adicionarAluguel: (item: Item, diasAluguel: number, valorPago: number) => void
  devolverItem: (aluguelId: string) => { multa: number; diasAtraso: number }
  calcularMulta: (dataDevolucaoPrevista: Date) => { multa: number; diasAtraso: number }
}