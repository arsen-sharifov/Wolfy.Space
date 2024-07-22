import React from 'react';

const SettingsPage = () => {
  return (
    <div className="flex min-h-screen justify-center bg-blue-700 p-6">
      <div className="w-[85vw]">
        <div className="mb-8 rounded-lg bg-blue-800 p-6 text-white shadow-lg">
          <h2 className="font mb-4 text-xl">Settings. General</h2>
          <div className="items-c mb-6 flex">
            <img src="/avatar.png" alt="Avatar" className="mr-4 h-24 w-24 rounded-full" />
            <button className="ml-4 rounded bg-white px-4 py-2 text-blue-800">Change Avatar</button>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">Jafry Goodman</div>
            <button className="ml-4 rounded bg-white px-4 py-2 text-blue-800">Change Name</button>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">lorem ipsum ....</div>
            <button className="ml-4 rounded bg-white px-4 py-2 text-blue-800">
              Change Description
            </button>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">jafry@gmail.com</div>
            <button className="ml-4 rounded bg-white px-4 py-2 text-blue-800">Change Mail</button>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">**********</div>
            <button className="ml-4 rounded bg-white px-4 py-2 text-blue-800">Change Pass</button>
          </div>
        </div>
        <div className="rounded-lg bg-blue-800 p-6 text-white shadow-lg">
          <h2 className="mb-4 text-xl font-bold">Settings. Customization</h2>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 text-lg">Theme</div>
            <div className="flex space-x-2">
              <div className="h-8 w-8 rounded-full bg-white"></div>
              <div className="h-8 w-8 rounded-full bg-gray-800"></div>
              <div className="h-8 w-8 rounded-full bg-black"></div>
              <div className="h-8 w-8 rounded-full bg-green-500"></div>
              <div className="h-8 w-8 rounded-full bg-blue-500"></div>
              <div className="h-8 w-8 rounded-full bg-yellow-500"></div>
              <div className="h-8 w-8 rounded-full bg-orange-500"></div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1/2 text-lg">Language</div>
            <button className="ml-4 rounded bg-white px-4 py-2 text-blue-800">Change Lang</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
