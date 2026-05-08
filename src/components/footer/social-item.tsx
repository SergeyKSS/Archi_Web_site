import type { JSX } from "react";
import { socialsData } from "../../const/const";

type SocialProps = {
  social: (typeof socialsData)[number];
}

function SocialItem({social}: SocialProps): JSX.Element {
  return (
      <li className="social__item">
        <a
          href={social.href} 
          className={`social__link ${social.modifier}`}
          target="_blank"
          rel="noreferrer"
        >
          <span className="visually-hidden">{social.name}</span>
        </a>
      </li>
  );
}

export default SocialItem;
