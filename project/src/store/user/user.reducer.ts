import {createSlice} from '@reduxjs/toolkit';

import {NameSpace} from '../../const';
import {getFavoriteFilms} from '../api-actions';
import {Film} from '../../types/film';

type UserState = {
  favoriteFilms: Film[]
};

const initialState: UserState = {
  favoriteFilms: []
};

export const userStore = createSlice({
  name: NameSpace.UserStore,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFavoriteFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      });
  }
});
