'use client';

import React from 'react';
import { GAMES } from './constants';
import withAuth from '../../../components/with-auth';

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
    <div className="flex min-h-screen justify-center bg-bg-color p-6">
      <div className="m-0 flex min-h-screen max-w-[90vw]">
        <div className="w-full max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-text-color">{game.name}</h2>
          <div className="rounded-lg bg-white p-6 text-text-color shadow-lg">
            <img src={game.image} alt={game.name} className="mb-4 w-full rounded object-cover" />
            <p className="text-center text-lg">{game.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(GameDetailPage);
