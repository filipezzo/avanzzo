export interface IReview {
  id: number;
  description: string;
  person: string;
  role: string;
  picture: string;
}

export const reviews: IReview[] = [
  {
    id: 1,
    description:
      "Tenho o prazer de recomendar o Filipe Avanzzo, com quem tive a oportunidade de trabalhar de perto na FlowOn, onde fui seu líder. Filipe é um desenvolvedor front-end excepcional, cuja dedicação e habilidade técnica se destacam.",
    person: "Kleber Rhuan",
    role: "Dev Fullstack IBM",
    picture: "assets/kleber.jpg",
  },

  {
    id: 2,
    description:
      "Atuei com o Filipe no Flowon. Posso dizer que não é em todo lugar que se acha um colega de equipe tão colaborativo e com o nível de conhecimento dele. Há de se destacar seu grande conhecimento técnico em React.",
    person: "Lucas Nogueira",
    role: "Dev Backend",
    picture: "assets/lucas.jpg",
  },
  {
    id: 3,
    description:
      "Tive a oportunidade de acompanhar o desenvolvimento de projetos em que ele participou e pude perceber sua excelente habilidade para resolver problemas. Ao longo de sua jornada, ele tem se destacado pelo cuidado com os detalhes, revelando um futuro promissor na área.",
    person: "Mário Santos",
    role: "Dev Fullstack",
    picture: "assets/marin.jpg",
  },
];
