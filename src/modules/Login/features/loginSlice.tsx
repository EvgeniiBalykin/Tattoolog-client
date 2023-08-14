import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { RootState } from 'redux/store';

export interface LoginState {
  name: string | null;
  token: string | null;
}

const initialState: LoginState = {
  name: null,
  token: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ name: string; token: string }>
    ) => {
      const user = {
        name: action.payload.name,
        token: action.payload.token,
      };

      Cookies.set('user', JSON.stringify(user));

      state.name = user.name;
      state.token = user.token;
    },
    logoutUser: (state) => {
      Cookies.remove('user');
      state.name = null;
      state.token = null;
    },
  },
});

export const { setUser, logoutUser } = loginSlice.actions;

export default loginSlice.reducer;

export const selectLogin = (state: RootState) => state.login;
