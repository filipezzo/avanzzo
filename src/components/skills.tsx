import { SkillsInfo } from "./inner/skills-info";
import { SkillsList } from "./inner/skills-list";

export function Skills() {
  return (
    <section id="sobre" className="pt-20">
      <div className="container">
        <SkillsInfo />
        <SkillsList />
      </div>
    </section>
  );
}
