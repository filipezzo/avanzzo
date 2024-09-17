import { ISiteMap } from "../../constants/sitemap";
interface FooterListItemProps {
  item: ISiteMap;
  variant: "site" | "social";
}

export function FooterListItem({
  item: { label, link },
  variant,
}: FooterListItemProps) {
  return (
    <li>
      <a
        className="block py-1 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
        href={link}
        target={variant === "social" ? "_blank" : "_self"}
      >
        {label}
      </a>
    </li>
  );
}
