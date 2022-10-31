import {createSlice} from '@reduxjs/toolkit';

import {AuthorizationStatus, NameSpace} from '../../const';

type DataPageState = {
  readonly authorizationStatus: AuthorizationStatus;
  readonly isDataLoading: boolean
};


const initialState: DataPageState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: true
};

export const dataPageStore = createSlice({
  name: NameSpace.FilmCard,
  initialState,
  reducers: {
    changeAuthorizationStatus: (state, action) => {
      state.authorizationStatus = action.payload;
    }
  }
});

export const {changeAuthorizationStatus} = dataPageStore.actions;
