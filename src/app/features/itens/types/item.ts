interface Item {
    id: number;
    titulo: string;
    genero: string;
    precoDiario: number;
    tipo: "DVD" | "BLU_RAY" | "JOGO" | "VHS";
    status: "DISPONIVEL" | "ALUGADO" | "MANUTENCAO";
    imagemUrl: string;
}