'use client';

import { usePathname } from 'next/navigation';
import Sidebar from './sidebar';
import { I18nextProvider } from 'react-i18next';
import i18n, { I18nInit } from '../../i18n';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const HIDE_SIDEBAR_ROUTES = ['/', '/login', '/signup'];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
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

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const shouldShowSidebar = !HIDE_SIDEBAR_ROUTES.includes(pathname);

  return (
    <I18nextProvider i18n={i18n}>
      <I18nInit />
      <ThemeProvider>
        <div className="layout flex max-w-full">
          {shouldShowSidebar && <Sidebar />}
          <main className={shouldShowSidebar ? 'ml-[15vw] w-full' : 'w-full'}>{children}</main>
        </div>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default ClientWrapper;
