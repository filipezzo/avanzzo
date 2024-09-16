interface INav {
  id: number;
  label: string;
  link: string;
  className: string;
}

export const navOptions: INav[] = [
  {
    id: 1,
    label: "Home",
    link: "#home",
    className: "nav-link",
  },
  {
    id: 2,
    label: "Sobre",
    link: "#sobre",
    className: "nav-link",
  },
  {
    id: 3,
    label: "Projetos",
    link: "#projetos",
    className: "nav-link",
  },
  {
    id: 4,
    label: "Depoimentos",
    link: "#depoimentos",
    className: "nav-link",
  },
  {
    id: 5,
    label: "Contato",
    link: "#contato",
    className: "nav-link md:hidden",
  },
];

export const initialPositionState = {
  top: 0,
  left: 0,
  height: 0,
  width: 0,
};
