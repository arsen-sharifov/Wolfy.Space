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

  const toggleSubMenu = (e: any, index: any) => {
    e.preventDefault();
    setActiveIndex(activeIndex === index ? null : index);
  };

  const topItems = menuItems.filter((item) => !item.isBottom);

  return (
    <aside
      className={`transition-width fixed left-0 top-0 z-50 h-full bg-primary-color p-6 duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-24'
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      style={{ overflowX: 'hidden' }}
    >
      <div className="flex items-center">
        <div className="h-10 w-10 flex-shrink-0 rounded-full">
          <img
            src="/assets/home/images/avatar.png"
            alt="Avatar"
            className="h-full w-full object-cover"
          />
        </div>
        {isOpen && (
          <h2 className="ml-6 whitespace-nowrap text-xl font-semibold text-text-color">
            Arsen Sharifov
          </h2>
        )}
      </div>
      <ul className="no-scrollbar mt-6 flex-grow overflow-y-auto overflow-x-hidden">
        {topItems.map((item, index) => (
          <li key={index} className="group relative">
            <Link href={item.link} legacyBehavior>
              <a className="flex items-center gap-4 rounded-md px-2 py-3 text-text-color transition-colors hover:bg-secondary-color hover:text-text-color">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center">
                  <img
                    src={item.icon}
                    alt={`${item.name} icon`}
                    className="h-full w-full object-contain"
                  />
                </div>
                {isOpen && (
                  <div className="flex w-full items-center justify-between">
                    <LoadingText isReady={ready}>{t(item.name)}</LoadingText>
                    {item.subItems && (
                      <img
                        src="/assets/icons/arrow-down.svg"
                        alt="Arrow"
                        className={`h-4 w-4 transition-transform duration-300 ${
                          activeIndex === index ? 'rotate-180' : ''
                        }`}
                        onClick={(e) => toggleSubMenu(e, index)}
                      />
                    )}
                  </div>
                )}
              </a>
            </Link>
            {item.subItems && activeIndex === index && isOpen && (
              <ul className="ml-10 mt-2 space-y-2">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={subItem.link} legacyBehavior>
                      <a className="block rounded-md p-2 text-sm text-text-color transition-colors hover:bg-secondary-color hover:text-[#161a2d]">
                        <LoadingText isReady={ready}>{t(subItem.name)}</LoadingText>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
