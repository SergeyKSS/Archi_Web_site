import type { JSX } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import { AuthorizationStatus } from '../../const/const';

type LayoutProps = {
  authorizationStatus: AuthorizationStatus;
}

function Layout({authorizationStatus}: LayoutProps): JSX.Element {  
  return (
    <div className="container">
      <Header authorizationStatus={authorizationStatus}/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;