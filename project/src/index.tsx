import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './components/app/app';
import ScrollTopOnMount from './components/scroll-top-on-mount/scroll-top-on-mount';
import {FILMS} from './mocks/FILMS';
import {store} from './store/store';
import {Genre} from './types/genre';
import {Film} from './types/film';
import {COMMENTS} from './mocks/COMMENTS';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

function getUniqGenreByFilms(filmList: Film[]): Genre[] {
  const genreFilmList: string[] = [];
  filmList.map((film) => genreFilmList.push(film.filmCardInfo.genre));
  const uniqGenres = [...new Set(genreFilmList)];
  const genres = uniqGenres.map((genre, id) => ({genre: genre, id: id}));

  return [{genre: 'All genres', id: 52105522456}, ...genres];
}

const GENRES: Genre[] = getUniqGenreByFilms(FILMS);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollTopOnMount/>
        <App films={FILMS} genres={GENRES} comments={COMMENTS}/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
