'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LoadingText from '../common/loading-text';
import menuItems from './items.json';

const Sidebar = () => {
  const { t, ready } = useTranslation('common');
  const [activeIndex, setActiveIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const topItems = menuItems.filter((item) => !item.isBottom);
  const bottomItems = menuItems.filter((item) => item.isBottom);

  return (
    <div
      className={`transition-width fixed left-0 top-0 z-10 flex h-screen flex-col bg-primary-color p-3 duration-200 ${
        isOpen ? 'w-72' : 'w-16'
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="mb-4 flex items-center">
        <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-gray-300">
          <img
            src="/assets/home/images/avatar.png"
            alt="Avatar"
            className="h-full w-full object-cover"
          />
        </div>
        {isOpen && (
          <div className="ml-4">
            <div className="text-lg text-text-color">Arsen Sharifov</div>
            <div className="text-sm text-gray-500">arsen.sharifov@gmail.com</div>
          </div>
        )}
      </div>
      <nav className="flex flex-grow flex-col space-y-1">
        {topItems.map((item, index) => (
          <div key={index} className="group relative">
            <Link href={item.link} legacyBehavior>
              <a className="flex items-center rounded-md py-2 group-hover:bg-secondary-color">
                <div className="flex h-10 w-10 items-center justify-center">
                  <img src={item.icon} alt={`${item.name} icon`} width="24" height="24" />
                </div>
                {isOpen && (
                  <div className="ml-2 flex w-full items-center justify-between text-text-color">
                    <LoadingText isReady={ready}>{t(item.name)}</LoadingText>
                    {item.subItems && (
                      <span className="ml-2">{activeIndex === index ? '▲' : '▼'}</span>
                    )}
                  </div>
                )}
              </a>
            </Link>
            {item.subItems && activeIndex === index && isOpen && (
              <div className="transition-max-height ml-12 mt-2 space-y-1 overflow-hidden duration-200 ease-in-out">
                {item.subItems.map((subItem, subIndex) => (
                  <Link key={subIndex} href={subItem.link} legacyBehavior>
                    <a className="flex items-center rounded-md p-2 group-hover:bg-secondary-color">
                      <div className="ml-3 h-1 w-6 rotate-45 transform border-b-2 border-l-2 border-white"></div>
                      <button className="ml-2 w-full text-text-color">
                        <LoadingText isReady={ready}>{t(subItem.name)}</LoadingText>
                      </button>
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="my-4 w-full border-t border-gray-300"></div>
      <nav className="flex flex-col space-y-1">
        {bottomItems.map((item, index) => (
          <div key={index} className="group relative">
            <Link href={item.link} legacyBehavior>
              <a className="flex items-center rounded-md py-2 group-hover:bg-secondary-color">
                <div className="flex h-10 w-10 items-center justify-center">
                  <img src={item.icon} alt={`${item.name} icon`} width="24" height="24" />
                </div>
                {isOpen && (
                  <div className="ml-2 flex w-full items-center justify-between text-text-color">
                    <LoadingText isReady={ready}>{t(item.name)}</LoadingText>
                  </div>
                )}
              </a>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
