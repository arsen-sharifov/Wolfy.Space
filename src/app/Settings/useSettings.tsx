import { useAppDispatch, useAppSelector } from '../../lib/store/hooks';
import { setTheme, selectTheme } from '../../lib/store/slices/themeSlice';
import { setLanguage, selectLanguage } from '../../lib/store/slices/languageSlice';
import { useTranslation } from 'react-i18next';
import { THEMES, LANGUAGES } from './constants';

export const useSettings = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const language = useAppSelector(selectLanguage);
  const { t } = useTranslation('common');

  const changeTheme = (newTheme: string) => {
    dispatch(setTheme(newTheme));
  };

  const changeLanguage = (lang: string) => {
    dispatch(setLanguage(lang));
  };

  return {
    t,
    changeTheme,
    changeLanguage,
    theme,
    language,
    THEMES,
    LANGUAGES,
  };
};
