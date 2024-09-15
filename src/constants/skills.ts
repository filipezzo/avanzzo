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
    src: "/src/assets/svgs/javascript.svg",
  },

  {
    id: 2,
    tech: "TypeScript",
    function: "Tipagem estática",
    src: "/src/assets/svgs/typescript.svg",
  },
  {
    id: 3,
    tech: "React",
    function: "Construção de UI",
    src: "/src/assets/svgs/react.svg",
  },
  {
    id: 4,
    tech: "TailwindCSS",
    function: "Estilização rápida",
    src: "/src/assets/svgs/tailwindcss.svg",
  },

  {
    id: 5,
    tech: "Git",
    function: "Controle de versões",
    src: "/src/assets/svgs/git.svg",
  },
  {
    id: 6,
    tech: "Express",
    function: "APIs em Node.js",
    src: "/src/assets/svgs/expressjs.svg",
  },
  {
    id: 7,
    tech: "Docker",
    function: "Contêinerização",
    src: "/src/assets/svgs/docker.svg",
  },

  {
    id: 8,
    tech: "PostgreSQL",
    function: "RDBMS",
    src: "/src/assets/svgs/postgres.svg",
  },
];
