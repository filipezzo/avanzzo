import { Code } from "lucide-react";
import { getYear } from "../helpers/get-year";

export function LogoFooter() {
  const year = getYear();
  return (
    <div className="col-span-2 mb-8 flex w-full items-center justify-between pt-10">
      <a
        aria-label="logo para recarregar o site"
        className="block w-full transition-colors hover:text-sky-400"
        href="/"
      >
        <Code className="size-10" />
      </a>
      <p className="text-nowrap text-sm text-zinc-300">
        &copy; {year}{" "}
        <strong className="font-medium text-zinc-200">Filipe Avanzzo</strong>
      </p>
    </div>
  );
}
