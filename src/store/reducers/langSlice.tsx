import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/store';

interface ILangState {
  language: string;
}

const initialState: ILangState = {
  language: localStorage.getItem('selectedLanguage') || 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<ILangState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
export const selectLanguage = (state: RootState) => state.language;
