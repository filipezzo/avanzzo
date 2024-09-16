import { ArrowRight } from "lucide-react";
import { Container } from "./container";
import { FooterMap } from "./inner/footer-map";
import { Link } from "./link";
import { LogoFooter } from "./logo-footer";

export function Footer() {
  return (
    <footer className="pt-20">
      <Container>
        <div className="flex w-full flex-col lg:grid lg:grid-cols-2 lg:items-baseline">
          <div className="mb-10">
            <h2 className="headline mb-8 max-w-[12ch] sm:max-w-[20ch] lg:mb-10 lg:text-[48px]">
              Pronto para transformar suas ideias em realidade digital?
            </h2>
            <Link
              className="w-full lg:max-w-fit"
              href="mailto:filipetsx@gmail.com"
              variant="ocean"
            >
              Começar Projeto
              <ArrowRight size={16} />
            </Link>
          </div>

          <FooterMap />
          <LogoFooter />
        </div>
      </Container>
    </footer>
  );
}
