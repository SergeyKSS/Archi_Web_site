import type { JSX } from "react";
import { Link } from "react-router-dom";
import { NavItems } from "../../const/const";

type NavigationItemProps = {
  menuName: (typeof NavItems)[number];
  isActive: boolean;
  onClick: (menuItem: (typeof NavItems)[number]) => void;
}

function NavigationItem({menuName, isActive, onClick}: NavigationItemProps): JSX.Element {
  return (
    <li className="nav__item">
      <Link 
        className={`nav__link ${isActive ? 'nav__link_active' : ''}`} to='#' aria-current={isActive ? 'page' : undefined}
        onClick={(evt) => {
          evt.preventDefault();
          onClick(menuName);
        }}
      >
        {menuName}
      </Link>
    </li>
  );
}

export default NavigationItem;
