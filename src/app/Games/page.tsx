'use client';

import React from 'react';
import Link from 'next/link';
import withAuth from '../../components/with-auth';
import { GAMES } from './constants';

const GamesPage = () => {
  return (
    <div className="flex min-h-screen justify-center bg-bg-color p-6">
      <div className="m-0 flex min-h-screen max-w-[90vw]">
        <div className="w-[85vw]">
          <h2 className="mb-4 text-xl font-bold text-text-color">Wolfy Games</h2>
          <div className="grid grid-cols-4 gap-4">
            {GAMES.map((game) => (
              <Link key={game.id} href={`/Games/${game.id}`} passHref legacyBehavior>
                <a className="transform cursor-pointer rounded-lg bg-white p-4 shadow-lg transition-transform hover:scale-105">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="mb-2 h-[256px] w-full rounded object-cover"
                  />
                  <h3 className="text-center font-bold text-text-color">{game.name}</h3>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(GamesPage);
