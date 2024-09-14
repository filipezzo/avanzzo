import { IAboutCards } from "../../constants/about-cards";
import { cn } from "../../lib/cn";

export function AboutItem({ info, icon, label, last }: IAboutCards) {
  return (
    <li
      className={cn("border-r border-r-zinc-400/50 pr-4", last && "md:hidden")}
    >
      <strong className="flex items-center gap-1 text-sm">
        {icon && icon}
        <span>{info}</span>
      </strong>
      <span className="block text-sm font-medium text-zinc-400">{label}</span>
    </li>
  );
}
