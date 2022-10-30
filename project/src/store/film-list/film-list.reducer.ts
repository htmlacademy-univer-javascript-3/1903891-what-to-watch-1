import {createSlice} from '@reduxjs/toolkit';
import {Film} from '../../types/film';

import {getFilterFilmsByGenre, getUniqGenreByFilms, loadFilms} from './film-list.action';
import {AuthorizationStatus, NameSpace} from '../../const';
import {Genre} from '../../types/genre';

type FilmListState = {
  readonly genreList: Genre[]
  readonly currentGenre: string;
  readonly filmsByGenre: Film[];
  readonly films: Film[];
  readonly authorizationStatus: AuthorizationStatus;
};


const initialState: FilmListState = {
  genreList: [],
  currentGenre: 'All genres',
  filmsByGenre: [],
  films: [],
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const filmListStore = createSlice({
  name: NameSpace.FilmList,
  initialState,
  reducers: {
    changeGenreAction: (state, action) => {
      const newGenre = action.payload;
      state.currentGenre = newGenre;
      if (newGenre === 'All genres') {
        state.filmsByGenre = state.films;
      } else {
        state.filmsByGenre = getFilterFilmsByGenre(newGenre, state.films);
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(loadFilms, (state, action) => {
        state.films = action.payload;
        state.filmsByGenre = state.films;
        state.genreList = getUniqGenreByFilms(state.films);
      });
  }
});

export const {changeGenreAction} = filmListStore.actions;
