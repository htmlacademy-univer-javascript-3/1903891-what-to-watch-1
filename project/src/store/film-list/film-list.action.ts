import {createAction} from '@reduxjs/toolkit';
import {Film} from '../../types/film';

export const FilmListAction = {
  CHANGE_GENRE: 'CHANGE_GENRE',
  GET_FILMS_BY_GENRE: 'GET_FILMS_BY_GENRE',
};

export const changeGenreAction = createAction(FilmListAction.CHANGE_GENRE, (genre) => ({payload: genre}));

export const getFilmsByGenreAction = createAction(FilmListAction.GET_FILMS_BY_GENRE, (filmList: Film[]) => ({payload: filmList}));

// export const addSomeValueAction = createAction(FilmListAction.ADD_SOME_VALUE, (value) => {
//   return {
//     payload: value,
//     currentTime: new Date().getTime(),
//   };
// });

export function getFilterFilmsByGenre(genre: string, filmList: Film[]): Film[] {
  return filmList.filter((filmItem) => filmItem.filmCardInfo.genre === genre);
}

