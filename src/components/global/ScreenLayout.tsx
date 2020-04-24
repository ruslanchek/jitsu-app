import React, { FC, useEffect, useRef, useState } from 'react';
import { Header } from '../complex/header/Header';
import { SectionLabel } from '../ui/label/SectionLabel';
import { RiReactjsLine } from 'react-icons/ri';
import { Plan } from '../ui/card/Plan';

interface IProps {
  minimalUi?: boolean;
}

export const ScreenLayout: FC<IProps> = ({ children, minimalUi }) => {
  return (
    <main>
      {minimalUi ? (
        children
      ) : (
        <div className='min-h-screen'>
          <Header />
          <div className='flex bg-white'>
            <div className='flex-none w-full md:max-w-xs'>
              <div className='px-8 py-6'>
                <SectionLabel>Projects</SectionLabel>
                <nav className='mt-2'>
                  <div className='px-4 py-3 flex items-center mb-2 bg-purple-100 text-purple-600 rounded-lg'>
                    <RiReactjsLine className='mr-4 text-xl' />
                    EO Web App
                  </div>
                  <div className='bg-gray-100 px-4 py-3 text-gray-700 flex items-center hover:bg-gray-200 rounded-lg'>
                    <RiReactjsLine className='mr-4 text-xl' />
                    EO Web App
                  </div>
                </nav>
                <Plan />
              </div>
            </div>
            <div className='flex-1 py-6 pr-8 pl-4'>{children}</div>
          </div>
        </div>
      )}
    </main>
  );
};
