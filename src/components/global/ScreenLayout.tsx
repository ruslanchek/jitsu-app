import React, { FC } from 'react';
import { Header } from '../complex/header/Header';
import { SectionLabel } from '../ui/label/SectionLabel';
import { RiReactjsLine, RiRocket2Line, RiCoinsLine, RiArtboardLine } from 'react-icons/ri';
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
        <div className='min-h-screen text-gray-700'>
          <Header />
          <div className='flex bg-white'>
            <div className='flex-none w-full md:max-w-xs'>
              <div className='px-8 py-6'>
                <SectionLabel>Projects</SectionLabel>
                <nav className='mt-2'>
                  <div className='px-3 py-2 flex items-center mb-1 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200'>
                    <RiRocket2Line className='mr-4 text-xl' />
                    API Development
                  </div>
                  <div className='px-3 py-2 flex items-center mb-1 bg-purple-100 text-purple-600 rounded-lg cursor-pointer transition-colors duration-200'>
                    <RiReactjsLine className='mr-4 text-xl' />
                    EO Web App
                  </div>
                  <div className='px-3 py-2 flex items-center mb-1 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200'>
                    <RiCoinsLine className='mr-4 text-xl' />
                    Management
                  </div>
                  <div className='px-3 py-2 flex items-center mb-1 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200'>
                    <RiArtboardLine className='mr-4 text-xl' />
                    Kanban
                  </div>
                </nav>
                <div className='mt-6 mb-2'>
                  <SectionLabel>Agenda</SectionLabel>
                </div>
                <Plan />
                <div className='mt-6 mb-2'>
                  <SectionLabel>Favorites</SectionLabel>
                </div>
                <div className='mt-6 mb-2'>
                  <SectionLabel>Team</SectionLabel>
                </div>
                <div className='mt-6 mb-2'>
                  <SectionLabel>Wiki</SectionLabel>
                </div>
              </div>
            </div>
            <div className='flex-1 py-6 pr-8 pl-4'>{children}</div>
          </div>
        </div>
      )}
    </main>
  );
};
