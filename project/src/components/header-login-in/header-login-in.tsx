import Avatar from '../../img/avatar.jpg';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function HeaderLoginIn() {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={Avatar} alt="User avatar" width="63" height="63"/>
        </div>
      </li>
      <li className="user-block__item">
        <Link to={AppRoute.Login} className="user-block__link">Sign out</Link>
      </li>
    </ul>
  );
}

export default HeaderLoginIn;
