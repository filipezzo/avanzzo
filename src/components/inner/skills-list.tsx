import { skills } from "../../constants/skills";
import { SkillsItem } from "./skills-item";

export function SkillsList() {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3">
      {skills.map((skill) => (
        <SkillsItem key={skill.id} skill={skill} />
      ))}
    </ul>
  );
}
