import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { RootState } from '@store/store';

export interface LoginState {
  token: string | null;
  refreshToken: string | null;
}

const initialState: LoginState = {
  token: Cookies?.get('accessToken') || null,
  refreshToken: Cookies?.get('refreshToken') || null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setToken: (
      state,
      action: PayloadAction<{
        token: string | null;
        refreshToken: string | null;
      }>
    ) => {
      Cookies.set('accessToken', JSON.stringify(action.payload.token));
      Cookies.set('refreshToken', JSON.stringify(action.payload.refreshToken));
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    logoutUser: (state) => {
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');
      state.token = null;
      state.refreshToken = null;
    },
  },
});

export const { setToken, logoutUser } = loginSlice.actions;

export default loginSlice.reducer;

export const selectLogin = (state: RootState) => state.login;
