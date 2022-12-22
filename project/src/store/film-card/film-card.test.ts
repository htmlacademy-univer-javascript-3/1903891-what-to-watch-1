import {filmCardStore} from './film-card.reducer';
import {FilmCardInfo} from '../../const';
import {makeFakeCommentsByID, makeFakeFilmByID, makeFakePromoFilm, makeFakeSimilarFilmsByID} from '../../utils/moks';
import {getCommentsByID, getFilmByID, getPromoFilm, getSimilarFilmsByID, postNewCommentsByID} from '../api-actions';

const initialFilmCardState = {
  filmByID: undefined,
  commentsByID: [],
  tabsOnCard: FilmCardInfo.Overview,
  similarFilmsByID: [],
  ratingFilms: null,
  isDisabledFormComment: false,
};

const fakeFilmByID = makeFakeFilmByID();
const fakeCommentsByID = makeFakeCommentsByID();
const fakeSimilarFilmsByID = makeFakeSimilarFilmsByID();
const fakePromoFilm = makeFakePromoFilm();

describe('Reducer: film-card', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmCardStore.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialFilmCardState);
  });

  describe('Get data', () => {
    it('should get film by id', () => {
      const filmData = fakeFilmByID;
      expect(filmCardStore.reducer(initialFilmCardState, {type: getFilmByID.fulfilled.type, payload: filmData}))
        .toEqual({
          filmByID: filmData,
          commentsByID: [],
          tabsOnCard: FilmCardInfo.Overview,
          similarFilmsByID: [],
          ratingFilms: null,
          isDisabledFormComment: false,
        });
    });

    it('should get comments by id', () => {
      const comments = fakeCommentsByID;
      expect(filmCardStore.reducer(initialFilmCardState, {type: getCommentsByID.fulfilled.type, payload: comments}))
        .toEqual({
          filmByID: undefined,
          commentsByID: comments,
          tabsOnCard: FilmCardInfo.Overview,
          similarFilmsByID: [],
          ratingFilms: null,
          isDisabledFormComment: false,
        });
    });

    it('should get similar film by id', () => {
      const similarFilms = fakeSimilarFilmsByID;
      expect(filmCardStore.reducer(initialFilmCardState, {type: getSimilarFilmsByID.fulfilled.type, payload: similarFilms}))
        .toEqual({
          filmByID: undefined,
          commentsByID: [],
          tabsOnCard: FilmCardInfo.Overview,
          similarFilmsByID: similarFilms,
          ratingFilms: null,
          isDisabledFormComment: false,
        });
    });
  });

  describe('Change disabled form comment state', () => {
    it('should update isDisabledFormComment to "false" if postNewCommentsByID fulfilled', () => {
      expect(filmCardStore.reducer({
        filmByID: undefined,
        commentsByID: [],
        tabsOnCard: FilmCardInfo.Overview,
        similarFilmsByID: [],
        ratingFilms: null,
        isDisabledFormComment: true,
      }, {type: postNewCommentsByID.fulfilled.type}))
        .toEqual({
          filmByID: undefined,
          commentsByID: [],
          tabsOnCard: FilmCardInfo.Overview,
          similarFilmsByID: [],
          ratingFilms: null,
          isDisabledFormComment: false,
        });
    });

    it('should update isDisabledFormComment to "true" if postNewCommentsByID rejected', () => {
      expect(filmCardStore.reducer(initialFilmCardState, {type: postNewCommentsByID.rejected.type}))
        .toEqual({
          filmByID: undefined,
          commentsByID: [],
          tabsOnCard: FilmCardInfo.Overview,
          similarFilmsByID: [],
          ratingFilms: null,
          isDisabledFormComment: true,
        });
    });
  });

  it('should get promo film', () => {
    const promoFilm = fakePromoFilm;
    expect(filmCardStore.reducer(initialFilmCardState, {type: getPromoFilm.fulfilled.type, payload: promoFilm}))
      .toEqual({
        filmByID: promoFilm,
        commentsByID: [],
        tabsOnCard: FilmCardInfo.Overview,
        similarFilmsByID: [],
        ratingFilms: null,
        isDisabledFormComment: false,
      });
  });
});
