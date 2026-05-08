import type { JSX } from 'react';
import { Link }  from 'react-router-dom';
import NavigationList from './navigation-list';
import { AppRoute } from '../../const/const';

function Header(): JSX.Element {
  return (
    <header className="header">
      <nav className="nav header__nav" aria-label="Main navigation">
        <Link className="nav__logo" to={AppRoute.Root}>
          ArchiWeb
        </Link>
        <NavigationList/>
        <button type="button" className="nav__search">
          <span className="visually-hidden">Search</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
