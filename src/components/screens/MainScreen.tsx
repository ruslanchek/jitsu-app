import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { ScreenLayout } from '../global/ScreenLayout';
import styles from './MainScreen.module.pcss';

interface IProps extends RouteComponentProps {}

export const MainScreen: FC<IProps> = () => {
  return (
    <ScreenLayout>
      <div className='max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
        <input
          className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
          type='email'
          placeholder='jane@example.com'
        />
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <img className='w-full' src='/img/card-top.jpg' alt='Sunset in the mountains' />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>The Coldest Sunset</div>
            <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className='px-6 py-4'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
              #photography
            </span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
              #travel
            </span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
              #winter
            </span>
          </div>
        </div>
        <div className='sm:flex sm:items-center px-6 py-4'>
          <img
            className='block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full'
            src='https://randomuser.me/api/portraits/women/17.jpg'
            alt="Woman's Face"
          />
          <div className='mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left'>
            <p className='text-xl leading-tight'>Erin Lindford</p>
            <p className='text-sm leading-tight text-gray-600'>Customer Support Specialist</p>
            <div className='mt-4'>
              <button className='text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal'>
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </ScreenLayout>
  );
};
