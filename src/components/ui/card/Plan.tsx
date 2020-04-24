import React, { FC } from 'react';

export const Plan: FC = () => {
  return (
    <div className='rounded-lg bg-white shadow-md'>
      <header className='border-b border-gray-200 p-4'>
        <h3 className='font-bold text-xl'>Agile Mornings</h3>
        <p className='text-sm mt-1 text-gray-800'>Workplace One</p>
      </header>
      <section className='border-gray-200 border-b border-gray-200 p-4'>x</section>
      <section className='border-gray-200 p-4 text-gray-600 text-sm'>
        <strong className='text-gray-800'>26</strong> people going to this event
      </section>
      <footer></footer>
    </div>
  );
};
