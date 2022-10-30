import {FilmCardInfo} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-toolkit';
import {changeTabsCard} from '../../store/film-card/film-card.reducer';

function FilmCardNav() {
  const dispatch = useAppDispatch();
  const tabsOnCard = useAppSelector((state) => state.filmCard.tabsOnCard);

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${tabsOnCard === FilmCardInfo.Overview ? 'film-nav__item--active' : ''}`}>
          <div onClick={() => dispatch(changeTabsCard(FilmCardInfo.Overview))} className="film-nav__link">Overview</div>
        </li>
        <li className={`film-nav__item ${tabsOnCard === FilmCardInfo.Details ? 'film-nav__item--active' : ''}`}>
          <div onClick={() => dispatch(changeTabsCard(FilmCardInfo.Details))} className="film-nav__link">Details</div>
        </li>
        <li className={`film-nav__item ${tabsOnCard === FilmCardInfo.Reviews ? 'film-nav__item--active' : ''}`}>
          <div onClick={() => dispatch(changeTabsCard(FilmCardInfo.Reviews))} className="film-nav__link">Reviews</div>
        </li>
      </ul>
    </nav>
  );
}

export default FilmCardNav;
