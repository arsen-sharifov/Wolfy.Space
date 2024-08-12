'use client';

import React from 'react';
import withAuth from '../../components/with-auth';
import PostCard from '../../components/common/postCard';

const NewsPage = () => {
  return (
    <div className="flex justify-center bg-bg-color">
      <div className="m-0 flex min-h-screen max-w-[90vw]">
        <div className="w-8/12 p-4">
          <div className="flex items-center space-x-4 bg-white p-3">
            <img
              src="/assets/home/images/avatar.png"
              alt="Avatar"
              className="h-12 w-12 rounded-full"
            />
            <input
              type="text"
              placeholder="What's new?"
              className="flex-grow rounded-lg bg-white p-2 shadow-sm focus:outline-none"
            />
          </div>
          <div className="mt-4 p-2">
            <PostCard
              authorName="Mabelle Frank"
              authorAvatar="/assets/icons/avatars/avatar_4.svg"
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
              authorName="Todd Torres"
              authorAvatar="/assets/icons/avatars/avatar_10.svg"
              postTime="Thursday, Jun 31, 4:15 PM"
              content="I'm going to release my new iOS app really soon, can't wait to share it with you guys to hear a great feedback on this!"
              likes={12}
              comments={0}
              shares={2}
              image="/assets/news/images/News_4.png"
            />
          </div>
          <div className="p-2">
            <PostCard
              authorName="Adam Mendoza"
              authorAvatar="/assets/icons/avatars/avatar_2.svg"
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
              authorName="Todd Torres"
              authorAvatar="/assets/icons/avatars/avatar_10.svg"
              postTime="Thursday, Jun 31, 4:15 PM"
              content="I'm going to release my new iOS app really soon, can't wait to share it with you guys to hear a great feedback on this!"
              likes={12}
              comments={0}
              shares={2}
              image="/assets/news/images/News_6.png"
            />
          </div>
        </div>
        <div className="w-2/12 space-y-4 p-4">
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <h2 className="text-lg font-bold text-text-color">Upcoming Events</h2>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                <div className="text-sm">Apple Keynote</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                <div className="text-sm">30 Second to Mars</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                <div className="text-sm">Captain Marvel Premiere</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                <div className="text-sm">UX Design Course</div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <h2 className="text-lg font-bold text-text-color">Advertising</h2>
            <img
              src="/assets/home/images/advertisement.png"
              alt="Ad"
              className="mt-4 rounded-lg object-cover"
            />
            <p className="mt-2 text-sm">Special offer: 20% off today</p>
            <a href="http://nike.com" className="text-sm text-blue-500">
              http://nike.com
            </a>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <h2 className="text-lg font-bold text-text-color">Birthdays in August</h2>
            <div className="mt-4 space-y-2">
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
            </div>
          </div>
        </div>
        <div className="w-2/12 space-y-4 p-4">
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <h2 className="text-lg font-bold text-text-color">Groups</h2>
            <div className="mt-4 space-y-2">
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
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <h2 className="text-lg font-bold text-text-color">Contacts</h2>
            <div className="mt-4 space-y-2">
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
          </div>
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <h2 className="text-lg font-bold text-text-color">Messages</h2>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <img
                  src="/assets/home/images/group_logo_2.png"
                  alt="User"
                  className="h-8 w-8 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="text-sm font-bold text-text-color">Adam, Eve, Anna, Peter</div>
                  <div className="text-xs text-gray-500">Today at 3:30 PM</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="/assets/home/images/group_logo_1.png"
                  alt="User"
                  className="h-8 w-8 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="text-sm font-bold text-text-color">Funny Stuff</div>
                  <div className="text-xs text-gray-500">Thursday, Jun 31, 5:50 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(NewsPage);
