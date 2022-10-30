import {Link} from 'react-router-dom';

import NotFoundImage from '../../img/not-found.jpg';
import './not-found-page.styles.css';

function NotFoundPage() {
  return (
    <>
      <div className="wrapper-notFoundPage">
        <Link to="/" className="title-back">Go back to main page</Link>
        <div className="wrapper-image">
          <img className="image" src={NotFoundImage} alt="cute-cat"/>
        </div>
      </div>
    </>
  )
    ;
}

export default NotFoundPage;
