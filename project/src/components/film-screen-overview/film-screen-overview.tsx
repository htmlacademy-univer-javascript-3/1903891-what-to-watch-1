import {Fragment} from 'react';
import {makeFilmRatingDescription} from '../../const';
import {useAppSelector} from '../../hooks/hooks-toolkit';

function FilmScreenOverview() {
  const film = useAppSelector((state) => state.filmCard.filmByID);

  return (
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film!.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{makeFilmRatingDescription(film!.rating)}</span>
          <span className="film-rating__count">{film!.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film!.description}</p>

        <p className="film-card__director"><strong>Director: {film!.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: </strong>
          {film!.starring.map((star: string, index) => (
            index === film!.starring.length - 1
              ? <strong key={star}>{star}</strong>
              : <strong key={star}>{star}, </strong>
          ))} <strong>and other</strong>
        </p>
      </div>
    </Fragment>
  );
}

export default FilmScreenOverview;
