import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import {rootReducer} from './rootReducer';
import {redirect} from './middleware/redirect';


export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
