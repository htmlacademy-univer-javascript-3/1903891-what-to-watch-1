import {Fragment} from 'react';
import Hotel from '../../img/bg-the-grand-budapest-hotel.jpg';
import Logo from '../logo/logo';
import HeaderLoginIn from '../header-login-in/header-login-in';
import FilmCardButton from '../film-card-button/film-card-button';
import {Film} from '../../types/film';
import '../../css/main.min.css';

type filmCardPreviewProp = {
  film: Film
};

function FilmCardPreview(props: filmCardPreviewProp) {
  const {film} = props;
  return (
    <Fragment>
      <div className="film-card__bg">
        <img src={Hotel} alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo/>
        <HeaderLoginIn/>
      </header>

      <div className="film-card__wrap">
        <div className="film-card__desc">
          <h2 className="film-card__title">The Grand Budapest Hotel</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">Drama</span>
            <span className="film-card__year">2014</span>
          </p>

          <FilmCardButton film={film}/>
        </div>
      </div>
    </Fragment>
  );
}

export default FilmCardPreview;
