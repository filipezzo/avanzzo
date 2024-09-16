import { reviews } from "../constants/reviews";
import { Container } from "./container";
import { Heading } from "./heading";
import { ReviewsItem } from "./inner/reviews-item";

export function Reviews() {
  return (
    <section id="depoimentos" className="overflow-hidden pt-20">
      <Container>
        <Heading>Depoimentos</Heading>
        <ul className="mt-8 flex w-fit items-stretch gap-3">
          {reviews.map((review) => (
            <ReviewsItem key={review.id} review={review} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
