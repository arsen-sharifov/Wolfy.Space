'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import withAuth from '../../components/with-auth';
import { useTranslation } from 'react-i18next';
import PostCard from '../../components/common/postCard';

const ProfilePage = () => {
  const { data: session } = useSession();
  const { t } = useTranslation('common');

  return (
    <div className="flex min-h-screen justify-center bg-bg-color p-6">
      <div className="m-0 flex min-h-screen max-w-[90vw]">
        <div className="w-[85vw]">
          <div className="mb-8 rounded-lg bg-white p-6 text-text-color shadow-lg">
            <div className="relative mb-4 h-32 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              <img
                src={session?.user?.image || '/assets/home/images/avatar.png'}
                alt="Avatar"
                className="absolute bottom-0 left-4 -mb-12 h-24 w-24 rounded-full border-4 border-white"
              />
            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold">{session?.user?.name || 'Arsen Sharifov'}</h2>
              <p className="text-gray-500">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <h3 className="mb-4 text-xl font-bold text-text-color">Last Posts</h3>
              <div className="space-y-4">
                <div className="mt-4 p-2">
                  <PostCard
                    authorName="Arsen Sharifov"
                    authorAvatar="/assets/home/images/avatar.png"
                    postTime="Thursday, Jun 31, 4:15 PM"
                    content="I'm going to release my new iOS app really soon, can't wait to share it with you guys to hear a great feedback on this!"
                    likes={12}
                    comments={0}
                    shares={2}
                    image="/assets/news/images/News_3.png"
                  />
                </div>
                <div className="p-2">
                  <PostCard
                    authorName="Arsen Sharifov"
                    authorAvatar="/assets/home/images/avatar.png"
                    postTime="Thursday, Jun 31, 4:15 PM"
                    content="I'm going to release my new iOS app really soon, can't wait to share it with you guys to hear a great feedback on this!"
                    likes={12}
                    comments={0}
                    shares={2}
                    image="/assets/news/images/News_5.png"
                  />
                </div>
                <div className="p-2">
                  <PostCard
                    authorName="Arsen Sharifov"
                    authorAvatar="/assets/home/images/avatar.png"
                    postTime="Thursday, Jun 31, 4:15 PM"
                    content="I'm going to release my new iOS app really soon, can't wait to share it with you guys to hear a great feedback on this!"
                    likes={12}
                    comments={0}
                    shares={2}
                    image="/assets/news/images/News_6.png"
                  />
                </div>
                <div className="p-2">
                  <PostCard
                    authorName="Arsen Sharifov"
                    authorAvatar="/assets/home/images/avatar.png"
                    postTime="Thursday, Jun 31, 4:15 PM"
                    content="I'm going to release my new iOS app really soon, can't wait to share it with you guys to hear a great feedback on this!"
                    likes={12}
                    comments={0}
                    shares={2}
                    image="/assets/news/images/News_7.png"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-text-color">Analytics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg">
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-gray-500">{t('Friends')}</div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg">
                  <div className="text-2xl font-bold">73</div>
                  <div className="text-gray-500">{t('Achievements')}</div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg">
                  <div className="text-2xl font-bold">1200</div>
                  <div className="text-gray-500">{t('Posts')}</div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg">
                  <div className="text-2xl font-bold">8811</div>
                  <div className="text-gray-500">{t('Visits')}</div>
                </div>
              </div>
              <div className="flex w-[100%] justify-between">
                <div className="mr-6 mt-6 w-[60%] space-y-2 rounded-lg bg-white p-4">
                  <h3 className="mb-4 text-xl font-bold text-text-color">Contacts</h3>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/assets/icons/avatars/avatar_1.svg"
                      alt="Contact"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Helena Thornton</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/assets/icons/avatars/avatar_2.svg"
                      alt="Contact"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Adam Mendoza</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/assets/icons/avatars/avatar_3.svg"
                      alt="Contact"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Philip Kelly</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/assets/icons/avatars/avatar_4.svg"
                      alt="Contact"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Mabelle Frank</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/assets/icons/avatars/avatar_5.svg"
                      alt="Contact"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Tillie Benson</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/assets/icons/avatars/avatar_6.svg"
                      alt="Contact"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Todd Torres</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/assets/icons/avatars/avatar_7.svg"
                      alt="Contact"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Cynthia Henry</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/assets/icons/avatars/avatar_8.svg"
                      alt="Contact"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Francis Newman</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/assets/icons/avatars/avatar_9.svg"
                      alt="Contact"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Michael Gonzales</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/assets/icons/avatars/avatar_10.svg"
                      alt="Contact"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Ray Hammond</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/assets/icons/avatars/avatar_11.svg"
                      alt="Contact"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Myrtle Welch</div>
                  </div>
                </div>
                <div className="mt-6 w-[40%] space-y-2 rounded-lg bg-white p-4">
                  <h3 className="mb-4 text-xl font-bold text-text-color">Groups</h3>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/assets/icons/companies/nike.png"
                      alt="Group"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Nike</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/assets/icons/companies/netflix.png"
                      alt="Group"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Netflix</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/assets/icons/companies/tesla.png"
                      alt="Group"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Tesla</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/assets/icons/companies/microsoft.png"
                      alt="Group"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Microsoft</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(ProfilePage);
