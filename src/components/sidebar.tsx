'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LoadingText from '../components/common/loading-text';

const Sidebar = () => {
  const { t, ready } = useTranslation('common');

  return (
    <div className="fixed left-0 top-0 flex h-screen w-[15vw] flex-col items-center bg-primary-color p-4">
      <div className="mb-4 flex flex-col items-center">
        <div className="mb-2 h-16 w-16 rounded-full">
          <img src="/assets/home/images/avatar.png" alt="Logo" className="h-46" />
        </div>
        <span className="text-lg text-text-color">Profil Name</span>
      </div>
      <nav className="flex w-full flex-col space-y-2">
        <Link href="/Home" legacyBehavior>
          <a className="w-full">
            <button className="w-full rounded-md bg-secondary-color py-2 text-text-color">
              <LoadingText isReady={ready}>{t('Home')}</LoadingText>
            </button>
          </a>
        </Link>
        <Link href="/News" legacyBehavior>
          <a className="w-full">
            <button className="w-full rounded-md bg-secondary-color py-2 text-text-color">
              <LoadingText isReady={ready}>{t('News')}</LoadingText>
            </button>
          </a>
        </Link>
        <Link href="/Games" legacyBehavior>
          <a className="w-full">
            <button className="w-full rounded-md bg-secondary-color py-2 text-text-color">
              <LoadingText isReady={ready}>{t('Games')}</LoadingText>
            </button>
          </a>
        </Link>
        <Link href="/Settings" legacyBehavior>
          <a className="w-full">
            <button className="w-full rounded-md bg-secondary-color py-2 text-text-color">
              <LoadingText isReady={ready}>{t('Settings')}</LoadingText>
            </button>
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a className="w-full">
            <button className="w-full rounded-md bg-secondary-color py-2 text-text-color">
              <LoadingText isReady={ready}>{t('Exit')}</LoadingText>
            </button>
          </a>
        </Link>
      </nav>
      <div className="flex-grow"></div>
      <div className="mb-4">
        <img src="/assets/general/images/logo.png" alt="Logo" className="h-46" />
      </div>
    </div>
  );
};

export default Sidebar;
