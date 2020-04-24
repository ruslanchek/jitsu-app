import React, { FC } from 'react';
import { Link } from '@reach/router';
import { PATHS } from '../../../common/paths';
import { RiSearch2Line } from 'react-icons/ri';

export const Header: FC = () => {
  return (
    <header className='h-16 sticky top-0 left-0 right-0 border-b border-gray-200 bg-white'>
      <div className='flex'>
        <div className='flex-none w-full md:max-w-xs'>
          <Link to={PATHS.MAIN} className='px-8 py-4 w-full h-full flex items-center'>
            <img src={require('../../../img/cive.svg')} alt='Cive' className='h-8 block' />
          </Link>
        </div>
        <div className='h-16 flex items-center w-full justify-end px-8'>
          <div className='relative'>
            <input className='bg-gray-200 text-gray-800 outline-none h-10 px-10 rounded-lg focus:bg-gray-300 transition-colors duration-200' />
            <div className='absolute text-gray-500 flex top-0 h-10 items-center px-4 pointer-events-none'>
              <RiSearch2Line className='mr-2 text-gray-600' />
              Search
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
