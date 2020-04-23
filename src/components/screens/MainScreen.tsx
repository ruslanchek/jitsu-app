import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { ScreenLayout } from '../global/ScreenLayout';

interface IProps extends RouteComponentProps {}

export const MainScreen: FC<IProps> = () => {
  return (
    <ScreenLayout>
      <div className='min-h-screen grid grid-cols-4'>
        <div className='bg-blue-100 col-span-1 flex items-center justify-center'>1</div>
        <div className='bg-gray-100 col-span-2 flex items-center justify-center'>2</div>
        <div className='bg-blue-200 col-span-1 flex items-center justify-center'>3</div>
      </div>
    </ScreenLayout>
  );
};
