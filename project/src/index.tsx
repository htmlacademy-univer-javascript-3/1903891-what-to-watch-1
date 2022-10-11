import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {BrowserRouter} from 'react-router-dom';
import ScrollTopOnMount from './components/scroll-top-on-mount/scroll-top-on-mount';
import {FILMS} from './mocks/FILMS';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTopOnMount/>
      <App films={FILMS} /*comments={COMMENTS}*//>
    </BrowserRouter>
  </React.StrictMode>,
);
