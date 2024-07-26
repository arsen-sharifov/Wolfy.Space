'use client';

import React from 'react';
import { SHORTS, NEWS } from './constants';

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-bg-color p-6">
      <div className="mx-auto w-[85vw]">
        <h2 className="mb-4 text-xl font-bold text-text-color">Wolfy Shorts</h2>
        <div className="mb-8 grid grid-cols-6 gap-4">
          {SHORTS.map((short) => (
            <div key={short.id} className="h-[256px] w-[128px] rounded-lg bg-white shadow-lg">
              <img
                src={short.image}
                alt={`Short ${short.id}`}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
        <h2 className="mb-4 text-xl font-bold text-text-color">Wolfy News</h2>
        <div className="space-y-8">
          {NEWS.map((item) => (
            <div key={item.id} className="rounded-lg bg-primary-color p-4 shadow-lg">
              <img
                src={item.image}
                alt={`News ${item.id}`}
                className="mb-4 h-[512px] w-full rounded-lg object-cover"
              />
              <p className="text-text-color">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
