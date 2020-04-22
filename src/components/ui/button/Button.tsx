import React, { FC, ButtonHTMLAttributes } from 'react';

interface IProps {
  attrs: ButtonHTMLAttributes<HTMLButtonElement>;
}

export const Button: FC<IProps> = ({ attrs, children }) => {
  return (
    <button
      {...attrs}
      className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline shadow-md transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10'>
      {children}
    </button>
  );
};
