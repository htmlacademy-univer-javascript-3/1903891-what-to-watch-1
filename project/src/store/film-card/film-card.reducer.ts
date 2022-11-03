import {createSlice} from '@reduxjs/toolkit';
import {Film} from '../../types/film';

import {FilmCardInfo, NameSpace} from '../../const';
import {Comment} from '../../types/comment';
import {loadCommentsByID, loadFilmByID, loadSimilarFilmsByID} from './film-card.action';

type FilmCardState = {
  readonly filmByID: Film | undefined,
  readonly commentsByID: Comment[],
  readonly tabsOnCard: FilmCardInfo,
  readonly similarFilmsByID: Film[],
  readonly ratingFilms: number,
  readonly newComment: string
};


const initialState: FilmCardState = {
  filmByID: undefined,
  commentsByID: [],
  tabsOnCard: FilmCardInfo.Overview,
  similarFilmsByID: [],
  ratingFilms: 0,
  newComment: '',
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
    },
    setNewComment: (state, action) => {
      state.newComment = action.payload;
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
      });
  }
});

export const {changeTabsCard, setFilmDefault} = filmCardStore.actions;
