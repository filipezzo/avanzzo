import { IProjectCertification } from "../../constants/projects-certifications";
import { ExternalIcon } from "../external-icon";

export function PortfolioItem({
  project: { label, link, src, tags },
}: {
  project: IProjectCertification;
}) {
  return (
    <li className="reveal-up max-w-full">
      <figure className="group relative max-w-full rounded-2xl bg-zinc-800 p-4 ring-1 ring-inset ring-zinc-50/5 transition-colors hover:bg-zinc-700/50 active:bg-zinc-700/60">
        <img
          className="figure-img mb-4 max-w-full rounded-lg object-cover brightness-75 transition-all group-hover:brightness-100 sm:h-[228px] sm:max-h-full sm:w-full md:aspect-square"
          src={src}
          alt={`imagem sobre ${label}`}
        />
        <figcaption className="md:items-initial flex flex-col gap-4 md:flex-row md:justify-between">
          <div>
            <h3 className="mb-3 group-hover:text-sky-400">{label}</h3>
            <ul className="flex flex-col flex-wrap gap-3 md:flex-row">
              {tags.map((tag, index) => (
                <li
                  className="grid max-w-full cursor-default place-items-center rounded-lg bg-zinc-700 p-2 text-sm text-zinc-400 transition-all hover:scale-95"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <ExternalIcon link={link} />
        </figcaption>
      </figure>
    </li>
  );
}
