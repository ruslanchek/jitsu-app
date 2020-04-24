import React, { FC } from 'react';
import { RiCheckboxCircleLine, RiCalendarLine, RiArrowRightCircleLine, RiArrowRightLine } from 'react-icons/ri';
import { UserAvatar } from '../avatar/UserAvatar';
import { Button } from '../button/Button';

export const Plan: FC = () => {
  return (
    <div className='bg-white mt-6 text-gray-800'>
      <header className='border-b border-gray-200 px-5 py-3 text-white bg-indigo-600 rounded-tl-lg rounded-tr-lg'>
        <h3 className='font-bold text-xl'>Agile Mornings</h3>
        <p className='text-sm mt-1 text-indigo-300'>Workplace One</p>
      </header>
      <section className='border-gray-200 border-b border-l border-r border-gray-300 px-5 py-4 text-sm flex'>
        <RiCalendarLine className='text-xl mr-2 w-6 flex-shrink-0 text-gray-600' />
        <div>
          June 28, 2018 8:30 AM to 9:30 AM
          <div className='text-gray-600'>Repeats every 3 weeks</div>
        </div>
      </section>
      <section className='border-gray-200 px-5 py-4 text-gray-600 text-sm border-b border-l border-r border-gray-300'>
        <strong className='text-gray-800'>26</strong> people going to this event
      </section>
      <section className='border-gray-200 px-5 py-4 text-gray-600 text-sm border-b border-l border-r border-gray-300 flex'>
        <div className='mr-1'>
          <UserAvatar size='small' />
        </div>
        <div className='mr-1'>
          <UserAvatar size='small' />
        </div>
        <div className='mr-1'>
          <UserAvatar size='small' />
        </div>
        <div className='mr-1'>
          <UserAvatar size='small' />
        </div>
        <div className='mr-1'>
          <UserAvatar size='small' />
        </div>
      </section>
      <section className='border-gray-200 px-5 py-4 text-gray-600 text-sm border-b border-l border-r border-gray-300 flex'>
        <RiCheckboxCircleLine className='text-xl mr-2 w-6 flex-shrink-0 text-green-600' /> Accepted
      </section>
      <footer className='flex items-center px-5 py-4 text-sm border-l border-r border-b rounded-bl-lg rounded-br-lg'>
        <Button style='faded' size='small' attrs={{}}>
          Book <RiArrowRightLine className='ml-2' />
        </Button>
      </footer>
    </div>
  );
};
