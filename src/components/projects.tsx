import { Container } from "./container";
import { Heading } from "./heading";
import { PortfolioList } from "./portfolio-list";

export function Projects() {
  return (
    <section id="projetos" className="pt-20">
      <Container>
        <Heading>Projetos Reais & Certificados</Heading>
        <PortfolioList />
      </Container>
    </section>
  );
}
