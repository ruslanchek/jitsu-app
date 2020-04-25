import React, { FC } from 'react';
import { Header } from '../complex/header/Header';
import { SectionLabel } from '../ui/label/SectionLabel';
import {
  RiReactjsLine,
  RiCoinsLine,
  RiServerLine,
  RiBarChartGroupedLine,
  RiHtml5Line,
  RiRadarLine,
  RiBuildingLine,
  RiBaseStationLine,
  RiFilePaperLine,
  RiMapPinTimeLine,
  RiPlugLine,
  RiListSettingsLine,
} from 'react-icons/ri';
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
              <div style={{ height: 'calc(100vh - 4rem)' }} className='overflow-auto'>
                <div className='px-8 py-6'>
                  <SectionLabel>Projects</SectionLabel>
                  <nav className='mt-2'>
                    <div className='px-3 py-2 flex items-center mb-1 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200'>
                      <RiServerLine className='mr-4 text-xl' />
                      API Development
                    </div>
                    <div className='px-3 py-2 flex items-center mb-1 bg-purple-100 text-purple-600 rounded-lg cursor-pointer transition-colors duration-200'>
                      <RiReactjsLine className='mr-4 text-xl' />
                      EO Web App
                    </div>
                    <div className='px-3 py-2 flex items-center mb-1 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200'>
                      <RiBarChartGroupedLine className='mr-4 text-xl' />
                      Chart
                    </div>
                    <div className='px-3 py-2 flex items-center mb-1 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200'>
                      <RiCoinsLine className='mr-4 text-xl' />
                      Billing
                    </div>
                  </nav>
                  <div className='mt-6 mb-2'>
                    <SectionLabel>Favorites</SectionLabel>
                    <nav className='mt-2'>
                      <div className='px-3 py-2 flex items-center mb-1 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200'>
                        <RiServerLine className='mr-4 text-xl' />
                        API Development
                      </div>
                      <div className='px-3 py-2 flex items-center mb-1 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200'>
                        <RiReactjsLine className='mr-4 text-xl' />
                        EO Web App
                      </div>
                    </nav>
                  </div>
                  <div className='mt-6 mb-2'>
                    <SectionLabel>Teams</SectionLabel>
                    <nav className='mt-2'>
                      <div className='px-3 py-2 flex items-center mb-1 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200'>
                        <RiHtml5Line className='mr-4 text-xl' />
                        Frontend
                      </div>
                      <div className='px-3 py-2 flex items-center mb-1 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200'>
                        <RiServerLine className='mr-4 text-xl' />
                        Backend
                      </div>
                      <div className='px-3 py-2 flex items-center mb-1 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200'>
                        <RiRadarLine className='mr-4 text-xl' />
                        Marketing
                      </div>
                      <div className='px-3 py-2 flex items-center mb-1 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200'>
                        <RiBuildingLine className='mr-4 text-xl' />
                        Management
                      </div>
                    </nav>
                  </div>
                  <div className='mt-6 mb-2'>
                    <SectionLabel>Wiki</SectionLabel>
                    <nav className='mt-2'>
                      <div className='px-3 py-2 flex items-center mb-1 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200'>
                        <RiBaseStationLine className='mr-4 text-xl' />
                        API
                      </div>
                      <div className='px-3 py-2 flex items-center mb-1 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200'>
                        <RiFilePaperLine className='mr-4 text-xl' />
                        Documents
                      </div>
                      <div className='px-3 py-2 flex items-center mb-1 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200'>
                        <RiMapPinTimeLine className='mr-4 text-xl' />
                        Sessions
                      </div>
                      <div className='px-3 py-2 flex items-center mb-1 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200'>
                        <RiPlugLine className='mr-4 text-xl' />
                        Socket
                      </div>
                      <div className='px-3 py-2 flex items-center mb-1 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200'>
                        <RiListSettingsLine className='mr-4 text-xl' />
                        Transactions
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: 'calc(100vh - 4rem)' }} className='overflow-auto flex-1'>
              <div className='py-6 pr-8 pl-4'>{children}</div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
