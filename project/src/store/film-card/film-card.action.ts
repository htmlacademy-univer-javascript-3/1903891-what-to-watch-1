import {createAction} from '@reduxjs/toolkit';
import {Film} from '../../types/film';
import {Comment} from '../../types/comment';

export const FilmCardAction = {
  CHANGE_TABS_CARD: 'CHANGE_TABS_CARD',
};

export const loadFilmByID = createAction<Film>('data/getFilmByID');

export const loadCommentsByID = createAction<Comment[]>('data/getCommentsByID');

export const loadSimilarFilmsByID = createAction<Film[]>('data/getSimilarFilmsByID');

export const getFilmsByGenreAction = createAction(FilmCardAction.CHANGE_TABS_CARD, (type: any) => ({payload: type}));
