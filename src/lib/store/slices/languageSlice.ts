import { createSlice } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { RootState } from '../store';

interface LanguageState {
  currentLanguage: string;
}

const initialState: LanguageState = {
  currentLanguage: typeof window !== 'undefined' ? localStorage.getItem('language') || 'en' : 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.currentLanguage = action.payload;
      i18n.changeLanguage(state.currentLanguage);
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', state.currentLanguage);
      }
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const selectLanguage = (state: RootState) => state.language.currentLanguage;
export default languageSlice.reducer;
