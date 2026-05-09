import type { JSX } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

function Layout(): JSX.Element {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;