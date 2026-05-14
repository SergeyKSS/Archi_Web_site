import type { JSX } from 'react';
import { Link, NavLink }  from 'react-router-dom';
import NavigationList from './navigation-list';
import { AppRoute } from '../../const/const';
import { AuthorizationStatus } from '../../const/const';

type HeaderProps = {
  authorizationStatus: AuthorizationStatus;
}

function Header({authorizationStatus}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <nav className="nav header__nav" aria-label="Main navigation">
        <Link className="nav__logo" to={AppRoute.Root}>
          ArchiWeb
        </Link>
        <NavigationList />
        <div className="nav__auth-wrapper">
          <NavLink 
            className={({isActive}) => isActive ? 'nav__auth nav__auth_active' : 'nav__auth'}
            to={AppRoute.Login}
          >
            {authorizationStatus === AuthorizationStatus.Auth ? 'Logout' : 'Login'}
          </NavLink>
        </div>
        <button type="button" className="nav__search">
          <span className="visually-hidden">Search</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
