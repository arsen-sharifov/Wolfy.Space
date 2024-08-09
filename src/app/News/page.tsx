'use client';

import React from 'react';
import withAuth from '../../components/with-auth';

const NewsPage = () => {
  return (
    <div className="flex justify-center bg-bg-color">
      <div className="m-0 flex min-h-screen max-w-[90vw]">
        <div className="w-2/4 space-y-4 p-4">
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
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/home/images/avatar2.png"
                alt="User"
                className="h-8 w-8 rounded-full"
              />
              <div className="flex flex-col">
                <div className="text-sm font-bold text-text-color">Ray Hammond</div>
                <div className="text-xs text-gray-500">Thursday, Jun 31, 5:50 PM</div>
              </div>
            </div>
            <p className="mt-2 text-text-color">
              I'm so glad to share with you guys some photos from my recent trip to New York. This
              city looks amazing, the buildings, nature, people all are beautiful, I highly
              recommend to visit this cool place! Also I would like to know what is your favorite
              place here or what you would like to visit?
            </p>
            <div className="mt-2 flex space-x-2">
              <img
                src="/assets/home/images/ny1.png"
                alt="NY1"
                className="w-1/2 rounded-lg object-cover"
              />
              <img
                src="/assets/home/images/ny2.png"
                alt="NY2"
                className="w-1/2 rounded-lg object-cover"
              />
            </div>
            <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <img src="/assets/home/images/like.png" alt="Like" className="h-4 w-4" />
                <span>245 Likes</span>
              </div>
              <span>8 Comments</span>
              <span>0 Shares</span>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/home/images/avatar3.png"
                alt="User"
                className="h-8 w-8 rounded-full"
              />
              <div className="flex flex-col">
                <div className="text-sm font-bold text-text-color">Todd Torres</div>
                <div className="text-xs text-gray-500">Thursday, Jun 31, 4:15 PM</div>
              </div>
            </div>
            <p className="mt-2 text-text-color">
              I'm going to release my new iOS app really soon, can't wait to share it with you guys
              to hear a great feedback on this!
            </p>
            <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <img src="/assets/home/images/like.png" alt="Like" className="h-4 w-4" />
                <span>12 Likes</span>
              </div>
              <span>0 Comments</span>
              <span>2 Shares</span>
            </div>
          </div>
        </div>
        <div className="w-1/4 space-y-4 p-4">
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
            <img src="/assets/ads/shoes.png" alt="Ad" className="mt-4 rounded-lg object-cover" />
            <p className="mt-2 text-sm">Special offer: 20% off today</p>
            <a href="http://nike.com" className="text-sm text-blue-500">
              http://nike.com
            </a>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <h2 className="text-lg font-bold text-text-color">Birthdays in August</h2>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                <div className="text-sm">Tillie Benson</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                <div className="text-sm">Cynthia Henry</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 space-y-4 p-4">
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <h2 className="text-lg font-bold text-text-color">Groups</h2>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                <div className="text-sm">Nike</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                <div className="text-sm">Netflix</div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <h2 className="text-lg font-bold text-text-color">Contacts</h2>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                <div className="text-sm">Helena Thornton</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                <div className="text-sm">Adam Mendoza</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                <div className="text-sm">Philip Kelly</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                <div className="text-sm">Mabelle Frank</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                <div className="text-sm">Tillie Benson</div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <h2 className="text-lg font-bold text-text-color">Messages</h2>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                <div className="flex flex-col">
                  <div className="text-sm font-bold text-text-color">Adam, Eve, Anna, Peter</div>
                  <div className="text-xs text-gray-500">Today at 3:30 PM</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gray-300"></div>
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
