import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useEffect, useState} from 'react';

type FilmCardNavProps = {
  id: number
}

function addActiveClass(pathname: string): string {
  const stringPathname = pathname.split('/');
  const lastWordPathname = stringPathname[stringPathname.length - 1];
  switch (lastWordPathname) {
    case AppRoute.FilmDetails:
      return AppRoute.FilmDetails;
    case AppRoute.FilmReviews:
      return AppRoute.FilmReviews;
    default:
      return '';
  }
}

function FilmCardNav(props: FilmCardNavProps) {
  const {id} = props;
  const location = useLocation();
  const [pathname, setPathname] = useState('');
  useEffect(() => {
    const pathnameFunc = addActiveClass(location.pathname);
    setPathname(pathnameFunc);

    return () => {
      setPathname('');
    };
  });

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${pathname === '' ? 'film-nav__item--active' : ''}`}>
          <Link to={`${AppRoute.FilmsList}/${id}`} className="film-nav__link">Overview</Link>
        </li>
        <li className={`film-nav__item ${pathname === AppRoute.FilmDetails ? 'film-nav__item--active' : ''}`}>
          <Link to={AppRoute.FilmDetails} className="film-nav__link">Details</Link>
        </li>
        <li className={`film-nav__item ${pathname === AppRoute.FilmReviews ? 'film-nav__item--active' : ''}`}>
          <Link to={AppRoute.FilmReviews} className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FilmCardNav;
