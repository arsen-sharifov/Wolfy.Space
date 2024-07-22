import React from 'react';
import Link from 'next/link';

const games = [
  { id: 1, name: 'Wolfy Cards', image: '/post_1.png' },
  { id: 2, name: 'Wolfy Cards', image: '/post_2.png' },
  { id: 3, name: 'Wolfy Cards', image: '/post_1.png' },
  { id: 4, name: 'Wolfy Cards', image: '/post_2.png' },
  { id: 5, name: 'Wolfy Cards', image: '/post_1.png' },
  { id: 6, name: 'Wolfy Cards', image: '/post_2.png' },
];

const GamesPage = () => {
  return (
    <div className="flex min-h-screen justify-center bg-blue-700 p-6">
      <div className="w-full max-w-5xl">
        <h2 className="mb-4 text-xl font-bold text-white">Wolfy Games</h2>
        <div className="grid grid-cols-3 gap-4">
          {games.map((game) => (
            <Link key={game.id} href={`/Games/${game.id}`} passHref legacyBehavior>
              <a className="cursor-pointer rounded-lg bg-white p-4 shadow-lg">
                <img
                  src={game.image}
                  alt={game.name}
                  className="mb-2 h-32 w-full rounded object-cover"
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
