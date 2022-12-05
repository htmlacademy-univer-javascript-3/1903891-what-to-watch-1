import {createSlice} from '@reduxjs/toolkit';

import {AuthorizationStatus, NameSpace} from '../../const';
import {checkAuthAction, getFilmByID, loginAction, logoutAction} from '../api-actions';

type DataPageState = {
  readonly authorizationStatus: AuthorizationStatus;
  readonly isDataLoading: boolean,
  readonly avatarUrl: string | null,
  readonly error: null | string
};

const initialState: DataPageState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
  avatarUrl: null,
  error: null
};

export const dataPageStore = createSlice({
  name: NameSpace.PageInfo,
  initialState,
  reducers: {
    changeAuthorizationStatus: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.avatarUrl = action.payload.avatarUrl;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.avatarUrl = action.payload.avatarUrl;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.avatarUrl = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(getFilmByID.pending, (state, action) => {
        state.isDataLoading = false;
      })
      .addCase(getFilmByID.fulfilled, (state, action) => {
        state.isDataLoading = true;
      })
      .addCase(getFilmByID.rejected, (state, action) => {
        state.isDataLoading = true;
      });
  }
});

export const {changeAuthorizationStatus, setError} = dataPageStore.actions;
