import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './components/app/app';
import ScrollTopOnMount from './components/scroll-top-on-mount/scroll-top-on-mount';
import {store} from './store/store';
import {checkAuthAction, fetchQuestionAction} from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchQuestionAction());
store.dispatch(checkAuthAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollTopOnMount/>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
