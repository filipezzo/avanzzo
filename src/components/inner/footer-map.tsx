import { siteMap, socialMap } from "../../constants/sitemap";
import { FooterMapList } from "./footer-map-list";

export function FooterMap() {
  return (
    <nav className="grid grid-cols-2 gap-4 lg:pl-20">
      <div>
        <h4 className="reveal-up mb-2">Mapa do site</h4>
        <FooterMapList variant="site" list={siteMap} />
      </div>
      <div>
        <h4 className="reveal-up mb-2">Redes sociais</h4>
        <FooterMapList variant="social" list={socialMap} />
      </div>
    </nav>
  );
}
