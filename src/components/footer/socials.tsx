import type { JSX } from "react";
import { socialsData } from "../../const/const";
import SocialItem from "./social-item";

function Socials(): JSX.Element {
  return (
    <ul className="social page-footer__social">
      {socialsData.map((item) => (
        <SocialItem
          key={item.name}
          social={item}
        />
      ))}
    </ul>
  );
}

export default Socials;
