import { LeftHero } from "./inner/left-hero";
import { RightHero } from "./inner/right-hero";

export function Hero() {
  return (
    <section className="pt-20 lg:pt-12" id="home">
      <div className="container mx-auto items-center px-4 lg:grid lg:grid-cols-2 lg:gap-10 lg:px-8 xl:max-w-6xl">
        <LeftHero />
        <RightHero />
      </div>
    </section>
  );
}
