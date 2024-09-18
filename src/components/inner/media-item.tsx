import { IMedias } from "../../constants/medias";

export function MediaItem({ media: { icon, link } }: { media: IMedias }) {
  return (
    <li className="size-12 rounded-lg ring-2 ring-inset ring-zinc-50/5 transition-all hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80">
      <a
        className="flex h-full w-full flex-1 items-center justify-center"
        href={link}
        target="_blank"
      >
        {icon}
      </a>
    </li>
  );
}
