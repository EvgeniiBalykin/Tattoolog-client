import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store/store';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    addChange: false,
  },
  reducers: {
    toggleAddChange: (state) => {
      state.addChange = !state.addChange;
    },
  },
});

export const { toggleAddChange } = profileSlice.actions;
export const addChangeValue = (state: RootState) => state.profile.addChange;

export default profileSlice.reducer;
