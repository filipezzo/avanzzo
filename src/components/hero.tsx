import { LeftHero } from "./inner/left-hero";
import { RightHero } from "./inner/right-hero";

export function Hero() {
  return (
    <section className="pt-20 lg:pt-12" id="home">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <LeftHero />
        <RightHero />
      </div>
    </section>
  );
}
