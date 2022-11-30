import {createSlice} from '@reduxjs/toolkit';
import {Film} from '../../types/film';

import {FilmCardInfo, NameSpace} from '../../const';
import {Comment} from '../../types/comment';
import {loadCommentsByID, loadFilmByID, loadSimilarFilmsByID} from './film-card.action';
import {postNewCommentsByID} from '../api-actions';

type FilmCardState = {
  readonly filmByID: Film | undefined,
  readonly commentsByID: Comment[],
  readonly tabsOnCard: FilmCardInfo,
  readonly similarFilmsByID: Film[],
  readonly ratingFilms: number | null,
  readonly isDisabledFormComment: boolean
};


const initialState: FilmCardState = {
  filmByID: undefined,
  commentsByID: [],
  tabsOnCard: FilmCardInfo.Overview,
  similarFilmsByID: [],
  ratingFilms: null,
  isDisabledFormComment: false,
};

export const filmCardStore = createSlice({
  name: NameSpace.FilmCard,
  initialState,
  reducers: {
    changeTabsCard: (state, action) => {
      state.tabsOnCard = action.payload;
    },
    setFilmDefault: (state, action) => {
      state.filmByID = action.payload;
    },
    setRatingFilms: (state, action) => {
      state.ratingFilms = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(loadFilmByID, (state, action) => {
        state.filmByID = action.payload;
      })
      .addCase(loadCommentsByID, (state, action) => {
        state.commentsByID = action.payload;
      })
      .addCase(loadSimilarFilmsByID, (state, action) => {
        state.similarFilmsByID = action.payload;
      })
      .addCase(postNewCommentsByID.fulfilled, (state, action) => {
        state.isDisabledFormComment = false;
        // if (state.filmByID !== undefined) {
        //   (redirectToRoute(`${AppRoute.FilmsList}/${state?.filmByID.id}`))
        // }
      })
      .addCase(postNewCommentsByID.rejected, (state) => {
        state.isDisabledFormComment = true;
      });
  }
});

export const {changeTabsCard, setFilmDefault, setRatingFilms} = filmCardStore.actions;
