import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {filmListStore} from './film-list/film-list.reducer';
import {filmCardStore} from './film-card/film-card.reducer';
import {dataPageStore} from './data-page/data-page.reducer';

export const rootReducer = combineReducers({
  [NameSpace.FilmList]: filmListStore.reducer,
  [NameSpace.FilmCard]: filmCardStore.reducer,
  [NameSpace.PageInfo]: dataPageStore.reducer
});
