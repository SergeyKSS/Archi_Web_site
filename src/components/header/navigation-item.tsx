import type { JSX } from "react";
import { NavLink } from "react-router-dom";
import { NavItems } from "../../const/const";

type NavigationItemProps = {
  label: (typeof NavItems)[number]['label'];
  to: (typeof NavItems)[number]['to'];
}

function NavigationItem({label, to}: NavigationItemProps): JSX.Element {
  return (
    <li className="nav__item">
      <NavLink 
        className={({isActive}) => isActive ? 'nav__link nav__link_active' : 'nav__link'}
        to={to}
      >
        {label}
      </NavLink>
    </li>
  );
}

export default NavigationItem;
