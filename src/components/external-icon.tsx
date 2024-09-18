import { ExternalLink } from "lucide-react";

export function ExternalIcon({ link }: { link: string }) {
  return (
    <a
      target="_blank"
      href={link}
      className="grid h-10 min-h-10 w-10 min-w-10 cursor-pointer place-items-center rounded-lg bg-sky-400 font-medium text-black transition-colors hover:bg-sky-500"
    >
      <ExternalLink className="size-4" />
    </a>
  );
}
