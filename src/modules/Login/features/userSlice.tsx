import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

interface IUserState {
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  id: number | null;
  role: string | null;
}

const initialState: IUserState = {
  id: null,
  first_name: null,
  last_name: null,
  email: null,
  role: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      return { ...state, ...action.payload };
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
export const selectUser = (state: RootState) => state.user;
