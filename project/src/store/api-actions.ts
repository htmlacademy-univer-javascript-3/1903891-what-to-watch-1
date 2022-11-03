import {Film} from '../types/film';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, RootState} from './store';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../const';
import {Comment} from '../types/comment';
import {loadCommentsByID, loadFilmByID, loadSimilarFilmsByID} from './film-card/film-card.action';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/userData';
import {NewCommentData} from '../types/new-comment-data';


export const fetchQuestionAction = createAsyncThunk<Film[], undefined, {
  state: RootState,
  extra: AxiosInstance
}>(
  'data/fetchQuestions',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    return data;
  },
);

export const getFilmByID = createAsyncThunk<void, number | undefined, {
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

export const getCommentsByID = createAsyncThunk<void, number | undefined, {
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

export const postNewCommentsByID = createAsyncThunk<void, NewCommentData, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance,
}>(
  'comment/postNewCommentsByID',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    await api.post<Comment>(`${APIRoute.Comments}/${id}`, {
      comment: comment,
      rating: rating
    });
  },
);

export const getSimilarFilmsByID = createAsyncThunk<void, number | undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance,
}>(
  'data/getSimilarFilmsByID',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`);
    dispatch(loadSimilarFilmsByID(data));
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance,
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: userData} = await api.post<UserData>(APIRoute.Login, {email, password});
    return userData;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance,
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data: userData} = await api.get(APIRoute.Login);
    return userData;
  },
);
