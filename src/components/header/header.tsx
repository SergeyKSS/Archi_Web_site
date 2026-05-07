import type { JSX } from 'react';
import { Link }  from 'react-router-dom';
import NavigationList from './navigation-list';
import { useState } from 'react';

function Header(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<string>('Home');
  return (
    <header className="header">
      <nav className="nav header__nav" aria-label="Main navigation">
        <Link className="nav__logo" to="#">
          ArchiWeb
        </Link>
        <NavigationList
          currentPage={currentPage}
          onMenuItemClick={setCurrentPage}
        />
        <a href="#" className="nav__search">
          <span className="visually-hidden">Search</span>
        </a>
      </nav>
    </header>
  );
}

export default Header;
