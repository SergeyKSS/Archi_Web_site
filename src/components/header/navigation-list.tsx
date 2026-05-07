import type { JSX } from 'react';
import NavigationItem from './navigation-item';
import { NavItems } from '../../const/const';

type NavigationListProps = {
  currentPage: string;
  onMenuItemClick: (menuItem: (typeof NavItems)[number]) => void;
}

function NavigationList({currentPage, onMenuItemClick}: NavigationListProps): JSX.Element {
  return (
    <ul className="nav__list">
      {NavItems.map((item) => (
        <NavigationItem
          key={item}
          menuName={item}
          isActive={currentPage === item}
          onClick={onMenuItemClick} />
      ))}
    </ul>
  )
}

export default NavigationList;