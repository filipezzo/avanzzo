import { ArrowDown, BriefcaseBusiness, Download } from "lucide-react";
import { Button } from "../button";
import { Link } from "../link";

export function LeftHero() {
  return (
    <div>
      <header className="flex items-center gap-2">
        <BriefcaseBusiness className="size-5 rounded-lg text-gray-400 md:size-7" />
        <span className="relative size-2 rounded-full bg-emerald-400">
          <span className="absolute inset-0 size-2 animate-ping rounded-full bg-emerald-400" />
        </span>
        <span className="text-sm tracking-wide text-zinc-400">Disponível</span>
      </header>
      <h2 className="headline mb-8 mt-3 max-w-[15ch] sm:max-w-[20ch] lg:mb-10">
        Criando Soluções Web Modernas && Escaláveis para um Futuro Digital
      </h2>
      <div className="flex items-center gap-3">
        <Button variant="ocean">
          <a
            href="/assets/cv.pdf"
            target="_blank"
            className="flex items-center gap-3"
            download="cv.pdf"
          >
            Download CV
            <Download size={14} />
          </a>
        </Button>
        <Link href="#stack" className="gap-3" variant="brown">
          Explore
          <ArrowDown size={14} />
        </Link>
      </div>
    </div>
  );
}
