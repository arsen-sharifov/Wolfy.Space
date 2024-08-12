'use client';

import React from 'react';
import withAuth from '../../components/with-auth';
import { useSettings } from './useSettings';
import Dropdown from '../../components/common/dropdown';
import Button from '../../components/common/button';

const SettingsPage = () => {
  const { t, changeTheme, changeLanguage, THEMES, LANGUAGES } = useSettings();

  return (
    <div className="flex min-h-screen justify-center bg-bg-color p-6">
      <div className="w-[85vw] space-y-4">
        <div className="mb-4 rounded-lg bg-white p-6 text-text-color shadow-lg">
          <div className="mb-4 flex items-center">
            <img
              src="/assets/home/images/avatar.png"
              alt="Avatar"
              className="mr-4 h-24 w-24 rounded-full bg-blue-500"
            />
            <div className="flex flex-col space-y-2">
              <Button label={t('ChangeAvatar')} onClick={() => console.log('Change Avatar')} />
              <Button
                label={t('ChangeBackground')}
                onClick={() => console.log('Change Background')}
              />
            </div>
          </div>
          <hr className="my-4" />
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-1/2 text-lg">Jafry Goodman</div>
              <Button
                className="ml-4"
                label={t('ChangeName')}
                onClick={() => console.log('Change Name')}
              />
            </div>
            <div className="flex items-center">
              <div className="w-1/2 text-lg">lorem ipsum ....</div>
              <Button
                className="ml-4"
                label={t('ChangeDescription')}
                onClick={() => console.log('Change Description')}
              />
            </div>
            <div className="flex items-center">
              <div className="w-1/2 text-lg">jafry@gmail.com</div>
              <Button
                className="ml-4"
                label={t('ChangeMail')}
                onClick={() => console.log('Change Mail')}
              />
            </div>
            <div className="flex items-center">
              <div className="w-1/2 text-lg">**********</div>
              <Button
                className="ml-4"
                label={t('ChangePass')}
                onClick={() => console.log('Change Password')}
              />
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 text-text-color shadow-lg">
          <h2 className="mb-4 text-xl font-bold">{t('SettingsCustomization')}</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-1/2 text-lg">{t('Theme')}</div>
              <Dropdown label={t('ChangeTheme')} items={THEMES} onSelect={changeTheme} />
            </div>
            <div className="flex items-center">
              <div className="w-1/2 text-lg">{t('Language')}</div>
              <Dropdown label={t('ChangeLanguage')} items={LANGUAGES} onSelect={changeLanguage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(SettingsPage);
