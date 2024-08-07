'use client';

import React from 'react';
import withAuth from '../../components/with-auth';
import { useSettings } from './useSettigns';

const SettingsPage = () => {
  const {
    t,
    themeDropdownOpen,
    setThemeDropdownOpen,
    languageDropdownOpen,
    setLanguageDropdownOpen,
    changeTheme,
    changeLanguage,
    THEMES,
    LANGUAGES,
  } = useSettings();

  return (
    <div className="flex min-h-screen justify-center bg-bg-color p-6">
      <div className="w-[85vw]">
        <div className="mb-8 rounded-lg bg-primary-color p-6 text-text-color shadow-lg">
          <h2 className="font mb-4 text-xl">{t('SettingsGeneral')}</h2>
          <div className="items-c mb-6 flex">
            <img src="/avatar.png" alt="Avatar" className="mr-4 h-24 w-24 rounded-full" />
            <button className="ml-4 rounded bg-secondary-color px-4 py-2 text-text-color">
              {t('ChangeAvatar')}
            </button>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">Jafry Goodman</div>
            <button className="ml-4 rounded bg-secondary-color px-4 py-2 text-text-color">
              {t('ChangeName')}
            </button>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">lorem ipsum ....</div>
            <button className="ml-4 rounded bg-secondary-color px-4 py-2 text-text-color">
              {t('ChangeDescription')}
            </button>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">jafry@gmail.com</div>
            <button className="ml-4 rounded bg-secondary-color px-4 py-2 text-text-color">
              {t('ChangeMail')}
            </button>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">**********</div>
            <button className="ml-4 rounded bg-secondary-color px-4 py-2 text-text-color">
              {t('ChangePass')}
            </button>
          </div>
        </div>
        <div className="rounded-lg bg-primary-color p-6 text-text-color shadow-lg">
          <h2 className="mb-4 text-xl font-bold">{t('SettingsCustomization')}</h2>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">{t('Theme')}</div>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="border-primary-border-color inline-flex w-full justify-center rounded-md border bg-secondary-color px-4 py-2 text-sm font-medium text-text-color shadow-sm"
                  id="theme-menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                >
                  {t('SelectTheme')}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {themeDropdownOpen && (
                <div
                  className="ring-secondary-color absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-primary-color shadow-lg ring-1 ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="theme-menu-button"
                >
                  <div className="py-1" role="none">
                    {THEMES.map((theme) => (
                      <button
                        key={theme.value}
                        onClick={() => changeTheme(theme.value)}
                        className="hover:bg-primary-hover-color flex w-full items-center px-4 py-2 text-sm text-text-color"
                        role="menuitem"
                      >
                        <span
                          className="mr-2 block h-4 w-4 rounded-full"
                          style={{ backgroundColor: theme.color }}
                        ></span>
                        {theme.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">{t('Language')}</div>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="border-primary-border-color inline-flex w-full justify-center rounded-md border bg-secondary-color px-4 py-2 text-sm font-medium text-text-color shadow-sm"
                  id="language-menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                >
                  {t('SelectLanguage')}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {languageDropdownOpen && (
                <div
                  className="ring-secondary-color absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-primary-color shadow-lg ring-1 ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="language-menu-button"
                >
                  <div className="py-1" role="none">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.value}
                        onClick={() => changeLanguage(lang.value)}
                        className="hover:bg-primary-hover-color flex w-full items-center px-4 py-2 text-sm text-text-color"
                        role="menuitem"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(SettingsPage);
