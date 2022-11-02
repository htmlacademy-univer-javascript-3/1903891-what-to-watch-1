import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks/hooks-toolkit';

function HeaderLoginIn() {
  const avatar = useAppSelector((state) => state.dataPage.avatarUrl);
  const authorizationStatus = useAppSelector((state) => state.dataPage.authorizationStatus);

  return (
    <ul className="user-block">
      <li className="user-block__item">
        {
          avatar !== null &&
          <Link to={AppRoute.MyList} className="user-block__avatar">
            <img src={avatar} alt="User avatar" width="63" height="63"/>
          </Link>
        }
      </li>
      <li className="user-block__item">
        {
          authorizationStatus !== AuthorizationStatus.Auth ?
            <Link to={AppRoute.Login} className="user-block__link">Sign In</Link> :
            <Link to="/" className="user-block__link">Sign Out</Link>
        }
      </li>
    </ul>
  );
}

export default HeaderLoginIn;
