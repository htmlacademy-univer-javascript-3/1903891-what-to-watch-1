import {createAction} from '@reduxjs/toolkit';
import {Film} from '../../types/film';
import {Genre} from '../../types/genre';

export const FilmListAction = {
  CHANGE_GENRE: 'CHANGE_GENRE',
  GET_FILMS_BY_GENRE: 'GET_FILMS_BY_GENRE',
};

export const getFilmsByGenreAction = createAction(FilmListAction.GET_FILMS_BY_GENRE, (filmList: Film[]) => ({payload: filmList}));

export function getFilterFilmsByGenre(genre: string, filmList: Film[]): Film[] {
  return filmList.filter((filmItem) => filmItem.genre === genre);
}

export function getUniqGenreByFilms(filmList: Film[]): Genre[] {
  const genreFilmList: string[] = [];
  filmList.map((film) => genreFilmList.push(film.genre));
  const uniqGenres = [...new Set(genreFilmList)];
  const genres = uniqGenres.map((genre, id) => ({genre: genre, id: id}));

  return [{genre: 'All genres', id: -1}, ...genres];
}
