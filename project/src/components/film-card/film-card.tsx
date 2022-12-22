import {Link, useNavigate} from 'react-router-dom';
import {Film} from '../../types/film';
import {AppRoute} from '../../const';
import {memo, useState} from 'react';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film,
}

function FilmCard(props: FilmCardProps) {
  const {film} = props;
  const [activeFilmCard, setActiveFilmCard] = useState(false);
  const navigate = useNavigate();

  function handleOverMouse() {
    setActiveFilmCard(true);
  }

  function handleLeaveMouse() {
    setActiveFilmCard(false);
  }

  function handleClickCard() {
    navigate(`${AppRoute.FilmsList}/${film.id}`);
  }

  return (
    <article onClick={handleClickCard} className="small-film-card catalog__films-card" onMouseOver={handleOverMouse} onMouseLeave={handleLeaveMouse}>
      <div className="small-film-card__image">
        {
          activeFilmCard ? (<VideoPlayer videoLink={film.previewVideoLink} posterImage={film.posterImage} isSound={false}/>)
            : (<img src={film.previewImage} alt={film.name} width="280" height="175"/>)
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.FilmsList}/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default memo(FilmCard);
