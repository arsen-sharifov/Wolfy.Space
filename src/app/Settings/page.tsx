'use client';
import React, { useEffect, useState } from 'react';

const SettingsPage = () => {
  const themes = [
    { name: 'Default', value: 'root', color: '#2563EB' },
    { name: 'Light', value: 'light', color: '#e8e8e8' },
    { name: 'Dark', value: 'dark', color: '#121212' },
    { name: 'Lavender', value: 'lavender', color: '#9370db' },
    { name: 'Forest', value: 'forest', color: '#4caf50' },
    { name: 'Orange', value: 'orange', color: '#fb8c00' },
    { name: 'Pink', value: 'pink', color: '#f8bbd0' },
    { name: 'Aquamarine', value: 'aquamarine', color: '#00acc1' },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const changeTheme = (newTheme: any) => {
    setTheme(newTheme);
    setDropdownOpen(false);
  };

  return (
    <div className="bg-bg-color flex min-h-screen justify-center p-6">
      <div className="w-[85vw]">
        <div className="text-text-color bg-primary-color mb-8 rounded-lg p-6 shadow-lg">
          <h2 className="font mb-4 text-xl">Settings. General</h2>
          <div className="items-c mb-6 flex">
            <img src="/avatar.png" alt="Avatar" className="mr-4 h-24 w-24 rounded-full" />
            <button className="bg-secondary-color text-text-color ml-4 rounded px-4 py-2">
              Change Avatar
            </button>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">Jafry Goodman</div>
            <button className="text-text-color bg-secondary-color ml-4 rounded px-4 py-2">
              Change Name
            </button>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">lorem ipsum ....</div>
            <button className="text-text-color bg-secondary-color ml-4 rounded px-4 py-2">
              Change Description
            </button>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">jafry@gmail.com</div>
            <button className="text-text-color bg-secondary-color ml-4 rounded px-4 py-2">
              Change Mail
            </button>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">**********</div>
            <button className="text-text-color bg-secondary-color ml-4 rounded px-4 py-2">
              Change Pass
            </button>
          </div>
        </div>
        <div className="text-text-color bg-primary-color rounded-lg p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-bold">Settings. Customization</h2>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">Theme</div>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="bg-secondary-color border-primary-border-color text-text-color inline-flex w-full justify-center rounded-md border px-4 py-2 text-sm font-medium shadow-sm"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Select Theme
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {dropdownOpen && (
                <div
                  className="ring-secondary-color bg-primary-color absolute right-0 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="py-1" role="none">
                    {themes.map((theme) => (
                      <button
                        key={theme.value}
                        onClick={() => changeTheme(theme.value)}
                        className="hover:bg-primary-hover-color text-text-color flex w-full items-center px-4 py-2 text-sm"
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
          <div className="flex items-center">
            <div className="w-1/2 text-lg">Language</div>
            <button className="text-text-color bg-secondary-color ml-4 rounded px-4 py-2">
              Change Lang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
