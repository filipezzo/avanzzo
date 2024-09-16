import { Container } from "./container";
import { ContactForm } from "./inner/contact-form";
import { ContactInfo } from "./inner/contact-left";

export function Contact() {
  return (
    <section id="contato" className="pt-20">
      <Container className="lg:grid lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </Container>
    </section>
  );
}
