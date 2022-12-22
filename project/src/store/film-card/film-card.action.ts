import {createAction} from '@reduxjs/toolkit';

export const FilmCardAction = {
  CHANGE_TABS_CARD: 'CHANGE_TABS_CARD',
};

export const getFilmsByGenreAction = createAction(FilmCardAction.CHANGE_TABS_CARD, (type: any) => ({payload: type}));
