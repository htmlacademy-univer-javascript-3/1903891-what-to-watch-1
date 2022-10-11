import {Fragment} from 'react';

import Footer from '../footer/footer';
import FilmCardHero from '../film-card-hero/film-card-hero';

import HotelPoster from '../../img/the-grand-budapest-hotel-poster.jpg';
import '../../css/main.min.css';
import {Film} from '../../types/film';
import FilmCardNav from '../film-card-nav/film-card-nav';

type filmsProp = {
  film: Film,
  renderFilmCard: (film: Film) => JSX.Element
};

function Films(props: filmsProp) {
  const {film, renderFilmCard} = props;

  return (
    <Fragment>
      <section className="film-card film-card--full">
        <FilmCardHero film={film}/>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={HotelPoster} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <FilmCardNav/>

              <div className="film-rating">
                <div className="film-rating__score">8,9</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.</p>

                <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

                <p className="film-card__director"><strong>Director: Wes Anderson</strong></p>

                <p className="film-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {[...new Array(4)].map((el: Film) => (
              renderFilmCard(el)
            ))}
          </div>
        </section>

        <Footer/>
      </div>
    </Fragment>
  );
}

export default Films;
