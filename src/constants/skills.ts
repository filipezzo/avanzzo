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
    src: "/src/assets/javascript.svg",
  },

  {
    id: 2,
    tech: "TypeScript",
    function: "Tipagem estática",
    src: "/src/assets/typescript.svg",
  },
  {
    id: 3,
    tech: "React",
    function: "Construção de UI",
    src: "/src/assets/react.svg",
  },
  {
    id: 4,
    tech: "TailwindCSS",
    function: "Estilização rápida",
    src: "/src/assets/tailwindcss.svg",
  },

  {
    id: 5,
    tech: "Git",
    function: "Controle de versões",
    src: "/src/assets/git.svg",
  },
  {
    id: 6,
    tech: "Express",
    function: "APIs em Node.js",
    src: "/src/assets/expressjs.svg",
  },
  {
    id: 7,
    tech: "Docker",
    function: "Contêinerização",
    src: "/src/assets/docker.svg",
  },

  {
    id: 8,
    tech: "PostgreSQL",
    function: "DB relacional",
    src: "/src/assets/postgres.svg",
  },
];
