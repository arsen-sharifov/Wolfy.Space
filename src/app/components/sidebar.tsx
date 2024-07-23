import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-primary-color fixed left-0 top-0 flex h-screen w-[15vw] flex-col items-center p-4">
      <div className="mb-4 flex flex-col items-center">
        <div className="mb-2 h-16 w-16 rounded-full">
          <img src="/avatar.png" alt="Logo" className="h-46" />
        </div>
        <span className="text-text-color text-lg">Profil Name</span>
      </div>
      <nav className="flex w-full flex-col space-y-2">
        <Link href="/Home" legacyBehavior>
          <a className="w-full">
            <button className="bg-secondary-color text-text-color w-full rounded-md py-2">
              Home
            </button>
          </a>
        </Link>
        <Link href="/News" legacyBehavior>
          <a className="w-full">
            <button className="bg-secondary-color text-text-color w-full rounded-md py-2">
              News
            </button>
          </a>
        </Link>
        <Link href="/Games" legacyBehavior>
          <a className="w-full">
            <button className="bg-secondary-color text-text-color w-full rounded-md py-2">
              Games
            </button>
          </a>
        </Link>
        <Link href="/Settings" legacyBehavior>
          <a className="w-full">
            <button className="bg-secondary-color text-text-color w-full rounded-md py-2">
              Settings
            </button>
          </a>
        </Link>
        <Link href="/Exit" legacyBehavior>
          <a className="w-full">
            <button className="bg-secondary-color text-text-color w-full rounded-md py-2">
              Exit
            </button>
          </a>
        </Link>
      </nav>
      <div className="flex-grow"></div>
      <div className="mb-4">
        <img src="/logo.png" alt="Logo" className="h-46" />
      </div>
    </div>
  );
};

export default Sidebar;
