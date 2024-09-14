import { Webhook } from "lucide-react";
import { aboutCards } from "../constants/about-cards";
import { AboutItem } from "./inner/about-item";

export function About() {
  return (
    <section id="sobre" className="my-8 px-4">
      <div className="container mx-auto h-fit rounded-lg bg-zinc-800/60 p-6 md:h-56 xl:max-w-6xl">
        <h3 className="max-w-[80ch]">
          Bem vindo <span className="">👋</span> <br /> Meu nome é Filipe. Sou
          um Ex-atleta profissional de eSports, agora desenvolvedor Front End.
          Trago a mesma determinação e busca constante por evolução para o
          desenvolvimento, aplicando essas características em todos os projetos
          que realizo.
        </h3>
        <footer className="flex w-full flex-col md:flex-row md:items-center md:justify-between">
          <ul className="my-8 grid grid-cols-2 gap-5 md:flex md:flex-row md:items-center">
            {aboutCards.map(({ id, info, label, icon }) => (
              <AboutItem
                last={id === aboutCards.length}
                key={id}
                icon={icon}
                label={label}
                info={info}
              />
            ))}
          </ul>

          <div className="self-end md:self-auto">
            <Webhook className="text-zinc-400" />
          </div>
        </footer>
      </div>
    </section>
  );
}
