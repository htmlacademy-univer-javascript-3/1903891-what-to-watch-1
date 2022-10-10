import {Fragment, useState} from 'react';

import FilmCard from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';
import FilmCardHero from '../../components/film-card-hero/film-card-hero';

import '../../css/main.min.css';
import {Film} from '../../types/film';
import FilmCardNav from '../../components/film-card-nav/film-card-nav';
import {Navigate, useParams} from 'react-router-dom';
import {AppRoute} from '../../const';

export type FilmDetailsScreenType = {
  films: Film[],
}

function FilmDetailsScreen(props: FilmDetailsScreenType) {
  const {films} = props;
  const {id} = useParams();
  const film = films.find((el: Film) => el.id.toString() === id);
  const [activeCard, setActiveCard] = useState(-1);

  return (
    <Fragment>
      <section className="film-card film-card--full">
        {film !== undefined ?
          <>
            <FilmCardHero film={film}/>
            <div className="film-card__wrap film-card__translate-top">
              <div className="film-card__info">
                <div className="film-card__poster film-card__poster--big">
                  <img src={film.filmCardInfo.posterImage} alt={film.filmCardInfo.name} width="218" height="327"/>
                </div>

                <div className="film-card__desc">
                  <FilmCardNav/>

                  <div className="film-card__text film-card__row">
                    <div className="film-card__text-col">
                      <p className="film-card__details-item">
                        <strong className="film-card__details-name">Director</strong>
                        <span className="film-card__details-value">{film.filmCardInfo.director}</span>
                      </p>
                      <p className="film-card__details-item">
                        <strong className="film-card__details-name">Starring</strong>

                        {film.filmCardInfo.starring.map((star: string, index) => (
                          index === film.filmCardInfo.starring.length - 1
                            ? <span className="film-card__details-value">{star}</span>
                            : <span>{star},<br/></span>
                        ))}
                      </p>
                    </div>

                    <div className="film-card__text-col">
                      <p className="film-card__details-item">
                        <strong className="film-card__details-name">Run Time</strong>
                        <span className="film-card__details-value">{film.runTime}</span>
                      </p>
                      <p className="film-card__details-item">
                        <strong className="film-card__details-name">Genre</strong>
                        <span className="film-card__details-value">{film.filmCardInfo.genre}</span>
                      </p>
                      <p className="film-card__details-item">
                        <strong className="film-card__details-name">Released</strong>
                        <span className="film-card__details-value">{film.filmCardInfo.released}</span>
                      </p>
                    </div>
                  </div>
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
            films.map((filmItem: Film) => (
              <FilmCard
                key={filmItem.id}
                film={filmItem}
                isActive={activeCard === filmItem.id}
                onMouseOverHandler={(e: any) => {
                  e.preventDefault();
                  setActiveCard(filmItem.id);
                }}
                onMouseLeaveHandler={(e: any) => {
                  e.preventDefault();
                  setActiveCard(-1);
                }}
              />
            ))}
          </div>
        </section>
        <Footer/>
      </div>
    </Fragment>
  );
}

export default FilmDetailsScreen;
