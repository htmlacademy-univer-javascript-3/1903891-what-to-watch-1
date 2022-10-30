import {createSlice} from '@reduxjs/toolkit';
import {Film} from '../../types/film';

import {FilmCardInfo, NameSpace} from '../../const';
import {Comment} from '../../types/comment';
import {loadCommentsByID, loadFilmByID} from './film-card.action';

type FilmCardState = {
  readonly filmByID: Film | undefined,
  readonly commentsByID: Comment[],
  readonly tabsOnCard: FilmCardInfo
};


const initialState: FilmCardState = {
  filmByID: undefined,
  commentsByID: [],
  tabsOnCard: FilmCardInfo.Overview
};

export const filmCardStore = createSlice({
  name: NameSpace.FilmCard,
  initialState,
  reducers: {
    changeTabsCard: (state, action) => {
      state.tabsOnCard = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(loadFilmByID, (state, action) => {
        state.filmByID = action.payload;
      })
      .addCase(loadCommentsByID, (state, action) => {
        state.commentsByID = action.payload;
      });
  }
});

export const {changeTabsCard} = filmCardStore.actions;
