import {Film} from '../types/film';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, RootState} from './store';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../const';
import {loadCommentsByID, loadFilmByID, loadFilms} from './film-list/film-list.action';
import {Comment} from '../types/comment';

export const fetchQuestionAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'data/fetchQuestions',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    dispatch(loadFilms(data));
  },
);

export const getFilmByID = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance,
}>(
  'data/getFilmByID',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Films}/${id}`);
    dispatch(loadFilmByID(data));
  },
);

export const getCommentsByID = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance,
}>(
  'data/getCommentsByID',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Comment[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadCommentsByID(data));
  },
);
