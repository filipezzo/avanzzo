import { Brain, Clock, Globe, University } from "lucide-react";
import { ReactNode } from "react";

export interface IAboutCards {
  id?: number;
  label: string;
  info: string;
  icon?: ReactNode;
  last?: boolean;
}

export const aboutCards: IAboutCards[] = [
  {
    id: 1,
    info: "2+",
    label: "Anos de experiência",
    icon: <Clock className="order-2 size-4 text-sky-400" />,
  },

  {
    id: 2,
    info: "Infnet",
    label: "Cursando ADS",
    icon: <University className="size-5 text-sky-400" />,
  },

  {
    id: 3,
    info: "10+",
    label: "Certificados",
    icon: <Brain className="size-4 text-sky-400 md:order-2" />,
  },

  {
    id: 4,
    info: "3",
    label: "Idiomas",
    icon: <Globe className="order-2 size-4 text-sky-400" />,
  },
];
