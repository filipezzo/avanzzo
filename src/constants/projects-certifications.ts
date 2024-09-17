export interface IProjectCertification {
  id: number;
  src: string;
  label: string;
  tags: string[];
  link: string;
}

export const projectsCertifications: IProjectCertification[] = [
  {
    id: 1,
    src: "./src/assets/circular.png",
    label: "Estação Circular",
    tags: [" responsável front-end", "projeto real"],
    link: "https://www.estacaocircular.app.br/login",
  },

  {
    id: 2,
    src: "./src/assets/react-gg.png",
    label: "React.gg",
    tags: ["front-end", "react", "curso"],
    link: "https://react.gg/",
  },

  {
    id: 3,
    src: "/src/assets/justjs.png",
    label: "Just JS",
    tags: ["front-end", "Javascript", "curso"],
    link: "https://justjavascript.com/",
  },

  {
    id: 4,
    src: "./src/assets/joy-of-react.jpg",
    label: "Joy of React",
    tags: ["front-end", "react", "curso"],
    link: "https://www.joyofreact.com/",
  },

  {
    id: 5,
    src: "./src/assets/coderhouse.png",
    label: "Coderhouse",
    tags: ["front-end", "react", "curso"],
    link: "https://www.coderhouse.com",
  },

  {
    id: 6,
    src: "./src/assets/coming.png",
    label: "Em breve...",
    tags: ["react"],
    link: "",
  },
];
