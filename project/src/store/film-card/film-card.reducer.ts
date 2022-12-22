import {createSlice} from '@reduxjs/toolkit';
import {Film} from '../../types/film';

import {FilmCardInfo, NameSpace} from '../../const';
import {Comment} from '../../types/comment';
import {getCommentsByID, getFilmByID, getPromoFilm, getSimilarFilmsByID, postNewCommentsByID} from '../api-actions';
import {toast} from 'react-toastify';

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
      .addCase(getFilmByID.fulfilled, (state, action) => {
        state.filmByID = action.payload;
      })
      .addCase(getCommentsByID.fulfilled, (state, action) => {
        state.commentsByID = action.payload;
      })
      .addCase(getSimilarFilmsByID.fulfilled, (state, action) => {
        state.similarFilmsByID = action.payload;
      })
      .addCase(postNewCommentsByID.fulfilled, (state, action) => {
        state.isDisabledFormComment = false;
      })
      .addCase(postNewCommentsByID.rejected, (state) => {
        state.isDisabledFormComment = true;
        toast.warn('У нас технические плюшки, отправьте комментарий позже.');
      })
      .addCase(getPromoFilm.fulfilled, (state, action) => {
        state.filmByID = action.payload;
      });
  }
});

export const {changeTabsCard, setFilmDefault, setRatingFilms} = filmCardStore.actions;
