import { BadgeCheck } from "lucide-react";
import { IReview } from "../../constants/reviews";
import { Stars } from "../stars";

export function ReviewsItem({
  review: { description, person, picture, role },
}: {
  review: IReview;
}) {
  return (
    <li className="flex min-w-[300px] max-w-md flex-col rounded-xl bg-zinc-800 p-5 lg:min-w-[420px]">
      <header className="flex items-center gap-1">
        <Stars />
      </header>
      <p className="mb-8 mt-3 text-sm text-zinc-400">{description}</p>
      <footer className="flex h-full flex-col">
        <figure className="mt-auto flex items-center gap-2">
          <img
            loading="lazy"
            src={picture}
            className="size-11 rounded-lg object-contain"
          />
          <figcaption className="">
            <div className="flex items-center gap-1">
              <strong>{person}</strong>
              <BadgeCheck size={16} className="text-sky-500" />
            </div>

            <span className="block text-xs tracking-wider text-zinc-400">
              {role}
            </span>
          </figcaption>
        </figure>
      </footer>
    </li>
  );
}
