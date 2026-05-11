import type { JSX } from "react";
import type { detailedOffer } from "../../../types/detailedOffer";

type TestimonialsItemProps = {
  review: detailedOffer;
}

function TestimonialsItem({review}: TestimonialsItemProps): JSX.Element {
  return (
      <li className="testimonials__item">
        <img
          src={review.images[0]}
          alt={review.title}
          width={151}
          height={151}
          className="testimonials__photo"
        />
        <h3 className="testimonials__name">{review.host.name}</h3>
        <p className="testimonials__descr">
          {review.description}
        </p>
      </li>
  );
}

export default TestimonialsItem;
