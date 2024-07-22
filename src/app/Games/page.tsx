import React from 'react';
import Link from 'next/link';

const games = [
  { id: 1, name: 'Crystal Kingdom', image: '/Games/CrystalKingdom.webp' },
  { id: 2, name: 'Mystic Forest Adventure', image: '/Games/MysticForestAdventure.webp' },
  { id: 3, name: 'Sky Pirates', image: '/Games/SkyPirates.webp' },
  { id: 4, name: 'Vampire Hunters', image: '/Games/VampireHunters.webp' },
  { id: 5, name: 'Wolfy Cards', image: '/Games/WolfyCards.webp' },
  { id: 6, name: 'Zombie Apocalypse', image: '/Games/ZombieApocalypse.webp' },
];

const GamesPage = () => {
  return (
    <div className="flex min-h-screen justify-center bg-blue-700 p-6">
      <div className="w-[85vw]">
        <h2 className="mb-4 text-xl font-bold text-white">Wolfy Games</h2>
        <div className="grid grid-cols-3 gap-4">
          {games.map((game) => (
            <Link key={game.id} href={`/Games/${game.id}`} passHref legacyBehavior>
              <a className="cursor-pointer rounded-lg bg-white p-4 shadow-lg">
                <img
                  src={game.image}
                  alt={game.name}
                  className="h-70 mb-2 w-full rounded object-cover"
                />
                <h3 className="text-center font-bold text-black">{game.name}</h3>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
