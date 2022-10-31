import {createSlice} from '@reduxjs/toolkit';
import {Film} from '../../types/film';

import {getFilterFilmsByGenre, getUniqGenreByFilms} from './film-list.action';
import {NameSpace} from '../../const';
import {Genre} from '../../types/genre';
import {fetchQuestionAction} from '../api-actions';

type FilmListState = {
  readonly genreList: Genre[]
  readonly currentGenre: string;
  readonly filmsByGenre: Film[];
  readonly films: Film[];
  readonly isDataFilmListLoading: boolean
};


const initialState: FilmListState = {
  genreList: [],
  currentGenre: 'All genres',
  filmsByGenre: [],
  films: [],
  isDataFilmListLoading: true
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
        if (state.films !== undefined) {
          state.filmsByGenre = getFilterFilmsByGenre(newGenre, state.films);
        }
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestionAction.pending, (state, action) => {
        state.isDataFilmListLoading = true;
      })
      .addCase(fetchQuestionAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.filmsByGenre = state.films;
        if (state.films !== undefined) {
          state.genreList = getUniqGenreByFilms(state.films);
        }
        state.isDataFilmListLoading = false;
      });
  }
});

export const {changeGenreAction} = filmListStore.actions;
