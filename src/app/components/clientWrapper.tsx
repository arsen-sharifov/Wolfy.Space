'use client';

import { usePathname } from 'next/navigation';
import Sidebar from './sidebar';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../i18n'; // імпортуйте налаштування i18n
import { useEffect } from 'react';

const HIDE_SIDEBAR_ROUTES = ['/', '/login', '/signup'];

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const shouldShowSidebar = !HIDE_SIDEBAR_ROUTES.includes(pathname);

  return (
    <I18nextProvider i18n={i18n}>
      <div className="layout flex max-w-full">
        {shouldShowSidebar && <Sidebar />}
        <main className="ml-[15vw] box-border">{children}</main>
      </div>
    </I18nextProvider>
  );
};

export default ClientWrapper;
