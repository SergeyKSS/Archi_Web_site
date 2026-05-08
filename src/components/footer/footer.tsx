import type { JSX } from "react";
import Socials from "./socials";

function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <div className="page-footer__info">
        <h3 className="page-footer__title">ArchiWeb</h3>
        <p className="page-footer__about">
          Archiweb is an architectural consultant based in Berlin, Germany. We
          provide solutions for your architecture and residential design
        </p>
        <Socials />
      </div>
      <div className="page-footer__articles">
        <h3 className="page-footer__subtitle">Articles</h3>
        <ul className="page-footer__articles-list">
          <li className="page-footer__articles-item">
            <p className="page-footer__article-text">
              7 Tips for kids friendly interior design
            </p>
          </li>
          <li className="page-footer__item">
            <p className="page-footer__article-text">
              Smart tips for changing a room
            </p>
          </li>
          <li className="page-footer__item">
            <p className="page-footer__article-text">Eco-friendly design</p>
          </li>
        </ul>
      </div>
      <div className="page-footer__location">
        <h3 className="page-footer__subtitle">Location</h3>
        <img
          src="../images/map.png"
          alt="Map showing the office location"
          width={295}
          height={221}
          className="page-footer__map"
        />
      </div>
    </footer>
  );
}

export default Footer;
