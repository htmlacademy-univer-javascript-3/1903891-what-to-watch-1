import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {AppRoute, AuthorizationStatus, FilmFavoriteStatus} from '../../const';
import SvgGeneralScreen from '../../svg/svg-general-screen.svg';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-toolkit';
import {postNewStatusFilmInFavoriteList} from '../../store/api-actions';

function ButtonMyList() {
  const statusUser = useAppSelector((state) => state.dataPage.authorizationStatus);
  const film = useAppSelector((state) => state.filmCard.filmByID);
  const favoriteFilms = useAppSelector((state) => state.user.favoriteFilms);
  const [isChosenFavorite, setIsChosenFavorite] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (film !== undefined) {
      const statusCurrentFilm = favoriteFilms.find((filmItem) => filmItem.id === film.id);
      statusCurrentFilm === undefined ? setIsChosenFavorite(false) : setIsChosenFavorite(true);
    }
  }, []);

  const onAddInFavorite = () => {
    dispatch(postNewStatusFilmInFavoriteList({
      filmStatus: FilmFavoriteStatus.Add,
      filmId: film!.id.toString()
    }));
    setIsChosenFavorite(true);
  };

  const handleClickToggleStatusFavorite = () => {
    if (film !== undefined) {
      isChosenFavorite
        ? onDeleteInFavorite()
        : onAddInFavorite();
    }
  };

  const onDeleteInFavorite = () => {
    dispatch(postNewStatusFilmInFavoriteList({
      filmStatus: FilmFavoriteStatus.Delete,
      filmId: film!.id.toString()
    }));
    setIsChosenFavorite(false);
  };

  return (
    <>
      {
        statusUser !== AuthorizationStatus.Auth && (
          <Link to={`${AppRoute.Login}`} className="btn btn--list film-card__button" type="button">
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref={`${SvgGeneralScreen}#add`}/>
            </svg>
            <span>My list</span>
            {/*<span className="film-card__count">9</span>*/}
          </Link>
        )
      }
      {statusUser === AuthorizationStatus.Auth && (
        <a
          className="btn btn--list film-card__button"
          type="button"
          onClick={handleClickToggleStatusFavorite}
        >
          {!isChosenFavorite
            ? (
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref={`${SvgGeneralScreen}#add`}/>
              </svg>
            ) : (
              <svg viewBox="0 0 18 14" width="18" height="14">
                <use xlinkHref={`${SvgGeneralScreen}#in-list`}/>
              </svg>
            )}
          <span style={{display: 'block'}}>My list</span>
          <span className="film-card__count">{favoriteFilms.length}</span>
        </a>
      )}
    </>
  );
}

export default ButtonMyList;
