import {configureStore} from '@reduxjs/toolkit';
import {filmListStore} from './film-list/film-list.reducer';
import {createAPI} from '../services/api';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    films: filmListStore,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
