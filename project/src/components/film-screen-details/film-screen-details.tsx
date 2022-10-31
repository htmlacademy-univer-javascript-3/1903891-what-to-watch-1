import {useAppSelector} from '../../hooks/hooks-toolkit';

function FilmScreenDetails() {
  const film = useAppSelector((state) => state.filmCard.filmByID);

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film!.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>

          {film!.starring.map((star: string, index) => (
            index === film!.starring.length - 1
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
          <span className="film-card__details-value">{film!.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film!.released}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmScreenDetails;
