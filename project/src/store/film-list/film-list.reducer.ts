import {createReducer} from '@reduxjs/toolkit';
import {Film} from '../../types/film';

import {FILMS} from '../../mocks/FILMS';
import {changeGenreAction, getFilterFilmsByGenre} from './film-list.action';

type FilmListState = {
  readonly genre: string;
  readonly filmsByGenre: Film[];
};

const FULL_FILM_LIST = FILMS;

const initialState: FilmListState = {
  genre: 'All genres',
  filmsByGenre: FULL_FILM_LIST,
};

export const filmListStore = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      const newGenre = action.payload;
      state.genre = newGenre;
      if (newGenre === initialState.genre) {
        state.filmsByGenre = initialState.filmsByGenre;
      } else {
        state.filmsByGenre = getFilterFilmsByGenre(newGenre, FULL_FILM_LIST);
      }
    });
  // .addCase(getFilmsByGenreAction, (state) => {
  //   state.filmsByGenre = getFilterFilmsByGenre(state.genre, FULL_FILM_LIST);
  // });
});
