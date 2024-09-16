import { Container } from "./container";
import { SkillsInfo } from "./inner/skills-info";
import { SkillsList } from "./inner/skills-list";

export function Skills() {
  return (
    <section id="stack" className="pt-20">
      <Container className="container">
        <SkillsInfo />
        <SkillsList />
      </Container>
    </section>
  );
}
