import {changeGenreAction, filmListStore} from './film-list.reducer';
import {makeFakeFilmsList} from '../../utils/moks';
import {fetchQuestionAction} from '../api-actions';

const initialFilmListState = {
  genreList: [],
  currentGenre: 'All genres',
  filmsByGenre: [],
  films: [],
  isDataFilmListLoading: true
};

const fakeFilmList = makeFakeFilmsList();

describe('Reducer: film-list', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmListStore.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialFilmListState);
  });

  describe('action with genre film', () => {
    it('payload === "All genres" filmsByGenre should be equal films', () => {
      expect(filmListStore.reducer({
        genreList: [],
        currentGenre: 'Drama',
        filmsByGenre: [],
        films: fakeFilmList,
        isDataFilmListLoading: true
      }, changeGenreAction('All genres')))
        .toEqual({
          genreList: [],
          currentGenre: 'All genres',
          filmsByGenre: fakeFilmList,
          films: fakeFilmList,
          isDataFilmListLoading: true
        });
    });

    it('payload === "Comedy" filmsByGenre should correct', () => {
      const genreTest = 'Comedy';
      const wrongGenreQuestionAnswer = fakeFilmList
        .filter((film) => film.genre === genreTest);
      expect(filmListStore.reducer({
        genreList: [],
        currentGenre: 'Drama',
        filmsByGenre: [],
        films: fakeFilmList,
        isDataFilmListLoading: true
      }, changeGenreAction(genreTest)))
        .toEqual({
          genreList: [],
          currentGenre: genreTest,
          filmsByGenre: wrongGenreQuestionAnswer,
          films: fakeFilmList,
          isDataFilmListLoading: true
        });
    });

    it('a test genre that is not in the list of films must be empty films by genre', () => {
      const genreTest = 'Abs';
      expect(filmListStore.reducer({
        genreList: [],
        currentGenre: 'Drama',
        filmsByGenre: fakeFilmList,
        films: fakeFilmList,
        isDataFilmListLoading: true
      }, changeGenreAction(genreTest)))
        .toEqual({
          genreList: [],
          currentGenre: genreTest,
          filmsByGenre: [],
          films: fakeFilmList,
          isDataFilmListLoading: true
        });
    });
  });

  describe('action with requests on question ', () => {
    it('isDataFilmListLoading === true when fetchQuestionAction pending', () => {
      expect(filmListStore.reducer({
        genreList: [],
        currentGenre: 'All genres',
        filmsByGenre: [],
        films: [],
        isDataFilmListLoading: false
      }, {type: fetchQuestionAction.pending.type}))
        .toEqual(initialFilmListState);
    });

    it('when fetchQuestionAction fulfilled should be create uniq genre list from film list', () => {
      const genreFilmList: string[] = [];
      fakeFilmList.map((film) => genreFilmList.push(film.genre));
      const correctUniqGenres = [...new Set(genreFilmList)];
      const genres = correctUniqGenres.map((genre, id) => ({genre: genre, id: id}));
      const correctGenres = [{genre: 'All genres', id: -1}, ...genres];

      expect(filmListStore.reducer(initialFilmListState, {type: fetchQuestionAction.fulfilled.type, payload: fakeFilmList}))
        .toEqual({
          genreList: correctGenres,
          currentGenre: 'All genres',
          filmsByGenre: fakeFilmList,
          films: fakeFilmList,
          isDataFilmListLoading: false
        });
    });
  });
});
