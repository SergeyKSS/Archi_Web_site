import type { JSX } from "react";
import type { Offer } from "../../../types/offer";

type ProjectProps = {
  offer: Offer;
}

function ProjectItem({offer}: ProjectProps): JSX.Element {
  return (
    <li className="projects__item">
      <img
        src={offer.previewImage}
        width={334}
        height={193}
        alt={offer.title}
        className="projects__image"
      />
      <p className="projects__descr">
        {offer.title}
      </p>
      <p className="projects__descr">
        {offer.type} <span className="projects__accent">{offer.rating}</span>
      </p>
    </li>
  );
}

export default ProjectItem;
