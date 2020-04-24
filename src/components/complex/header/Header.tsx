import React, { FC } from 'react';
import { Link } from '@reach/router';
import { PATHS } from '../../../common/paths';
import { Search } from './Search';
import { UserAvatar } from '../../ui/avatar/UserAvatar';

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
          <Search />
          <UserAvatar />
        </div>
      </div>
    </header>
  );
};
