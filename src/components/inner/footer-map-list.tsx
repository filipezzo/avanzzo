import { ISiteMap } from "../../constants/sitemap";
import { FooterListItem } from "./footer-list-item";

interface FooterMapListProps {
  list: ISiteMap[];
  variant: "site" | "social";
}

export function FooterMapList({ list, variant }: FooterMapListProps) {
  return (
    <ul className="flex flex-col gap-2 md:gap-0">
      {list.map((item) => (
        <FooterListItem variant={variant} key={item.id} item={item} />
      ))}
    </ul>
  );
}
