import type { JSX, SubmitEvent } from "react";
import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Navigate } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const/const";
import { processErrorHandle } from "../../services/process-error-handle";
import { loginAction } from "../../store/api-actions";

function LoginPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);
  const isValidPassword = (password: string): boolean => 
    /^(?=.*[A-Za-z])(?=.*\d).+$/.test(password);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Root} />
  }

  const handleSubmit = (evt: SubmitEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      const email = loginRef.current.value;
      const password = loginRef.current.value;

      if (!password) {
        processErrorHandle(dispatch, 'Password must not be empty');
        return;
      }

      if (!isValidPassword(password)) {
        processErrorHandle(dispatch, 'Password must contain at least one letter and one number');
        return;
      }

      dispatch(loginAction({login: email, password})).then((result) => {
        if (loginAction.rejected.match(result)) {
          processErrorHandle(dispatch, result.payload ?? 'Unknown error');
        }
      });
    }
  };

  return (
    <main>
      <form className="login-form" action="#" method="post" onSubmit={handleSubmit}>
        <h1 className="login-form__title">Login</h1>
        <label className="login-form__label" htmlFor="email">
          Email
        </label>
        <input
          className="login-form__input"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <label className="login-form__label" htmlFor="password">
          Password
        </label>
        <input
          className="login-form__input"
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <button className="login-form__button" type="submit">
          Sign in
        </button>
      </form>
    </main>
  );
}

export default LoginPage;
