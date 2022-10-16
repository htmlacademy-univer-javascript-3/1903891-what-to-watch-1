import {configureStore} from '@reduxjs/toolkit';
import {filmListStore} from './film-list/film-list.reducer';

export const store = configureStore({
  reducer: {
    films: filmListStore,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
