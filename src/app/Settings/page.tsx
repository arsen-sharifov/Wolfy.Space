// pages/SettingsPage.tsx

'use client';

import React from 'react';
import { useSettings } from './useSettigns';
import Button from '../../components/common/button';
import ButtonDropdown from '../../components/common/button-dropdown';

const SettingsPage: React.FC = () => {
  const { t, changeTheme, changeLanguage, THEMES, LANGUAGES } = useSettings();

  return (
    <div className="box-border flex min-h-screen w-[85vw] justify-center bg-bg-color p-6">
      <div className="w-full">
        <div className="mb-8 rounded-lg bg-primary-color p-6 text-text-color shadow-lg">
          <h2 className="font mb-4 text-xl">{t('SettingsGeneral')}</h2>
          <div className="items-c mb-6 flex">
            <img src="/avatar.png" alt="Avatar" className="mr-4 h-24 w-24 rounded-full" />
            <Button className="ml-4">{t('ChangeAvatar')}</Button>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">Jafry Goodman</div>
            <Button className="ml-4">{t('ChangeName')}</Button>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">lorem ipsum ....</div>
            <Button className="ml-4">{t('ChangeDescription')}</Button>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">jafry@gmail.com</div>
            <Button className="ml-4">{t('ChangeMail')}</Button>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">**********</div>
            <Button className="ml-4">{t('ChangePass')}</Button>
          </div>
        </div>
        <div className="rounded-lg bg-primary-color p-6 text-text-color shadow-lg">
          <h2 className="mb-4 text-xl font-bold">{t('SettingsCustomization')}</h2>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">{t('Theme')}</div>
            <ButtonDropdown
              label={t('SelectTheme')}
              items={THEMES}
              onSelect={changeTheme}
              className="ml-4"
            />
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">{t('Language')}</div>
            <ButtonDropdown
              label={t('SelectLanguage')}
              items={LANGUAGES}
              onSelect={changeLanguage}
              className="ml-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
