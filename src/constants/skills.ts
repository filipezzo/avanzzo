export interface ISkills {
  id: number;
  tech: string;
  function: string;
  src: string;
}

export const skills: ISkills[] = [
  {
    id: 1,
    tech: "JavaScript",
    function: "Interatividade",
    src: "assets/svgs/javascript.svg",
  },

  {
    id: 2,
    tech: "TypeScript",
    function: "Tipagem estática",
    src: "assets/svgs/ts.svg",
  },
  {
    id: 3,
    tech: "React",
    function: "Construção de UI",
    src: "assets/svgs/react.svg",
  },
  {
    id: 4,
    tech: "NextJS",
    function: "Framework React",
    src: "assets/svgs/next.svg",
  },

  {
    id: 5,
    tech: "TanStack Query",
    function: "Gerencia async state",
    src: "assets/query.png",
  },
  {
    id: 6,
    tech: "TailwindCSS",
    function: "Estilização rápida",
    src: "assets/svgs/tailwindcss.svg",
  },

  {
    id: 7,
    tech: "Git",
    function: "Controle de versões",
    src: "assets/svgs/git.svg",
  },
  {
    id: 8,
    tech: "Express",
    function: "APIs em Node.js",
    src: "assets/svgs/expressjs.svg",
  },
];
