import {Fragment} from 'react';

import Footer from '../../components/footer/footer';

import {Film} from '../../types/film';
import FilmCardNav from '../../components/film-card-nav/film-card-nav';
import {Navigate, Outlet, useParams} from 'react-router-dom';
import {AppRoute} from '../../const';
import FilmCard from '../../components/film-card/film-card';
import store from '../../store/store';
import {getFilmByID} from '../../store/api-actions';
import {useAppSelector} from '../../hooks/hooks-toolkit';


function FilmScreen() {
  const {id} = useParams();
  store.dispatch(getFilmByID(id));
  const film = useAppSelector((state) => state.films.filmByID);
  const films = useAppSelector((state) => state.films.films);
  //const film = films.find((el: Film) => el.id.toString() === id);

  const similarFilmsByGenre = films.filter((filmItem: Film) => filmItem.filmCardInfo.genre === film!.filmCardInfo.genre).slice(0, 4);
  return (
    <Fragment>
      <section className="film-card film-card--full">
        {film !== undefined ?
          <>
            {/*<FilmCardHero film={film}/>*/}
            <div className="film-card__wrap film-card__translate-top">
              <div className="film-card__info">
                <div className="film-card__poster film-card__poster--big">
                  <img src={film.filmCardInfo.posterImage} alt={film.filmCardInfo.name} width="218" height="327"/>
                </div>

                <div className="film-card__desc">
                  <FilmCardNav id={film.id}/>
                  <Outlet/>
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
            {films &&
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
