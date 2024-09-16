import { Code } from "lucide-react";
import { getYear } from "../helpers/get-year";

export function LogoFooter() {
  const year = getYear();
  return (
    <div className="col-span-2 mb-8 flex w-full items-center justify-between pt-10">
      <a className="block w-full" href="#home">
        <Code className="size-10" />
      </a>
      <p className="text-nowrap text-sm text-zinc-500">
        &copy; {year} <strong className="text-zinc-200">filipe avanzzo</strong>
      </p>
    </div>
  );
}
