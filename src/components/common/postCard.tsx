import React from 'react';

const PostCard = ({
  authorName,
  authorAvatar,
  postTime,
  content,
  likes,
  comments,
  shares,
  image,
}) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-2">
        <img src={authorAvatar} alt={`${authorName} avatar`} className="h-8 w-8 rounded-full" />
        <div className="flex flex-col">
          <div className="text-sm font-bold text-text-color">{authorName}</div>
          <div className="text-xs text-gray-500">{postTime}</div>
        </div>
      </div>
      <p className="mt-2 text-text-color">{content}</p>
      {image && (
        <div className="mt-4">
          <img src={image} alt="Post content" className="w-full rounded-lg" />
        </div>
      )}
      <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <img src="/assets/icons/like.svg" alt="Like" className="h-4 w-4" />
          <span>{likes} Likes</span>
        </div>
        <span>{comments} Comments</span>
        <span>{shares} Shares</span>
      </div>
    </div>
  );
};

export default PostCard;
