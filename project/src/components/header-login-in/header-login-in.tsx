import {Link, useNavigate} from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-toolkit';
import {logoutAction} from '../../store/api-actions';

function HeaderLoginIn() {
  const authorizationStatus = useAppSelector((state) => state.dataPage.authorizationStatus);
  const avatar = useAppSelector((state) => state.dataPage.avatarUrl);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickImgAvatar = () => {
    navigate(AppRoute.MyList);
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        {
          avatar !== null &&
          <div onClick={onClickImgAvatar} className="user-block__avatar">
            <img src={avatar} alt="User avatar" width="63" height="63"/>
          </div>
        }
      </li>
      <li className="user-block__item">
        {
          authorizationStatus !== AuthorizationStatus.Auth
            ? (
              <Link to={AppRoute.Login} className="user-block__link sign-in__btn">Sign In</Link>
            ) : (
              <Link to="/" onClick={(env) => {
                env.stopPropagation();
                dispatch(logoutAction());
              }} className="user-block__link"
              >
                Sign out
              </Link>
            )
        }
      </li>
    </ul>
  );
}

export default HeaderLoginIn;
