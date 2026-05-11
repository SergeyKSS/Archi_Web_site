import type { JSX } from "react";
import TestimonialsItem from "./testimonials-item";
import type { detailedOffer } from "../../../types/detailedOffer";

type TestimanialsListProps = {
  review: detailedOffer;
}

function TestimonialsList({review}: TestimanialsListProps): JSX.Element {
  return (
    <ul className="testimonials__list">
      <TestimonialsItem review={review}/>
    </ul>
  );
}

export default TestimonialsList;
