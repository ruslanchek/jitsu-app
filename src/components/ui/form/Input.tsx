import React, { FC, InputHTMLAttributes } from 'react';

interface IProps {
  attrs: InputHTMLAttributes<HTMLInputElement>;
}

export const Input: FC<IProps> = ({ attrs }) => {
  return (
    <input
      {...attrs}
      className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-2 px-3 block w-full appearance-none leading-normal'
    />
  );
};
