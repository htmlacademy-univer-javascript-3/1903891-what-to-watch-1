import {Film} from '../../types/film';
import {useParams} from 'react-router-dom';

type FilmScreenDetailsProps = {
  films: Film[]
}

function FilmScreenDetails(props: FilmScreenDetailsProps) {
  const {films} = props;
  const {id} = useParams();
  const film = films.find((el: Film) => el.id.toString() === id);
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film!.filmCardInfo.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>

          {film!.filmCardInfo.starring.map((star: string, index) => (
            index === film!.filmCardInfo.starring.length - 1
              ? <span className="film-card__details-value">{star}</span>
              : <span>{star},<br/></span>
          ))}
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{film!.runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film!.filmCardInfo.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film!.filmCardInfo.released}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmScreenDetails;
