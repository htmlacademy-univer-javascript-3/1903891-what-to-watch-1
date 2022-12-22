import {Link} from 'react-router-dom';
import SvgGeneralScreen from '../../svg/svg-general-screen.svg';
import '../../css/main.min.css';
import {AppRoute, AuthorizationStatus} from '../../const';
import { useAppSelector} from '../../hooks/hooks-toolkit';
import ButtonMyList from '../button-my-list/button-my-list';

function FilmCardButton() {
  const film = useAppSelector((state) => state.filmCard.filmByID);
  const statusUser = useAppSelector((state) => state.dataPage.authorizationStatus);

  return (
    <div className="film-card__buttons">
      <Link to={`${AppRoute.Player}/${film?.id}`} className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref={`${SvgGeneralScreen}#play-s`}/>
        </svg>
        <span>Play</span>
      </Link>
      <ButtonMyList/>
      {
        statusUser === AuthorizationStatus.Auth &&
        <Link to={`${AppRoute.FilmsList}/${film?.id}${AppRoute.AddReview}`} className="btn film-card__button">Add review</Link>
      }
    </div>
  );
}

export default FilmCardButton;
