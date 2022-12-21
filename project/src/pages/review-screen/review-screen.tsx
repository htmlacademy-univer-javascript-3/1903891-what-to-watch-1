import HeaderLoginIn from '../../components/header-login-in/header-login-in';
import {Link, useParams} from 'react-router-dom';

import Logo from '../../components/logo/logo';
import {AppRoute} from '../../const';
import CommentSubmissionForm from '../../components/comment-submission-form/comment-submission-form';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-toolkit';
import {setRatingFilms} from '../../store/film-card/film-card.reducer';
import {Fragment, useEffect} from 'react';
import {getFavoriteFilms, getFilmByID} from '../../store/api-actions';
import {setNewStateIsPlaying} from '../../store/player-store/player-store.reducer';
import NotFoundPage from '../../components/not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';

function ReviewScreen() {
  const params = useParams();
  const prodId = params.id;
  const film = useAppSelector((state) => state.filmCard.filmByID);
  const isLoading = useAppSelector((state) => state.dataPage.isDataLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const mounted = true;
    if (mounted) {
      dispatch(getFilmByID(prodId));
      dispatch(getFavoriteFilms());
    }
    dispatch(setNewStateIsPlaying(false));
  }, [prodId]);

  function handlerChooseNewRating(rating: number) {
    dispatch(setRatingFilms(rating));
  }

  if (!film && isLoading) {
    return <NotFoundPage/>;
  }

  if (!isLoading) {
    return <LoadingScreen/>;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.backgroundImage} alt={film?.name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to="/" className="breadcrumbs__link">{film?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={AppRoute.AddReview} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
          <HeaderLoginIn/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.posterImage} alt={film?.name} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <form className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {
                Array.from(Array(10), (_, index) => (
                  <Fragment key={index}>
                    <input
                      className="rating__input"
                      id={`star-${index + 1}`}
                      type="radio"
                      name="rating"
                      value={index + 1}
                      onInput={() => handlerChooseNewRating(11 - (index + 1))}
                    />
                    <label className="rating__label" htmlFor={`star-${index + 1}`}>Rating {index + 1}</label>
                  </Fragment>
                ))
              }
            </div>
          </div>

          <CommentSubmissionForm/>
        </form>
      </div>
    </section>
  );
}

export default ReviewScreen;
