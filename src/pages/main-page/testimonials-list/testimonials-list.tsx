import type { JSX } from "react";
import TestimonialsItem from "./testimonials-item";
import type { DetailedOffer } from "../../../types/detailedOffer";

type TestimanialsListProps = {
  reviews: DetailedOffer[];
}

function TestimonialsList({reviews}: TestimanialsListProps): JSX.Element {
  return (
    <ul className="testimonials__list">
      {reviews.map((review) => (
        <TestimonialsItem review={review}/>
      ))}
    </ul>
  );
}

export default TestimonialsList;
