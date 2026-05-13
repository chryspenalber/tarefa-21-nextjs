export type Destino = {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
  destaque: string;
  melhorEpoca: string;
};

export const destinos: Destino[] = [
  {
    id: "fernando-de-noronha",
    nome: "Fernando de Noronha",
    imagem: "/images/fernando-de-noronha.svg",
    descricao:
      "Um arquipélago brasileiro famoso por águas cristalinas, trilhas ecológicas e praias preservadas ideais para mergulho.",
    destaque: "Mergulho na Baía do Sancho e observação de golfinhos.",
    melhorEpoca: "Agosto a novembro, quando o mar costuma estar mais calmo."
  },
  {
    id: "paris",
    nome: "Paris",
    imagem: "/images/paris.svg",
    descricao:
      "A capital francesa reúne arte, gastronomia, arquitetura clássica e passeios românticos às margens do Rio Sena.",
    destaque: "Visitar a Torre Eiffel, o Museu do Louvre e cafés charmosos.",
    melhorEpoca: "Abril a junho ou setembro a outubro, com clima ameno."
  },
  {
    id: "machu-picchu",
    nome: "Machu Picchu",
    imagem: "/images/machu-picchu.svg",
    descricao:
      "A cidadela inca no Peru combina história, montanhas imponentes e uma das experiências culturais mais marcantes da América do Sul.",
    destaque: "Trilhas panorâmicas e visita guiada pelas ruínas incas.",
    melhorEpoca: "Maio a setembro, durante a estação mais seca."
  },
  {
    id: "toquio",
    nome: "Tóquio",
    imagem: "/images/toquio.svg",
    descricao:
      "Uma metrópole vibrante onde templos tradicionais, tecnologia, moda urbana e culinária japonesa convivem em perfeita harmonia.",
    destaque: "Explorar Shibuya, Asakusa, mercados gastronômicos e jardins.",
    melhorEpoca: "Março a maio para as cerejeiras ou outubro a novembro no outono."
  }
];

export function buscarDestinoPorId(id: string): Destino | undefined {
  return destinos.find((destino) => destino.id === id);
}
