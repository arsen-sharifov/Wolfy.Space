'use client';

import React from 'react';
import Link from 'next/link';
import { GAMES } from './constants';

const GamesPage = () => {
  return (
    <div className="flex min-h-screen justify-center bg-bg-color p-6">
      <div className="w-[85vw]">
        <h2 className="mb-4 text-xl font-bold text-text-color">Wolfy Games</h2>
        <div className="grid grid-cols-3 gap-4">
          {GAMES.map((game) => (
            <Link key={game.id} href={`/Games/${game.id}`} passHref legacyBehavior>
              <a className="cursor-pointer rounded-lg bg-primary-color p-4 shadow-lg">
                <img
                  src={game.image}
                  alt={game.name}
                  className="h-70 mb-2 w-full rounded object-cover"
                />
                <h3 className="text-center font-bold text-text-color">{game.name}</h3>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
