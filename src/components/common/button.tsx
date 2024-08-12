import React, { useState } from 'react';

const Button = ({ label, onClick }: any) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      className={`inline-flex cursor-pointer justify-center rounded-lg px-4 py-2 text-sm font-medium shadow-lg transition-all duration-300 ${isClicked ? 'bg-primary-color text-text-color' : 'bg-bg-color text-text-color hover:bg-primary-color hover:text-text-color'}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {label}
    </button>
  );
};

export default Button;
