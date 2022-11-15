import React from 'react';
import FilmCardNav from '../film-card-nav/film-card-nav';
import FilmScreenOverview from '../film-screen-overview/film-screen-overview';
import FilmScreenDetails from '../film-screen-details/film-screen-details';
import FilmScreenReviews from '../film-screen-reviews/film-screen-reviews';
import {useAppSelector} from '../../hooks/hooks-toolkit';

const FilmCardInfoFilmScreen = {
  'Overview': <FilmScreenOverview/>,
  'Details': <FilmScreenDetails/>,
  'Reviews': <FilmScreenReviews/>
};

function DescriptionFilmsWithNav() {
  const tabsOnCard = useAppSelector((state) => state.filmCard.tabsOnCard);

  return (
    <div className="film-card__desc">
      <FilmCardNav/>
      {FilmCardInfoFilmScreen[tabsOnCard]}
    </div>
  );
}

export default DescriptionFilmsWithNav;
