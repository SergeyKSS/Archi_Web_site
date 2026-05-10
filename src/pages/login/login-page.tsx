import type { JSX } from "react";

function LoginPage(): JSX.Element {
  return (
    <main>
      <form className="login-form" action="#" method="post">
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
