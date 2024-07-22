import { useRouter } from 'next/router';
import React from 'react';

const games = [
  {
    id: 1,
    name: 'Crystal Kingdom',
    image: '/Games/CrystalKingdom.webp',
    description: 'Description for game 1',
  },
  {
    id: 2,
    name: 'Mystic Forest Adventure',
    image: '/Games/MysticForestAdventure.webp',
    description: 'Description for game 2',
  },
  {
    id: 3,
    name: 'Sky Pirates',
    image: '/Games/SkyPirates.webp',
    description: 'Description for game 3',
  },
  {
    id: 4,
    name: 'Vampire Hunters',
    image: '/Games/VampireHunters.webp',
    description: 'Description for game 4',
  },
  {
    id: 5,
    name: 'Wolfy Cards',
    image: '/Games/WolfyCards.webp',
    description: 'Description for game 5',
  },
  {
    id: 6,
    name: 'Zombie Apocalypse',
    image: '/Games/ZombieApocalypse.webp',
    description: 'Description for game 6',
  },
];

interface Params {
  id: string;
}

const GameDetailPage = ({ params }: { params: Params }) => {
  const { id } = params;

  const game = games.find((game) => game.id === parseInt(id, 10));

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="flex min-h-screen justify-center bg-blue-700 p-6">
      <div className="w-full max-w-3xl">
        <h2 className="mb-4 text-xl font-bold text-white">{game.name}</h2>
        <div className="rounded-lg bg-blue-800 p-6 text-white shadow-lg">
          <img src={game.image} alt={game.name} className="mb-4 h-auto w-full rounded" />
          <p className="text-center">{game.description}</p>
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;
