import {Film} from '../../types/film';
import FilmCardButton from '../film-card-button/film-card-button';

type filmCardDescriptionProp = {
  film: Film
};

function FilmCardDescription(props: filmCardDescriptionProp) {
  const {film} = props;

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{film.name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{film.genre}</span>
        <span className="film-card__year">{film.released}</span>
      </p>

      <FilmCardButton/>
    </div>
  );
}

export default FilmCardDescription;
