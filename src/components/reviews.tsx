import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { reviews } from "../constants/reviews";
import { Container } from "./container";
import { Heading } from "./heading";
import { ReviewsItem } from "./inner/reviews-item";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Reviews() {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "40% 80%",
        end: "400% 80%",
        scrub: true,
      },
      x: "-1200",
    });
  });

  return (
    <section id="depoimentos" className="overflow-hidden pt-20">
      <Container>
        <Heading>Depoimentos</Heading>
        <ul className="scrub-slide mt-8 flex w-fit items-stretch gap-3">
          {reviews.map((review) => (
            <ReviewsItem key={review.id} review={review} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
