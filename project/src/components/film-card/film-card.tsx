import '../../css/main.min.css';
import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import {AppRoute} from '../../const';

type FilmCardProps = {
  film: Film,
  onMouseOverHandler: (e: any) => void,
}

function FilmCard(props: FilmCardProps) {
  const {film, onMouseOverHandler} = props;

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={onMouseOverHandler}>
      <div className="small-film-card__image">
        <img src={film.filmCardInfo.posterImage} alt={film.filmCardInfo.name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.FilmsList}/${film.id}`}>{film.filmCardInfo.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
