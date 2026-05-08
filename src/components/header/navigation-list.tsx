import type { JSX } from 'react';
import NavigationItem from './navigation-item';
import { NavItems } from '../../const/const';

function NavigationList(): JSX.Element {
  return (
    <ul className="nav__list">
      {NavItems.map((item) => (
        <NavigationItem
          key={item.label}
          label={item.label}
          to={item.to}
        />
      ))}
    </ul>
  )
}

export default NavigationList;