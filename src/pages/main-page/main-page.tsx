import type { JSX } from 'react';
import Services from './services/services';
import Projects from './projects/projects';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchOffersAction } from '../../store/api-actions';
import { processErrorHandle } from '../../services/process-error-handle';
import { selectSlicedOffers } from '../../store/selectors';
import { selectOffersById } from '../../store/selectors';
import { Helmet } from 'react-helmet-async';
import TestimonialsList from './testimonials-list/testimonials-list';
import { fetchOfferByIdAction } from '../../store/api-actions';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const shownOffers = useAppSelector((state) => 
    selectSlicedOffers(state)
  );
  const shownOffersById = useAppSelector((state) => 
    selectOffersById(state)
  );



  useEffect(() => {
    dispatch(fetchOffersAction()).then((result) => {
      if (fetchOffersAction.rejected.match(result)) {
        processErrorHandle(dispatch, result.payload ?? 'Unknown error');
      }
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchOfferByIdAction("4bcdf41a-7b7a-4af8-ac9d-eba6289c3d30")).then((result) => {
      if (fetchOffersAction.rejected.match(result)) {
        processErrorHandle(dispatch, result.payload ?? 'Unknown error');
      }
    });
  }, [dispatch]);

  return (
    <main className="main">
      <Helmet>
        <title>Main page</title>
      </Helmet>
      <section className="greeting">
        <div className="greeting__container">
          <div className="greeting__rectangle">
            <p className="greeting__title">Best solution for your home</p>
            <p className="greeting__descr">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet
            </p>
          </div>
        </div>
      </section>

      <Services />

      <section className="about">
        <div className="about__img" />
        <div className="about__info">
          <h2 className="about__title">About Us</h2>
          <p className="about__descr">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringiaccent urna,
            porttitor
          </p>
          <a href="#" className="about__link">
            Read more
          </a>
        </div>
      </section>

      <section className="projects">
        <h2 className="projects-title">Our projects</h2>
        <Projects offers={shownOffers}/>
      </section>

      <section className="testimonials">
        <h2 className="testimonials__title">Testimonial</h2>
        <TestimonialsList reviews={shownOffersById}/>
      </section>
    </main>
  );
}

export default MainPage;
