import { reviews } from "../constants/reviews";
import { Container } from "./container";
import { Heading } from "./heading";
import { ReviewsItem } from "./inner/reviews-item";

export function Reviews() {
  return (
    <section id="depoimentos" className="pt-10 sm:pt-20">
      <Container>
        <Heading>Depoimentos</Heading>
        <div className="group flex space-x-3 overflow-hidden rounded-xl">
          <ul className="animate-list group-hover:paused mt-8 flex gap-3 rounded-xl">
            {[...reviews, ...reviews].map((review, index) => (
              <ReviewsItem key={index} review={review} />
            ))}
          </ul>
          <ul
            aria-hidden={true}
            className="animate-list group-hover:paused mt-8 flex gap-3 rounded-xl"
          >
            {[...reviews, ...reviews].map((review, index) => (
              <ReviewsItem key={index} review={review} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
