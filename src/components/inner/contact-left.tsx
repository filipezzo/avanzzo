import { Heading } from "../heading";
import { Media } from "../media";

export function ContactInfo() {
  return (
    <div className="flex flex-col">
      <Heading>Contato para colaboração</Heading>
      <p className="mb-8 mt-3 max-w-[50ch] text-zinc-400">
        Entre em contato hoje para discutir as necessidades do seu projeto e
        começar a colaborar em algo incrível!
      </p>
      <Media />
    </div>
  );
}
