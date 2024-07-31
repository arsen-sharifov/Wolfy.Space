import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded bg-secondary-color px-4 py-2 text-text-color ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
