import { Github, Instagram, Linkedin } from "lucide-react";
import { ReactNode } from "react";

export interface IMedias {
  id: number;
  icon: ReactNode;
  link: string;
  label: string;
}

export const medias: IMedias[] = [
  {
    id: 1,
    label: "github",
    icon: <Github size={16} />,
    link: "https://github.com/filipezzo",
  },
  {
    id: 2,
    label: "linkedin",
    icon: <Linkedin size={16} />,
    link: "https://www.linkedin.com/in/fiavanzzo/",
  },
  {
    id: 3,
    label: "instagram",
    icon: <Instagram size={16} />,
    link: "https://www.instagram.com/filipezzo/",
  },
];
