import React from 'react';

const ProfilePage = () => {
  return (
    <div className="flex min-h-screen justify-center bg-blue-700 p-6">
      <div className="w-[85vw]">
        <div className="mb-8 rounded-lg bg-blue-800 p-6 text-white shadow-lg">
          <div className="mb-4 flex items-center">
            <img src="/avatar.png" alt="Avatar" className="mr-4 h-24 w-24 rounded-full" />
            <div>
              <h2 className="text-2xl font-bold">
                Jafry Goodman
                <span className="rounded bg-pink-500 px-2 py-1 text-sm text-white">admin</span>
              </h2>
              <p className="mt-1">
                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-around">
            <div className="text-center">
              <div className="text-3xl font-bold">177</div>
              <div>Friends</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">12</div>
              <div>Posts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">33</div>
              <div>Achievements</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
            <img src="/post_1.png" alt="Post" className="mb-4 h-auto w-full rounded" />
            <p>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </p>
          </div>
          <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
            <img src="/post_2.png" alt="Post" className="mb-4 h-auto w-full rounded" />
            <p>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
