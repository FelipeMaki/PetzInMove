export interface ServicoFixo {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
}

export const SERVICOS_FIXOS: ServicoFixo[] = [
  {
    id: 1,
    nome: "Banho e Tosa",
    descricao: "Banho completo, tosa higienica ou estetica",
    preco: 80,
  },
  {
    id: 2,
    nome: "Consulta Veterinaria",
    descricao: "Check-up completo, vacinacao e orientacoes de saude",
    preco: 150,
  },
  {
    id: 3,
    nome: "Cortar Unha",
    descricao: "Apenas em animais docois",
    preco: 80.55,
  },
  {
    id: 4,
    nome: "Day Spa Pet",
    descricao: "Tratamento premium com massagem, hidratacao e muito mais",
    preco: 200,
  },
];

