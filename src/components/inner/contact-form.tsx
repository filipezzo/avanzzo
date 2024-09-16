import { Button } from "../button";
import { InputLabel } from "../input-label";

export function ContactForm() {
  return (
    <form
      action="https://getform.io/f/alljdvza"
      method="POST"
      className="mt-8 md:mt-0 xl:pl-10 2xl:pl-20"
    >
      <fieldset className="flex flex-col gap-3 md:flex-row md:items-center">
        <InputLabel name="nome" label="Nome" placeholder="Seu nome" />
        <InputLabel
          name="email"
          label="E-mail"
          type="email"
          placeholder="Seu email"
        />
      </fieldset>
      <fieldset className="mt-3">
        <InputLabel textarea label="Mensagem" placeholder="Sua Mensagem" />
      </fieldset>
      <Button
        type="submit"
        variant="ocean"
        className="mt-3 w-full rounded-xl text-center"
      >
        Enviar
      </Button>
    </form>
  );
}
