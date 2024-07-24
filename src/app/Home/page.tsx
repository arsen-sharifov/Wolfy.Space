'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
  const { t, i18n } = useTranslation('common');
  return (
    <div className="flex min-h-screen justify-center bg-bg-color p-6">
      <div className="w-[85vw]">
        <div className="mb-8 rounded-lg bg-primary-color p-6 text-text-color shadow-lg">
          <div className="mb-4 flex items-center">
            <img
              src="/assets/home/images/avatar.png"
              alt="Avatar"
              className="mr-4 h-24 w-24 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold">
                Jafry Goodman
                <span className="rounded bg-pink-500 px-2 py-1 text-sm text-text-color">admin</span>
              </h2>
              <p className="mt-1">
                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-around">
            <div className="text-center">
              <div className="text-3xl font-bold">177</div>
              <div>{t('Friends')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">12</div>
              <div>{t('Posts')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">33</div>
              <div>{t('Achievements')}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <div className="w-full max-w-2xl rounded-lg bg-primary-color p-6 shadow-lg">
            <img
              src="/assets/home/images/post_1.png"
              alt="Post"
              className="mb-4 h-auto w-full rounded"
            />
            <p>
              The popular game 'Mystic Forest Adventures' has just released a highly anticipated
              expansion pack. This new update introduces several new levels, magical creatures, and
              challenging quests. Players can now explore the enchanted Crystal Caves and battle
              against the fierce Dragon King. The expansion pack also includes enhanced graphics and
              new music tracks, providing a more immersive gaming experience. Fans are excited about
              the new content and are eagerly diving back into the mystical world.
            </p>
          </div>
          <div className="w-full max-w-2xl rounded-lg bg-primary-color p-6 shadow-lg">
            <img
              src="/assets/home/images/post_2.png"
              alt="Post"
              className="mb-4 h-auto w-full rounded"
            />
            <p>
              Renowned DJ and music producer, DJ SonicWave, has released his latest album, "Eclipse
              of Sound." The album features an innovative mix of electronic beats, ambient
              soundscapes, and collaborations with various artists from around the world. Critics
              are praising the album for its unique blend of genres and cutting-edge production
              techniques. "Eclipse of Sound" is set to dominate the charts and has already become a
              favorite among electronic music enthusiasts. Fans can stream the album on all major
              platforms starting today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
