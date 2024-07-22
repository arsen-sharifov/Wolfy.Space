'use client';

import { usePathname } from 'next/navigation';
import Sidebar from './sidebar';

const HIDE_SIDEBAR_ROUTES = ['/', '/login', '/signup'];

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const shouldShowSidebar = !HIDE_SIDEBAR_ROUTES.includes(pathname);

  return (
    <div className="layout flex max-w-full">
      {shouldShowSidebar && <Sidebar />}
      <main className="ml-[15vw] box-border">{children}</main>
    </div>
  );
};

export default ClientWrapper;
