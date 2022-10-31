import {Link, useNavigate} from 'react-router-dom';
import {Film} from '../../types/film';
import {AppRoute, FilmCardInfo} from '../../const';
import PreviewVideoPlayer from '../video-player/preview-video-player';
import {useState} from 'react';
import {getCommentsByID, getFilmByID} from '../../store/api-actions';
import store from '../../store/store';
import {useAppDispatch} from '../../hooks/hooks-toolkit';
import {changeTabsCard} from '../../store/film-card/film-card.reducer';

type FilmCardProps = {
  film: Film,
}

function FilmCard(props: FilmCardProps) {
  const {film} = props;
  const [activeFilmCard, setActiveFilmCard] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function onMouseOverHandler() {
    setActiveFilmCard(true);
  }

  function onMouseLeaveHandler() {
    setActiveFilmCard(false);
  }

  function onClickCard() {
    store.dispatch(getFilmByID(film.id))
      .then(() => {
        store.dispatch(getCommentsByID(film.id))
          .then(() => {
            dispatch(changeTabsCard(FilmCardInfo.Overview));
            navigate(`${AppRoute.FilmsList}/${film.id}`);
          });

      });
  }

  return (
    <article onClick={onClickCard} className="small-film-card catalog__films-card" onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler}>
      <div className="small-film-card__image">
        {
          activeFilmCard ? (<PreviewVideoPlayer videoLink={film.previewVideoLink} posterImage={film.posterImage} isSound={false}/>)
            : (<img src={film.previewImage} alt={film.name} width="280" height="175"/>)

        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.FilmsList}/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
