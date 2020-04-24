import React, { FC } from 'react';
import { RiCheckboxCircleLine, RiCalendarLine } from 'react-icons/ri';

export const Plan: FC = () => {
  return (
    <div className='rounded-lg bg-white shadow-md mt-6 text-gray-800'>
      <header className='border-b border-gray-200 p-4'>
        <h3 className='font-bold text-xl'>Agile Mornings</h3>
        <p className='text-sm mt-1'>Workplace One</p>
      </header>
      <section className='border-gray-200 border-b border-gray-200 p-4 text-sm flex'>
        <RiCalendarLine className='text-xl mr-2 w-6 flex-shrink-0 text-gray-600' />
        <div>
          June 28, 2018 8:30 AM to 9:30 AM
          <div className='text-gray-600'>Repeats every 3 weeks</div>
        </div>
      </section>
      <section className='border-gray-200 p-4 text-gray-600 text-sm border-b border-gray-200'>
        <strong className='text-gray-800'>26</strong> people going to this event
      </section>
      <footer className='flex items-center p-4 text-sm'>
        <RiCheckboxCircleLine className='text-xl mr-2 w-6 flex-shrink-0 text-green-600' /> Accepted
      </footer>
    </div>
  );
};
