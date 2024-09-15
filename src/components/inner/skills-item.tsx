import { ISkills } from "../../constants/skills";

export function SkillsItem({
  skill: { function: func, src, tech },
}: {
  skill: ISkills;
}) {
  return (
    <li className="group rounded-2xl p-3 ring-2 ring-inset ring-zinc-50/10 transition-colors hover:bg-zinc-800">
      <figure className="flex items-center gap-3 p-2">
        <div className="grid size-12 place-items-center overflow-hidden rounded-lg bg-zinc-700 transition-colors group-hover:bg-zinc-900">
          <img
            className="size-8 object-cover"
            src={src}
            alt={`icone sobre a tecnologia ${tech} `}
          />
        </div>
        <figcaption>
          <h3 className="cursor-default font-medium">{tech}</h3>
          <p className="cursor-default text-sm text-zinc-400">{func}</p>
        </figcaption>
      </figure>
    </li>
  );
}
