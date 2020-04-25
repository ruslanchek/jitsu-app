import React, { FC } from 'react';
import { Link } from '@reach/router';
import { PATHS } from '../../../common/paths';
import { Search } from './Search';
import { UserAvatar } from '../../ui/avatar/UserAvatar';
import { RiMenuLine, RiAddLine, RiNotification3Line } from 'react-icons/ri';

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
          <div className='flex-0 mr-4'>
            <a
              href='#'
              className='flex w-10 h-10 items-center justify-center bg-gray-200 hover:bg-gray-300 ml-2 rounded-full transition-colors duration-200 text-xl'>
              <RiAddLine />
            </a>
          </div>
          <Search />
          <a
            href='#'
            className='flex ml-4 w-10 h-10 items-center justify-center hover:bg-gray-200 ml-2 rounded-full transition-colors duration-200'>
            <RiNotification3Line className='w-6 h-6' />
          </a>
          <div className='ml-4'>
            <div className='flex h-10 p-1 pr-2 font-medium items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200 cursor-pointer'>
              <UserAvatar size='medium' />
              <div className='whitespace-no-wrap px-3'>Ruslan</div>
            </div>
          </div>
          <a
            href='#'
            className='flex w-10 h-10 items-center justify-center hover:bg-gray-200 ml-4 rounded-full transition-colors duration-200'>
            <RiMenuLine className='w-6 h-6' />
          </a>
        </div>
      </div>
    </header>
  );
};
