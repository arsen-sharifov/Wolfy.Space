'use client';

import React from 'react';
import { GAMES } from './constants';

interface Params {
  id: string;
}

const GameDetailPage = ({ params }: { params: Params }) => {
  const { id } = params;

  const game = GAMES.find((game) => game.id === parseInt(id, 10));

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="flex min-h-screen justify-center bg-primary-color p-6">
      <div className="w-full max-w-3xl">
        <h2 className="mb-4 text-xl font-bold text-text-color">{game.name}</h2>
        <div className="rounded-lg bg-blue-800 p-6 text-text-color shadow-lg">
          <img src={game.image} alt={game.name} className="mb-4 h-auto w-full rounded" />
          <p className="text-center">{game.description}</p>
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;
