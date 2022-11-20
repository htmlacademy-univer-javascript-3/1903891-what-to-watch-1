import {useParams} from 'react-router-dom';
import {Fragment, memo, useEffect} from 'react';

import Footer from '../../components/footer/footer';
import {Film} from '../../types/film';
import {FilmCardInfo} from '../../const';
import FilmCard from '../../components/film-card/film-card';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-toolkit';
import FilmCardHero from '../../components/film-card-hero/film-card-hero';
import {getCommentsByID, getFavoriteFilms, getFilmByID, getSimilarFilmsByID} from '../../store/api-actions';
import {changeTabsCard} from '../../store/film-card/film-card.reducer';
import NotFoundPage from '../../components/not-found-page/not-found-page';
import DescriptionFilmsWithNav from '../../components/description-films-with-nav/description-films-with-nav';

function FilmScreen() {
  const params = useParams();
  const prodId = params.id;
  const dispatch = useAppDispatch();

  const film = useAppSelector((state) => state.filmCard.filmByID);
  const films = useAppSelector((state) => state.filmList.films);
  const similarFilmsByGenre = useAppSelector((state) => state.filmCard.similarFilmsByID).slice(0, 4);

  useEffect(() => {
    const mounted = true;

    if (mounted) {
      dispatch(getFilmByID(prodId));
      dispatch(getCommentsByID(prodId));
      dispatch(getSimilarFilmsByID(prodId))
        .then(() => {
          dispatch(changeTabsCard(FilmCardInfo.Overview));
        });
      dispatch(getSimilarFilmsByID(prodId));
      dispatch(getFavoriteFilms());
    }
  }, [prodId]);

  if (!film) {
    return <NotFoundPage/>;
  }

  return (
    <Fragment>
      <section className="film-card film-card--full">
        <FilmCardHero film={film}/>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327"/>
            </div>

            <DescriptionFilmsWithNav/>
          </div>
        </div>

      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {films && similarFilmsByGenre &&
            similarFilmsByGenre.map((filmItem: Film) => (
              <FilmCard key={filmItem.id} film={filmItem}/>
            ))}
          </div>
        </section>
        <Footer/>
      </div>
    </Fragment>
  );
}

export default memo(FilmScreen);
