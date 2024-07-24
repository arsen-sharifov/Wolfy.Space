'use client';

import React from 'react';

const shorts = [
  { id: 1, image: 'assets/news/images/shorts_1.png' },
  { id: 2, image: 'assets/news/images/shorts_2.png' },
  { id: 3, image: 'assets/news/images/shorts_3.png' },
  { id: 4, image: 'assets/news/images/shorts_4.png' },
  { id: 5, image: 'assets/news/images/shorts_5.png' },
  { id: 6, image: 'assets/news/images/shorts_6.png' },
];

const news = [
  {
    id: 1,
    image: 'assets/news/images/News_1.webp',
    text: 'Scientists have announced a significant breakthrough in renewable energy, developing a new type of solar panel that is 50% more efficient than existing technology. This advancement could lead to more affordable and widespread use of solar energy, drastically reducing our reliance on fossil fuels.',
  },
  {
    id: 2,
    image: 'assets/news/images/News_2.webp',
    text: 'Today, a leading technology company revealed its latest smartphone, boasting cutting-edge features such as a 108MP camera, AI-driven performance enhancements, and a sleek design. The new device aims to revolutionize mobile photography and user experience, with pre-orders starting next week.',
  },
];

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-bg-color p-6">
      <div className="mx-auto w-[85vw]">
        <h2 className="mb-4 text-xl font-bold text-text-color">Wolfy Shorts</h2>
        <div className="mb-8 grid grid-cols-6 gap-4">
          {shorts.map((short) => (
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
          {news.map((item) => (
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
