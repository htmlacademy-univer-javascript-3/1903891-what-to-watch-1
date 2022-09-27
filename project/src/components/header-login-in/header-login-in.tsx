import Avatar from '../../img/avatar.jpg';
import '../../css/main.min.css';

function HeaderLoginIn() {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={Avatar} alt="User avatar" width="63" height="63"/>
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link">Sign out</a>
      </li>
    </ul>
  );
}

export default HeaderLoginIn;
