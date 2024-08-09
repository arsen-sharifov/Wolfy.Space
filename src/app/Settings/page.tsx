'use client';

import React from 'react';
import withAuth from '../../components/with-auth';
import { useSettings } from './useSettings';

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
      <div className="w-[85vw] space-y-8">
        <div className="mb-8 rounded-lg bg-white p-6 text-text-color shadow-lg">
          <div className="mb-4 flex items-center">
            <img
              src="/avatar.png"
              alt="Avatar"
              className="mr-4 h-24 w-24 rounded-full bg-blue-500"
            />
            <div className="space-y-2">
              <button className="rounded bg-secondary-color px-4 py-2 text-text-color">
                {t('ChangeAvatar')}
              </button>
              <button className="rounded bg-secondary-color px-4 py-2 text-text-color">
                {t('ChangeBackground')}
              </button>
            </div>
          </div>
          <hr className="my-4" />
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-1/2 text-lg">Jafry Goodman</div>
              <button className="ml-4 rounded bg-secondary-color px-4 py-2 text-text-color">
                {t('ChangeName')}
              </button>
            </div>
            <div className="flex items-center">
              <div className="w-1/2 text-lg">lorem ipsum ....</div>
              <button className="ml-4 rounded bg-secondary-color px-4 py-2 text-text-color">
                {t('ChangeDescription')}
              </button>
            </div>
            <div className="flex items-center">
              <div className="w-1/2 text-lg">jafry@gmail.com</div>
              <button className="ml-4 rounded bg-secondary-color px-4 py-2 text-text-color">
                {t('ChangeMail')}
              </button>
            </div>
            <div className="flex items-center">
              <div className="w-1/2 text-lg">**********</div>
              <button className="ml-4 rounded bg-secondary-color px-4 py-2 text-text-color">
                {t('ChangePass')}
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 text-text-color shadow-lg">
          <h2 className="mb-4 text-xl font-bold">{t('SettingsCustomization')}</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-1/2 text-lg">{t('Theme')}</div>
              <div className="relative inline-block text-left">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-secondary-color px-4 py-2 text-sm font-medium text-text-color shadow-sm hover:bg-gray-50 focus:outline-none"
                  onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                >
                  {t('ChangeTheme')}
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
                {themeDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                  >
                    <div className="py-1" role="none">
                      {THEMES.map((theme) => (
                        <button
                          key={theme.value}
                          onClick={() => changeTheme(theme.value)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                          tabIndex={-1}
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
            <div className="flex items-center">
              <div className="w-1/2 text-lg">{t('Language')}</div>
              <div className="relative inline-block text-left">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-secondary-color px-4 py-2 text-sm font-medium text-text-color shadow-sm hover:bg-gray-50 focus:outline-none"
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                >
                  {t('ChangeLanguage')}
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
                {languageDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                  >
                    <div className="py-1" role="none">
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.value}
                          onClick={() => changeLanguage(lang.value)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                          tabIndex={-1}
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
    </div>
  );
};

export default withAuth(SettingsPage);
