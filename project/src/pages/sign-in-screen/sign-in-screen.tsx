import {useAppDispatch} from '../../hooks/hooks-toolkit';
import {useNavigate} from 'react-router-dom';

import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import {loginAction} from '../../store/api-actions';
import {FormEvent, useRef, useState} from 'react';
import {AuthData} from '../../types/auth-data';

function SignInScreen() {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData)).then(() => {
      navigate('/');
    });
  };

  const onHandlerSignIn = (e: FormEvent) => {
    e.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const checkValidEmail = () => {
    if (loginRef.current !== null) {
      const emailValid = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/.test(loginRef.current.value);
      emailValid ? setIsEmailValid(true) : setIsEmailValid(false);
    }
  };

  const checkValidPassword = () => {
    if (passwordRef.current !== null) {
      const passwordValid = /^(?=.*\d)(?=.*[A-Za-z]).*$/.test(passwordRef.current.value);
      passwordValid ? setIsPasswordValid(true) : setIsPasswordValid(false);
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form onSubmit={onHandlerSignIn} className="sign-in__form">
          {
            !isEmailValid &&
            <div className="sign-in__message">
              <p>Please enter a valid email address</p>
            </div>
          }
          {
            !isPasswordValid &&
            <div className="sign-in__message">
              <p>Please enter a valid password address. At least one letter and one number</p>
            </div>
          }
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" ref={loginRef} type="email" placeholder="Email address" name="user-email" id="user-email" onInput={checkValidEmail}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" ref={passwordRef} type="password" placeholder="Password" name="user-password" id="user-password" onInput={checkValidPassword}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              disabled={!isPasswordValid || !isEmailValid || ((loginRef.current || passwordRef.current) === null)}
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );
}

export default SignInScreen;
