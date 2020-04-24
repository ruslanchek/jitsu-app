import React, { FC } from 'react';
import { RiSearch2Line } from 'react-icons/ri';

export const Search: FC = () => {
  return (
    <div className='relative'>
      <input className='bg-gray-200 text-gray-800 outline-none h-10 px-10 rounded-lg focus:bg-gray-300 transition-colors duration-200' />
      <div className='absolute text-gray-500 flex top-0 h-10 items-center px-4 pointer-events-none'>
        <RiSearch2Line className='mr-2 text-gray-600' />
        Search
      </div>
    </div>
  );
};
