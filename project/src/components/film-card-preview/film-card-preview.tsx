import {Fragment} from 'react';
import Logo from '../logo/logo';
import HeaderLoginIn from '../header-login-in/header-login-in';
import FilmCardButton from '../film-card-button/film-card-button';
import {Film} from '../../types/film';

type filmCardPreviewProp = {
  film: Film
};

function FilmCardPreview(props: filmCardPreviewProp) {
  const {film} = props;

  return (
    <Fragment>
      <div className="film-card__bg">
        <img src={film.backgroundImage} alt={film.name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo/>
        <HeaderLoginIn/>
      </header>

      <div className="film-card__wrap">
        <div className="film-card__desc">
          <h2 className="film-card__title">{film.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{film.genre}</span>
            <span className="film-card__year">{film.released}</span>
          </p>

          <FilmCardButton/>
        </div>
      </div>
    </Fragment>
  );
}

export default FilmCardPreview;
