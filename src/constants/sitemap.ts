export interface ISiteMap {
  id: number;
  label: string;
  link: string;
}

export const siteMap: ISiteMap[] = [
  {
    id: 1,
    label: "Home",
    link: "#home",
  },

  {
    id: 2,
    label: "Tecnologias",
    link: "#stack",
  },

  {
    id: 3,
    label: "Projetos",
    link: "#projetos",
  },

  {
    id: 4,
    label: "Depoimentos",
    link: "#depoimentos",
  },

  {
    id: 5,
    label: "Contato",
    link: "#contato",
  },
];

export const socialMap: ISiteMap[] = [
  {
    id: 1,
    label: "Github",
    link: "https://github.com/filipezzo",
  },

  {
    id: 2,
    label: "Linkedin",
    link: "https://www.linkedin.com/in/fiavanzzo/",
  },

  {
    id: 3,
    label: "Instagram",
    link: "https://www.instagram.com/filipezzo/",
  },
];
