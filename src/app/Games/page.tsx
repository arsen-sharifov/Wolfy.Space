'use client';

import React from 'react';
import Link from 'next/link';

const games = [
  { id: 1, name: 'Crystal Kingdom', image: 'assets/games/images/CrystalKingdom.webp' },
  {
    id: 2,
    name: 'Mystic Forest Adventure',
    image: 'assets/games/images/MysticForestAdventure.webp',
  },
  { id: 3, name: 'Sky Pirates', image: 'assets/games/images/SkyPirates.webp' },
  { id: 4, name: 'Vampire Hunters', image: 'assets/games/images/VampireHunters.webp' },
  { id: 5, name: 'Wolfy Cards', image: 'assets/games/images/WolfyCards.webp' },
  { id: 6, name: 'Zombie Apocalypse', image: 'assets/games/images/ZombieApocalypse.webp' },
];

const GamesPage = () => {
  return (
    <div className="flex min-h-screen justify-center bg-bg-color p-6">
      <div className="w-[85vw]">
        <h2 className="mb-4 text-xl font-bold text-text-color">Wolfy Games</h2>
        <div className="grid grid-cols-3 gap-4">
          {games.map((game) => (
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
