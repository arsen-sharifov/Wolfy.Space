import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { THEMES, LANGUAGES } from './constants';

export const useSettings = () => {
  const { t, i18n } = useTranslation('common');

  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    setThemeDropdownOpen(false);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
    setLanguageDropdownOpen(false);
  };

  return {
    t,
    themeDropdownOpen,
    setThemeDropdownOpen,
    languageDropdownOpen,
    setLanguageDropdownOpen,
    changeTheme,
    changeLanguage,
    theme,
    THEMES,
    LANGUAGES,
  };
};
