import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-4 transition duration-200 transform hover:scale-105"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
