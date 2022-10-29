import {useParams} from 'react-router-dom';
import {Fragment} from 'react';
import {makeFilmRatingDescription} from '../../const';
import store from '../../store/store';
import {getFilmByID} from '../../store/api-actions';
import {useAppSelector} from '../../hooks/hooks-toolkit';

function FilmScreenOverview() {
  const {id} = useParams();
  store.dispatch(getFilmByID(id));
  const film = useAppSelector((state) => state.films.filmByID);

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
        <p>{film!.filmCardInfo.description}</p>

        <p className="film-card__director"><strong>Director: {film!.filmCardInfo.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: </strong>
          {film!.filmCardInfo.starring.map((star: string, index) => (
            index === film!.filmCardInfo.starring.length - 1
              ? <strong key={star}>{star}</strong>
              : <strong key={star}>{star}, </strong>
          ))} <strong>and other</strong>
        </p>
      </div>
    </Fragment>
  );
}

export default FilmScreenOverview;
