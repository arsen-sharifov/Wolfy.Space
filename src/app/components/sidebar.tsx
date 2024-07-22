import React from 'react';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-[15vw] flex-col items-center bg-blue-800 p-4">
      <div className="mb-4 flex flex-col items-center">
        <div className="mb-2 h-16 w-16 rounded-full">
          <img src="/avatar.png" alt="Logo" className="h-46" />
        </div>
        <span className="text-lg text-white">Profil Name</span>
      </div>
      <nav className="flex w-full flex-col space-y-2">
        <button className="w-full rounded-md bg-blue-300 py-2 text-black">Home</button>
        <button className="w-full rounded-md bg-blue-300 py-2 text-black">News</button>
        <button className="w-full rounded-md bg-blue-300 py-2 text-black">Games</button>
        <button className="w-full rounded-md border-black bg-blue-300 py-2 text-black">
          Settings
        </button>
        <button className="w-full rounded-md bg-blue-300 py-2 text-black">Exit</button>
      </nav>
      <div className="flex-grow"></div>
      <div className="mb-4">
        <img src="/logo.png" alt="Logo" className="h-46" />
      </div>
    </div>
  );
};

export default Sidebar;
