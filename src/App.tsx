import MainPage from "./pages/main-page/main-page";
import type { JSX } from 'react';
import { AppRoute } from "./const/const";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import ProjectPage from "./pages/project-page/project-page";
import LoginPage from "./pages/login/login-page";
import { useAppSelector } from "./hooks";

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);

  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout authorizationStatus={authorizationStatus}/>}>
          <Route index element={<MainPage authorizationStatus={authorizationStatus}/>} />
          <Route path={AppRoute.Project} element={<ProjectPage />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
