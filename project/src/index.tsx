import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {BrowserRouter} from 'react-router-dom';
import ScrollTopOnMount from './components/scroll-top-on-mount/scroll-top-on-mount';

const InfoFilmCard = {
  countCard: 20,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTopOnMount/>
      <App countCard={InfoFilmCard.countCard}/>
    </BrowserRouter>
  </React.StrictMode>,
);
