import {Fragment} from 'react';

import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import HeaderLoginIn from '../../components/header-login-in/header-login-in';
import FilmCardButton from '../../components/film-card-button/film-card-button';

import Hotel from '../../img/bg-the-grand-budapest-hotel.jpg';
import HotelPoster from '../../img/the-grand-budapest-hotel-poster.jpg';
import '../../css/main.min.css';
import {InitType} from '../../types/init';
import FilmList from '../../components/film-list/film-list';
import ItemGenresList from '../../components/item-genres-list/item-genres-list';

function GeneralScreen(props: InitType) {
  const {films} = props;
  return (
    <Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={Hotel} alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>
          <HeaderLoginIn/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={HotelPoster} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">The Grand Budapest Hotel</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
              </p>

              <FilmCardButton film={films[0]}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {[...new Array(10)].map((el) => (
              <ItemGenresList key={el}/>
            ))}
          </ul>

          <FilmList films={films}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer/>
      </div>
    </Fragment>
  );
}

export default GeneralScreen;
