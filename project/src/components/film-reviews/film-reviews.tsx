import {Fragment} from 'react';
import Footer from '../footer/footer';
import FilmCard from '../film-card/film-card';
import FilmCardHero from '../film-card-hero/film-card-hero';
import ReviewCards from '../review-cards/review-cards';

import HotelPoster from '../../img/the-grand-budapest-hotel-poster.jpg';
import '../../css/main.min.css';

function FilmReviews() {
  return (
    <Fragment>
      <section className="film-card film-card--full">
        <FilmCardHero/>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={HotelPoster} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-card__reviews film-card__row">
                {[...new Array(2)].map((el) => (
                  <ReviewCards key={el}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">

          </div>
        </section>
        {[...new Array(4)].map((el) => (
          <FilmCard key={el}/>
        ))}
        <Footer/>
      </div>
    </Fragment>
  );
}

export default FilmReviews;
