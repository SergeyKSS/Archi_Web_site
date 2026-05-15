import type { JSX } from 'react';
import { Link, NavLink }  from 'react-router-dom';
import NavigationList from './navigation-list';
import { AppRoute } from '../../const/const';
import { AuthorizationStatus } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { processErrorHandle } from '../../services/process-error-handle';

type HeaderProps = {
  authorizationStatus: AuthorizationStatus;
}

function Header({authorizationStatus}: HeaderProps): JSX.Element {
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const isLoginLoading = useAppSelector((state) => state.user.isLoginLoading);
  const dispatch = useAppDispatch();

  const hanldeLogoutClick = () => {
    dispatch(logoutAction()).then((result) => {
      if (logoutAction.rejected.match(result)) {
        processErrorHandle(dispatch, result.payload ?? 'Unknown error');
      }
    })
  }

  return (
    <header className="header">
      <nav className="nav header__nav" aria-label="Main navigation">
        <Link className="nav__logo" to={AppRoute.Root}>
          ArchiWeb
        </Link>
        <NavigationList />
        <div className="nav__auth-wrapper">
          {isAuth ? (
          <button 
            type="button"
            className='nav__auth'
            onClick={hanldeLogoutClick}
            disabled={isLoginLoading}
          >
            Logout
          </button>
          ) : (
            <NavLink 
            className={({isActive}) => isActive ? 'nav__auth nav__auth_active' : 'nav__auth'}
            to={AppRoute.Login}
          >
            Login
          </NavLink>
          )}
        </div>
        <button type="button" className="nav__search">
          <span className="visually-hidden">Search</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
