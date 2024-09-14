import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ThemeState {
  currentTheme: string;
}

const initialState: ThemeState = {
  currentTheme: typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
      if (typeof window !== 'undefined') {
        document.documentElement.setAttribute('data-theme', state.currentTheme);
        localStorage.setItem('theme', state.currentTheme);
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.currentTheme;
export default themeSlice.reducer;
