import React from 'react';

const shorts = [
  { id: 1, image: '/short_1.png' },
  { id: 2, image: '/short_2.png' },
  { id: 3, image: '/short_3.png' },
  { id: 4, image: '/short_4.png' },
  { id: 5, image: '/short_5.png' },
];

const news = [
  {
    id: 1,
    image: '/news_1.png',
    text: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  },
  {
    id: 2,
    image: '/news_2.png',
    text: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  },
];

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-blue-700 p-6">
      <div className="mx-auto w-[85vw]">
        <h2 className="mb-4 text-xl font-bold text-white">Wolfy Shorts</h2>
        <div className="mb-8 grid grid-cols-5 gap-4">
          {shorts.map((short) => (
            <div key={short.id} className="h-32 w-full rounded-lg bg-white shadow-lg">
              <img
                src={short.image}
                alt={`Short ${short.id}`}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
        <h2 className="mb-4 text-xl font-bold text-white">Wolfy News</h2>
        <div className="space-y-8">
          {news.map((item) => (
            <div key={item.id} className="rounded-lg bg-white p-4 shadow-lg">
              <img
                src={item.image}
                alt={`News ${item.id}`}
                className="mb-4 h-48 w-full rounded-lg object-cover"
              />
              <p className="text-black">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
