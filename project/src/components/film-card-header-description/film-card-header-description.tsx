import {Film} from '../../types/film';
import Logo from '../logo/logo';
import HeaderLoginIn from '../header-login-in/header-login-in';

type filmCardHeaderDescriptionProp = {
  film: Film
};

function FilmCardHeaderDescription(props: filmCardHeaderDescriptionProp) {
  const {film} = props;

  return (
    <>
      <div className="film-card__bg">
        <img src={film.backgroundImage} alt={film.name}/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header film-card__head">
        <Logo/>
        <HeaderLoginIn/>
      </header>
    </>
  );
}

export default FilmCardHeaderDescription;
