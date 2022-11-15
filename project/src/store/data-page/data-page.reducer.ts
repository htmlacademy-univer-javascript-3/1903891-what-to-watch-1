import {createSlice} from '@reduxjs/toolkit';

import {AuthorizationStatus, NameSpace} from '../../const';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';

type DataPageState = {
  readonly authorizationStatus: AuthorizationStatus;
  readonly isDataLoading: boolean,
  readonly avatarUrl: string | null,
};

const initialState: DataPageState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
  avatarUrl: null,
};

export const dataPageStore = createSlice({
  name: NameSpace.PageInfo,
  initialState,
  reducers: {
    changeAuthorizationStatus: (state, action) => {
      state.authorizationStatus = action.payload;
    }
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
      });
  }
});

export const {changeAuthorizationStatus} = dataPageStore.actions;
