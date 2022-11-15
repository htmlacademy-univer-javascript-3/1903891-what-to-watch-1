import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
import {rootReducer} from '../rootReducer';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === 'user/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
