import {createReducer} from '@reduxjs/toolkit';
import {Film} from '../../types/film';

import {changeGenreAction, getFilterFilmsByGenre, getUniqGenreByFilms, loadCommentsByID, loadFilmByID, loadFilms} from './film-list.action';
import {AuthorizationStatus} from '../../const';
import {Genre} from '../../types/genre';
import {Comment} from '../../types/comment';

type FilmListState = {
  readonly genreList: Genre[]
  readonly currentGenre: string;
  readonly filmsByGenre: Film[];
  readonly films: Film[];
  readonly authorizationStatus: AuthorizationStatus;
  readonly filmByID: Film | undefined,
  readonly commentsByID: Comment[]
};


const initialState: FilmListState = {
  genreList: [],
  currentGenre: 'All genres',
  filmsByGenre: [],
  films: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  filmByID: undefined,
  commentsByID: []
};

export const filmListStore = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      const newGenre = action.payload;
      state.currentGenre = newGenre;
      if (newGenre === initialState.currentGenre) {
        state.filmsByGenre = initialState.filmsByGenre;
      } else {
        state.filmsByGenre = getFilterFilmsByGenre(newGenre, state.films);
      }
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.genreList = getUniqGenreByFilms(state.films);
    })
    .addCase(loadFilmByID, (state, action) => {
      state.filmByID = action.payload;
    })
    .addCase(loadCommentsByID, (state, action) => {
      state.commentsByID = action.payload;
    });
  // .addCase(getFilmsByGenreAction, (state) => {
  //   state.filmsByGenre = getFilterFilmsByGenre(state.genre, FULL_FILM_LIST);
  // });
});
