import Logo from '../logo/logo';
import HeaderLoginIn from '../header-login-in/header-login-in';
import FilmCardButton from '../film-card-button/film-card-button';

function FilmCardHero() {
  return (
    <div className="film-card__hero">
      <div className="film-card__bg">
        <img src="../../../public/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
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

          <FilmCardButton/>
        </div>
      </div>
    </div>
  );
}

export default FilmCardHero;
