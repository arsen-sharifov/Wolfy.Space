'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const BurgerMenu = () => {
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="fixed left-0 top-0 z-30 flex w-full items-center justify-between bg-primary-color p-1 shadow-lg">
        <button
          onClick={toggleMenu}
          className="flex h-10 w-10 flex-col items-center justify-center focus:outline-none lg:hidden"
        >
          <span
            className={`block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${
              isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
            }`}
          ></span>
          <span
            className={`my-0.5 block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${
              isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
            }`}
          ></span>
        </button>
      </div>
      <div
        className={`fixed left-0 top-0 z-20 w-full transform flex-col items-center bg-primary-color bg-opacity-90 p-4 pb-0 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-12' : '-translate-y-full'
        }`}
        style={{ height: 'auto', maxHeight: '100vh' }}
      >
        <div className="flex flex-col items-center">
          <div className="mb-4 flex flex-col items-center">
            <div className="mb-2 h-10 w-10 rounded-full">
              <img
                src="/assets/home/images/avatar.png"
                alt="Logo"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <span className="text-lg text-text-color">Profil Name</span>
          </div>
          <nav className="flex w-full flex-col space-y-2">
            <Link href="/Home" legacyBehavior>
              <a className="w-full" onClick={toggleMenu}>
                <button className="w-full rounded-md bg-secondary-color py-2 text-text-color">
                  {t('Home')}
                </button>
              </a>
            </Link>
            <Link href="/News" legacyBehavior>
              <a className="w-full" onClick={toggleMenu}>
                <button className="w-full rounded-md bg-secondary-color py-2 text-text-color">
                  {t('News')}
                </button>
              </a>
            </Link>
            <Link href="/Games" legacyBehavior>
              <a className="w-full" onClick={toggleMenu}>
                <button className="w-full rounded-md bg-secondary-color py-2 text-text-color">
                  {t('Games')}
                </button>
              </a>
            </Link>
            <Link href="/Settings" legacyBehavior>
              <a className="w-full" onClick={toggleMenu}>
                <button className="w-full rounded-md bg-secondary-color py-2 text-text-color">
                  {t('Settings')}
                </button>
              </a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="w-full" onClick={toggleMenu}>
                <button className="w-full rounded-md bg-secondary-color py-2 text-text-color">
                  {t('Exit')}
                </button>
              </a>
            </Link>
          </nav>
          <div className="mb-2 mt-4 flex flex-grow items-center justify-center">
            <div className="h-[128px] w-[128px] rounded-full">
              <img
                src="/assets/general/images/logo.webp"
                alt="Logo"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
