import { projectsCertifications } from "../constants/projects-certifications";
import { PortfolioItem } from "./inner/portfolio-item";

export function PortfolioList() {
  return (
    <ul className="mt-8 grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-x-3 gap-y-6">
      {projectsCertifications.map((project) => (
        <PortfolioItem key={project.id} project={project} />
      ))}
    </ul>
  );
}
