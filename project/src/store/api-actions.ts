import {Film} from '../types/film';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, RootState} from './store';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute} from '../const';
import {Comment} from '../types/comment';
import {loadCommentsByID, loadFilmByID} from './film-card/film-card.action';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/userData';
import {saveToken} from '../services/token';
import {useNavigate} from 'react-router-dom';

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

export const loginAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance,
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: userData} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(userData.token);
    const navigate = useNavigate();
    navigate(AppRoute.MyList);
    return userData.avatarUrl;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance,
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  },
);
