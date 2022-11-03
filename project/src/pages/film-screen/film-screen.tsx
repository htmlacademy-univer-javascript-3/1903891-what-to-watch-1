import {Fragment} from 'react';

import Footer from '../../components/footer/footer';

import {Film} from '../../types/film';
import FilmCardNav from '../../components/film-card-nav/film-card-nav';
import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import FilmCard from '../../components/film-card/film-card';
import {useAppSelector} from '../../hooks/hooks-toolkit';
import FilmCardHero from '../../components/film-card-hero/film-card-hero';
import FilmScreenOverview from '../../components/film-screen-overview/film-screen-overview';
import FilmScreenReviews from '../../components/film-screen-reviews/film-screen-reviews';
import FilmScreenDetails from '../../components/film-screen-details/film-screen-details';

const FilmCardInfoFilmScreen = {
  'Overview': <FilmScreenOverview/>,
  'Details': <FilmScreenDetails/>,
  'Reviews': <FilmScreenReviews/>
};

function FilmScreen() {
  const tabsOnCard = useAppSelector((state) => state.filmCard.tabsOnCard);
  const film = useAppSelector((state) => state.filmCard.filmByID);
  const films = useAppSelector((state) => state.filmList.films);
  const similarFilmsByGenre = useAppSelector((state) => state.filmCard.similarFilmsByID).slice(0, 4);

  return (
    <Fragment>
      <section className="film-card film-card--full">
        {film !== undefined ?
          <>
            <FilmCardHero film={film}/>
            <div className="film-card__wrap film-card__translate-top">
              <div className="film-card__info">
                <div className="film-card__poster film-card__poster--big">
                  <img src={film.posterImage} alt={film.name} width="218" height="327"/>
                </div>

                <div className="film-card__desc">
                  <FilmCardNav/>
                  {FilmCardInfoFilmScreen[tabsOnCard]}
                </div>
              </div>
            </div>
          </>
          : <Navigate to={AppRoute.NotFoundPage}/>}
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

export default FilmScreen;
