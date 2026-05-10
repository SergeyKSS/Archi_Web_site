import type { JSX } from 'react';
import ProjectItem from './project-item';
import type { Offer } from '../../../types/offer';

type ProjectsProps = {
  offers: Offer[];
}

function Projects({offers}: ProjectsProps): JSX.Element {
  return (
    <ul className="projects__list">
      {offers.map((offer) => (
        <ProjectItem key={offer.id} offer={offer}/>
      ))}
    </ul>
  );
}

export default Projects;
