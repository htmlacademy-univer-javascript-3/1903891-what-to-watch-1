import {createSlice} from '@reduxjs/toolkit';

import {AuthorizationStatus, NameSpace} from '../../const';
import {checkAuthAction, loginAction} from '../api-actions';

type DataPageState = {
  readonly authorizationStatus: AuthorizationStatus;
  readonly isDataLoading: boolean,
  readonly avatarUrl: string | null,
};


const initialState: DataPageState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
  avatarUrl: null
};

export const dataPageStore = createSlice({
  name: NameSpace.PageInfo,
  initialState,
  reducers: {
    changeAuthorizationStatus: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    putAvatarUrl: (state, action) => {
      state.avatarUrl = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.avatarUrl = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
    // .addCase(logoutAction.fulfilled, (state, action) => {
    //   state.authorizationStatus = AuthorizationStatus.NoAuth;
    //   state.avatarUrl = null
    // });
  }
});

export const {changeAuthorizationStatus} = dataPageStore.actions;
