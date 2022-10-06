import {Fragment} from 'react';

import FilmCard from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';
import FilmCardHero from '../../components/film-card-hero/film-card-hero';

import '../../css/main.min.css';
import HotelPoster from '../../img/the-grand-budapest-hotel-poster.jpg';
import {Film} from '../../types/film';
import FilmCardNav from '../../components/film-card-nav/film-card-nav';

export type FilmDetailsScreenType = {
  films: Film[],
}

function FilmDetailsScreen(props: FilmDetailsScreenType) {
  const {films} = props;
  return (
    <Fragment>
      <section className="film-card film-card--full">
        <FilmCardHero film={films[0]}/>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={HotelPoster} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <FilmCardNav/>

              <div className="film-card__text film-card__row">
                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Director</strong>
                    <span className="film-card__details-value">Wes Anderson</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Starring</strong>
                    <span className="film-card__details-value">
                    Bill Murray, <br/>
                    Edward Norton, <br/>
                    Jude Law, <br/>
                    Willem Dafoe, <br/>
                    Saoirse Ronan, <br/>
                    Tony Revoloru, <br/>
                    Tilda Swinton, <br/>
                    Tom Wilkinson, <br/>
                    Owen Wilkinson, <br/>
                    Adrien Brody, <br/>
                    Ralph Fiennes, <br/>
                    Jeff Goldblum
                    </span>
                  </p>
                </div>

                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Run Time</strong>
                    <span className="film-card__details-value">1h 39m</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Genre</strong>
                    <span className="film-card__details-value">Comedy</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Released</strong>
                    <span className="film-card__details-value">2014</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {films &&
            films.map((product: Film) => (
              <FilmCard key={product.id} film={product} onMouseOverHandler={() => {
              }}/>
            ))}
          </div>
        </section>
        <Footer/>
      </div>
    </Fragment>
  );
}

export default FilmDetailsScreen;
