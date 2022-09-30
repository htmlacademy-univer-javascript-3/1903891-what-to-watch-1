import {Link} from 'react-router-dom';

import './not-found-page.styles.css';

function NotFoundPage() {
  return (
    <div className="error-page-message">
      <div className="error-page-title">404 Not Found</div>
      <Link to="/" className='error-page-link'>Вернуться на главную страницу.</Link>
    </div>
  );
}

export default NotFoundPage;
