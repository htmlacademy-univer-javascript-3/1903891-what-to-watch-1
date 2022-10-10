import {Fragment, useState} from 'react';
import Footer from '../footer/footer';
import FilmCard from '../film-card/film-card';
import FilmCardHero from '../film-card-hero/film-card-hero';
import ReviewCards from '../review-cards/review-cards';

import HotelPoster from '../../img/the-grand-budapest-hotel-poster.jpg';
import '../../css/main.min.css';
import {Film} from '../../types/film';
import FilmCardNav from '../film-card-nav/film-card-nav';

type filmReviewsProp = {
  film: Film
};

function FilmReviews(props: filmReviewsProp) {
  const {film} = props;
  const [activeCard, setActiveCard] = useState(-1);
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
        {[...new Array(4)].map((el: Film) => (
          <FilmCard
            key={el.id}
            film={el}
            onMouseOverHandler={(e: any) => {
              e.preventDefault();
              setActiveCard(el.id);
            }}
            onMouseLeaveHandler={(e: any) => {
              e.preventDefault();
              setActiveCard(-1);
            }}
            isActive={activeCard === el.id}/>
        ))}
        <Footer/>
      </div>
    </Fragment>
  );
}

export default FilmReviews;
